import puppeteer from 'puppeteer';
import connectToDatabase from '@/lib/mongodb';
import ScrapedData from '@/models/ScrapedData';


export const dynamic = 'force-dynamic';
export async function POST(request) {
  try {
    const { url, dataType } = await request.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
    }

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const scrapedData = await page.evaluate((dataType) => {
      const getMetaTagContent = (name) =>
        document.head.querySelector(`meta[name="${name}"]`)?.content ||
        document.head.querySelector(`meta[property="${name}"]`)?.content || '';

      const data = {
        title: document.title,
        description: getMetaTagContent('description'),
        keywords: getMetaTagContent('keywords'),
        ogTitle: getMetaTagContent('og:title'),
        ogDescription: getMetaTagContent('og:description'),
        ogImage: getMetaTagContent('og:image'),
        ogUrl: getMetaTagContent('og:url'),
        ogSiteName: getMetaTagContent('og:site_name'),
        otherMetaTags: Array.from(document.querySelectorAll('meta')).reduce((acc, meta) => {
          const nameAttr = meta.getAttribute('name') || meta.getAttribute('property');
          if (nameAttr) acc[nameAttr] = meta.getAttribute('content') || '';
          return acc;
        }, {}),
      };

      if (!dataType || dataType.includes('text')) {
        data.text = document.body.innerText;
      }

      if (!dataType || dataType.includes('images')) {
        data.images = Array.from(document.images, img => img.src).filter(src => src.startsWith('http'));
      }

      if (!dataType || dataType.includes('videos')) {
        data.videos = Array.from(document.getElementsByTagName('video'), video => video.currentSrc);
      }

      if (!dataType || dataType.includes('links')) {
        data.links = Array.from(document.links, link => link.href).filter(href => href.startsWith('http'));
      }

      return data;
    }, dataType);

    await browser.close();

    
    await connectToDatabase();

    try {
      const saved = await ScrapedData.create({
        url,
        data: scrapedData,
      });
      console.log('✅ Successfully saved to MongoDB:', saved._id);
    } catch (dbError) {
      console.error('❌ Failed to save to MongoDB:', dbError);
    }

    return new Response(JSON.stringify({ metadata: scrapedData, scrape_id: generateUUID() }), { status: 200 });

  } catch (error) {
    console.error('❌ Error during scraping:', error);
    return new Response(JSON.stringify({ error: 'Failed to load data', details: error.message }), { status: 500 });
  }
}

// Utility function to generate a unique scrape ID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}







import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
const Hero = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="block">AI-Powered Web Scraping</span>
            <span className="block text-primary">Simplified and Secure</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Scrapify revolutionizes web scraping with AI-driven insights, dynamic content extraction, and enhanced security features.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
          <Link href="/scrapeform">    <Button size="lg" className="w-full flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/learn-more">
                <Button variant="outline" size="lg" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;





           
        


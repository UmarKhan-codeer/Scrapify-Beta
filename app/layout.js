// import './globals.css';
// import { Inter } from 'next/font/google';
// import { ThemeProvider } from "@/components/theme-provider";
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'LiveCrawler - AI-Powered Web Scraping Platform',
//   description: 'Secure and intelligent web scraping with AI-powered summarization',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow">
//               {children}
//             </main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }














// app/layout.js (SERVER COMPONENT - no "use client")
import './globals.css';
// import { Inter, Montserrat } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoaderWrapper from '@/components/LoaderWrapper'; // 👈 CLIENT COMPONENT

// const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Scrapify - AI-Powered Web Scraping Platform',
  description: 'Secure and intelligent web scraping with AI-powered summarization',
};

export default function RootLayout({ children }) {
  return (
    <html  suppressHydrationWarning  lang="en" >
    
       {/* className={`${inter.variable} ${montserrat.variable}`}  */}
      <head>
        <link rel="icon" href="images/favicon.ico" />
        {/* <link rel="icon" href="/scrapify_favicon_large.ico" type="image/x-icon" /> */}

      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LoaderWrapper>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

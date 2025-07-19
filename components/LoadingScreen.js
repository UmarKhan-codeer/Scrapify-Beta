import Image from "next/image";

export default function LoadingScreen() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image using 'fill' layout */}
      <Image
        src="/images/backgroundimage.PNG" // ✅ correct path
        alt="Background"
        fill // ✅ use fill instead of setting width/height manually
        className="object-cover z-0"
        priority // optional: load it immediately
      />

      {/* Blurry overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
        <div className="text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold whitespace-nowrap typing-animation">
            DATA IS THE NEW CURRENCY
          </h1>
          <p className="mt-3 text-xl opacity-70">
            Scrapify - AI Enhanced Web Scraping Platform
          </p>
        </div>
      </div>
    </div>
  );
}


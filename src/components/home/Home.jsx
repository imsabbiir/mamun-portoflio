import React from "react";
import HiThere from "./HiThere";
import me from "@/media/me.png";
import Image from "next/image";
import Marquee from "./Marquee";

function Home() {
  return (
    <div className="w-full pt-10 bg-white dark:bg-[#1e1e28]">
      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5 text-center md:text-left">
          <HiThere />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-gray-900 dark:text-white">
            I’m{" "}
            <span className="font-light italic text-[#faa811]">
              Mamun or Rashid,
            </span>
            <br className="hidden sm:block" />
            Digital Marketer Based in Bangladesh.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m an experienced Digital Marketer with 5+ years in the field,
            helping brands grow through SEO, social media, content marketing,
            and paid advertising campaigns.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 gap-3 sm:gap-0 justify-center md:justify-start">
            <button className="px-6 py-3 cursor-pointer bg-[#314e36] text-white rounded-2xl font-medium hover:bg-[#263b2a] transition">
              View My Work
            </button>
            <button className="px-6 py-3 cursor-pointer border border-[#314e36] text-[#314e36] rounded-2xl font-medium hover:bg-[#314e36] hover:text-white transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src={me}
            alt="Mamun or Rashid - Digital Marketer"
            height={400}
            width={400}
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-[#faa811] dark:bg-[#2c2c38] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md text-xs sm:text-sm font-medium text-white">
            SEO Specialist
          </span>
          <span className="absolute bottom-8 left-4 bg-[#314e36] dark:bg-[#2c2c38] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md text-xs sm:text-sm font-medium text-white">
            Social Media Marketer
          </span>
          <span className="absolute top-0 md:top-6 left-1/2 -translate-x-1/2 bg-[#314e36] dark:bg-[#2c2c38] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md text-xs sm:text-sm font-medium text-white">
            Google Ads Expert
          </span>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full mt-12 relative">
        <div className="absolute w-full h-12 sm:h-16 bg-[#faa811] z-10 flex items-center">
          <Marquee />
        </div>
        <div className="w-full h-12 sm:h-16 bg-[#314e36] -rotate-2"></div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { FaHashtag } from "react-icons/fa";

const services = [
  "Google Analytics",
  "Facebook Ads Manager",
  "Google Ads",
  "Ahrefs / SEMrush",
  "Canva",
  "Mailchimp",
];

function Marquee() {
  return (
    <div className="overflow-hidden relative w-full bg-[#faa811] py-3">
      {/* First row */}
      <div className="flex gap-10 animate-marquee whitespace-nowrap font-bold text-white text-sm sm:text-base">
        {services.concat(services).map((service, index) => (
          <span key={index} className="flex items-center gap-2 sm:gap-5">
            <FaHashtag className="text-white" /> {service}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

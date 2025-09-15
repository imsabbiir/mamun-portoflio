import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function ServiceBox({ icon, title, description }) {
  return (
    <div className="bg-[#f4f4f4] shadow-md rounded-xl p-6 mt-10">
      <div className="text-3xl mb-4 bg-white h-16 w-16 flex items-center justify-center rounded-full text-[#2c4e35]">
        {icon}
      </div>
      <h3 className="text-xl text-[#303030] font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      <button className="mt-3 cursor-pointer text-amber-500 font-medium flex gap-1.5 items-center hover:gap-2 transition-all duration-300 ease-in-out">
        <span className="text-[#03756a]">Learn more</span>
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </div>
  );
}

export default ServiceBox;
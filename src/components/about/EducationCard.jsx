import React from "react";
import { FaUserGraduate } from "react-icons/fa";

function EducationCard() {
  const education = [
    { year: "2012-2014", title: "Harmony Institute" },
    { year: "2008-2012", title: "Aurora Academy" },
    { year: "1996-2008", title: "Crystalbrook" },
  ];
  return (
    <div className="bg-[#f4f4f4] p-8 rounded-xl shadow ">
      <div className="flex items-center gap-3 pb-8">
        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#ffa900]">
          <FaUserGraduate />
        </div>
        <h3 className="font-bold text-3xl">Education</h3>
      </div>
      <div className="flex flex-col gap-5">
        {education.map((item, i) => (
          <div key={i} className="pl-3 border-l-2 border-[#ffa900] bg-[#e7e7e7] py-1 shadow">
            <p className="font-semibold">{item.year}</p>
            <p>{item.title}</p>
            <p className="text-sm text-gray-600">Master in Visual Arts</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationCard;

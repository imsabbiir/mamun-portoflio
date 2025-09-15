import { MdOutlineWork } from "react-icons/md";
export default function ExperienceCard() {
  const work = [
    { year: "2018-2024", title: "Insightlancer" },
    { year: "2016-2018", title: "Self-Employed" },
    { year: "2014-2016", title: "KG Graphics Studio" },
  ];

  return (
    <div className="bg-[#f4f4f4] p-8 rounded-xl shadow ">
      <div className="flex items-center gap-3 pb-8">
        <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[#ffa900]">
          <MdOutlineWork />
        </div>
        <h3 className="font-bold text-3xl">Work Experience</h3>
      </div>
      <div className="flex flex-col gap-5">
        {work.map((item, i) => (
          <div
            key={i}
            className="pl-3 border-l-2 border-[#ffa900] bg-[#e7e7e7] py-1 shadow"
          >
            <p className="font-semibold">{item.year}</p>
            <p>{item.title}</p>
            <p className="text-sm text-gray-600">Master in Visual Arts</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { FaCheck } from "react-icons/fa";

export default function PricingCard({ type, price, tag, lists, highlight }) {
  return (
    <div
      className={`p-6 rounded-xl shadow text-left ${
        highlight ? "bg-[#ffa900]" : "bg-[#3d5b44]"
      }`}
    >
      <div className="p-5 bg-[#2c4e34] rounded-t-lg mb-7">
        <h3 className="font-bold text-xl mb-2 text-white">{type}</h3>
        <p className="text-3xl font-semibold mb-4 text-[#ffa900]">
          {price} <span className="text-base font-thin text-white">/{tag}</span>
        </p>
      </div>

      <ul className="space-y-2 text-sm">
        {lists?.map((list, index) => {
          return (
            <div key={index} className={`${list?.active ? "" : "opacity-40 cursor-not-allowed"} flex gap-3 items-center`}>
              <div className={`flex justify-center items-center w-6 h-6 rounded-full  ${highlight ? "bg-[#303030]" : "bg-[#ffa900]"}`}>
                <FaCheck className="text-xm"/>
              </div>
              <li className={`${highlight ? "text-[#303030]" : "text-white"}`}>{list?.listItem}</li>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

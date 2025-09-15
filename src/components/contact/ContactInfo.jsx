import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import SubTitle from "../SubTitle";
import Title from "../Title";
import { SiGmail } from "react-icons/si";
export default function ContactInfo() {
  return (
    <div className="md:col-span-2">
      <Title title={"Contact Us"} />
      <SubTitle
        firstText="Let’s Talk for"
        secondText="Your Next Projects"
        firstItalic={false}
        secondItalic={true}
        className="text-4xl"
      />
      <p className="text-gray-500 my-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolorum iusto fugiat voluptates vitae delectus dignissimos amet doloremque! Ad, reiciendis! Repellendus culpa necessitatibus fugiat quibusdam perferendis repellat vitae aliquam dicta.
      </p>
      <ul className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#ffa900] flex justify-center items-center"><FaPhoneAlt /></div>
          <li className="text-gray-500">+1 (406) 555-0120</li>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#ffa900] flex justify-center items-center"><SiGmail /></div>
          <li className="text-gray-500">mamun@gmail.com</li>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#ffa900] flex justify-center items-center"><FaMapPin /></div>
          <li className="text-gray-500">2464 Royal Ln. Mesa, New Jersey 45463</li>
        </div>
      </ul>
    </div>
  );
}

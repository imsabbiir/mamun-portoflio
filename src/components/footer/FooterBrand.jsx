import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function FooterBrand() {
  return (
    <div className="col-span-3">
      <h2 className="text-xl font-bold mb-4">Mamun.</h2>
      <p className="text-gray-600 mb-4 text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi nam quam odio possimus explicabo repellendus iure eaque reiciendis minima cupiditate rerum maxime, ipsa assumenda harum illum. Unde, totam asperiores?
      </p>
      <div className="flex gap-1.5">
        <a href="#" className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ffa900] text-[#303030]"><FaFacebookF /></a>
        <a href="#" className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ffa900] text-[#303030]"><FaYoutube/></a>
        <a href="#" className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ffa900] text-[#303030]"><FaTwitter /></a>
        <a href="#" className="h-8 w-8 rounded-full flex items-center justify-center bg-[#ffa900] text-[#303030]"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}

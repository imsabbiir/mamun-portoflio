export default function FooterBottom() {
  return (
    <div className="bg-[#2c4e35] text-white py-4 text-sm">
      <div className="w-9/10 md:w-[85%] mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>Copyright © 2024 <span className="text-[#ffa900]">Mamun</span>. All Rights Reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            User Terms & Conditions
          </a>
          |
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ContactForm() {
  return (
    <form action="" className="md:col-span-3">
      <div className="mt-16 md:mt-0 grid md:grid-cols-2 gap-3 ">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex: Sabbir Ahmed"
            className="w-full border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            placeholder="Ex: example@gmail.com"
            className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            I'm Interested In <span className="text-red-600">*</span>
          </label>
          <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
            <option>Select</option>
            <option>Web Design</option>
            <option>Development</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            Budget Range (USD) <span className="text-red-600">*</span>
          </label>
          <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
            <option>Select Range</option>
            <option>$500 - $1000</option>
            <option>$1000 - $5000</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="text-sm font-semibold ml-3">
            Country <span className="text-red-600">*</span>
          </label>
          <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
            <option>Select Country</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 md:col-span-2">
        <label htmlFor="" className="text-sm font-semibold ml-3">
          Your Message <span className="text-red-600">*</span>
        </label>
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900] resize-none"
          rows="5"
        />
      </div>

      <button
        type="submit"
        className="bg-[#ffa900] text-white p-3 rounded font-semibold cursor-pointer"
      >
        Send Message
      </button>
      </div>
    </form>
  );
}

{
  /* <form className="col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Ex: Sabbir Ahmed"
          className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Ex: example@gmail.com"
          className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          Phone <span className="text-red-600">*</span>
        </label>
        <input type="tel" placeholder="Enter Phone Number" className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          I'm Interested In <span className="text-red-600">*</span>
        </label>
        <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
          <option>Select</option>
          <option>Web Design</option>
          <option>Development</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          Budget Range (USD) <span className="text-red-600">*</span>
        </label>
        <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
          <option>Select Range</option>
          <option>$500 - $1000</option>
          <option>$1000 - $5000</option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-sm font-semibold">
          Country <span className="text-red-600">*</span>
        </label>
        <select className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]">
          <option>Select Country</option>
          <option>USA</option>
          <option>UK</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 col-span-2">
        <label htmlFor="" className="text-sm font-semibold">
          Your Message <span className="text-red-600">*</span>
        </label>
        <textarea
          placeholder="Your Message"
          className="border p-3 rounded-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900] resize-none"
          rows="5"
        />
      </div>

      <button
        type="submit"
        className="bg-[#ffa900] text-white p-3 rounded font-semibold cursor-pointer"
      >
        Send Message
      </button>
      </div>
    </form> */
}

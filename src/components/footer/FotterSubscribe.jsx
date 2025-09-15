export default function FooterSubscribe() {
  return (
    <div className="col-span-3">
      <h3 className="font-bold mb-4">Get the latest information</h3>
      <form className="flex">
        <input
          type="email"
          placeholder="Email address"
          className="border p-3 w-full rounded-l-lg bg-[#f4f4f4] focus:outline-1 focus:outline-[#ffa900]"
        />
        <button
          type="submit"
          className="bg-[#2c4e35] px-4 rounded-r-lg text-white font-semibold"
        >
          →
        </button>
      </form>
    </div>
  );
}

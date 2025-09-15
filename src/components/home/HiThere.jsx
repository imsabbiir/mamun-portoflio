import React from "react";

function HiThere() {
  return (
    <div className="relative border border-black w-fit h-fit mx-auto md:mx-0">
      <h2 className="px-5 py-1 text-lg font-light">Hi There!</h2>
      <div className="w-2 h-2 absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-amber-500"></div>
      <div className="w-2 h-2 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-amber-500"></div>
      <div className="w-2 h-2 absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 bg-amber-500"></div>
      <div className="w-2 h-2 absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 bg-amber-500"></div>
    </div>
  );
}

export default HiThere;

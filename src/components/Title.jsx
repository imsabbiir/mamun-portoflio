import React from "react";

function Title({ title, className = "" }) {
  return (
    <h2
      className={`
        capitalize pl-5 relative text-[#303030] w-fit after:absolute after:content-[""] after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-[3px] after:w-3.5 after:bg-amber-500 ${className}
      `}
    >
      {title}
    </h2>
  );
}

export default Title;

import React from "react";

function SubTitle({
  firstText,
  secondText,
  firstItalic = false,
  secondItalic = false,
  className = "",
}) {
  return (
    <h3 className={`text-3xl font-black text-[#303030] ${className}`}>
      <span className={`${firstItalic ? "italic text-[#ffa701]" : ""}`}>
        {firstText}{" "}
      </span>
      <span className={`${secondItalic ? "italic text-[#ffa701]" : ""}`}>
        {secondText}
      </span>
    </h3>
  );
}

export default SubTitle;

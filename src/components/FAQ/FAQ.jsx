import React from "react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import FAQItem from "./FAQItem";

function FAQ() {


  return (
    <div className="w-full bg-[#2c4e35]">
      <div className="w-[90%] lg:w-[85%] mx-auto py-16">
        <div className="mb-10">
          <Title title={"FAQs"} className="text-white mx-auto" />

          <SubTitle
            firstText="Questions?"
            secondText="Look Here"
            firstItalic={false}
            secondItalic={true}
            className="text-white text-3xl text-center"
          />
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
            <FAQItem />

        </div>
      </div>
    </div>
  );
}

export default FAQ;

import React from "react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
function Education() {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto py-20">
      <div className="text-center">
        <Title title={"Educations & Experiences"} className="mx-auto" />
        <SubTitle
          firstText="My"
          secondText="Academic and"
          firstItalic={false}
          secondItalic={true}
          className="text-3xl"
        />
        <SubTitle
          firstText="Professional"
          secondText="Journey"
          firstItalic={true}
          secondItalic={false}
          className="text-3xl"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <EducationCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default Education;

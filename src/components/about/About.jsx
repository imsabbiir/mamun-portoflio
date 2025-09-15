import React from "react";
import me from "@/media/about.png";
import Image from "next/image";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Education from "./Education";


function About() {
  return (
    <>
      <div className="w-full bg-[#2c4e35]">
        <div className="w-[90%] lg:w-[85%] mx-auto py-16 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={me}
              alt="Mamun or Rashid - Digital Marketer"
              height={500}
              width={500}
              className="w-full max-w-sm lg:max-w-full object-cover rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div>
            <Title title={"About Me"} className="text-white" />

            <SubTitle
              firstText="Who is"
              secondText="Mamun or Rashid"
              firstItalic={false}
              secondItalic={true}
              className="text-white text-3xl lg:text-4xl"
            />

            <p className="text-[#c1c1c1] text-base lg:text-sm mt-5 leading-relaxed">
              I'm a Digital Marketing Specialist with expertise in SEO, Google
              Ads, and Social Media Marketing. I help businesses grow their
              online presence, generate quality leads, and maximize ROI with
              data-driven strategies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
              <div>
                <h2 className="text-3xl font-semibold text-[#ffa701]">100+</h2>
                <p className="text-[#e1e1e1] text-sm">Project Complete</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-[#ffa701]">10+</h2>
                <p className="text-[#e1e1e1] text-sm">Industry Coverd</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h2 className="text-3xl font-semibold text-[#ffa701]">5+</h2>
                <p className="text-[#e1e1e1] text-sm">Years Of Experience</p>
              </div>
            </div>
            <button className="px-6 py-3 mt-8 cursor-pointer bg-[#ffa701] text-white rounded-2xl font-medium hover:bg-[#da9007] transition">
              Download My CV
            </button>
          </div>
        </div>
      </div>
      <Education />
      
    </>
  );
}

export default About;

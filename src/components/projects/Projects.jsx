import React from "react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import project1 from "@/media/1.jpg";
import project2 from "@/media/2.jpg";
import project3 from "@/media/3.jpg";
import project4 from "@/media/4.jpg";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    image: project1,
    title: "Heal – Healthcare Campaign",
    tags: ["SEO", "Social Media Marketing"],
    link: "https://example.com/heal-case-study",
    description:
      "Optimized a healthcare website with SEO strategies that boosted organic traffic by 180%. Ran targeted Facebook and Instagram campaigns that increased appointment bookings by 65%.",
  },
  {
    image: project2,
    title: "Italy Travel Agency",
    tags: ["SEO", "Social Media Marketing"],
    link: "https://example.com/italy-travel",
    description:
      "Implemented keyword optimization and content marketing for a travel agency. Created engaging travel content on social media, resulting in a 220% increase in inquiries during peak season.",
  },
  {
    image: project3,
    title: "Tree – E-commerce Store",
    tags: ["SEO", "Google Ads"],
    link: "https://example.com/tree-ecommerce",
    description:
      "Boosted an eco-friendly e-commerce store’s visibility with technical SEO and product page optimization. Managed Google Ads campaigns with a 4.5x ROAS and reduced ad spend wastage by 30%.",
  },
  {
    image: project4,
    title: "Switzerland Tourism Board",
    tags: ["Google Ads", "Social Media Marketing"],
    link: "https://example.com/switzerland-tourism",
    description:
      "Developed multi-channel campaigns combining Google Ads and social media for Switzerland’s tourism promotion. Achieved a 70% rise in web traffic and doubled event registrations.",
  },
];

function Projects() {
  return (
    <div className="w-full py-20 bg-[#f4f4f4]">
      <div className="w-9/10 md:w-[85%] mx-auto">
        <Title title={"My Portfolio"} className="" />
        <SubTitle
          firstText="My Latest"
          secondText="Projects"
          firstItalic={false}
          secondItalic={true}
          className=""
        />
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {projects?.map((project, index) => {
            return (
              <div key={index} className="rounded-2xl bg-white p-5">
                <Image
                  src={project.image}
                  alt={project?.title}
                  width={2000}
                  height={2000}
                  className="w-full md:h-[400px] object-cover rounded-t-lg"
                />

                {project?.tags?.map((tag, index) => {
                  <div
                    key={index}
                    className="w-fit h-fit px-6 rounded-full bg-[#ffa900]"
                  >
                    <span className="">{tag}</span>
                  </div>;
                })}
                <h2 className="text-2xl text-black font-semibold">{project?.title}</h2>
                <p className="mt-1 mb-4 text-sm text-justify text-gray-600">{project?.description}</p>
                <Link href={project?.link} className="font-semibold text-[#ffa900]">Live view</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

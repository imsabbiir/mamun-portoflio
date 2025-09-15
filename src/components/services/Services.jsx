import React from "react";
import Title from "../Title";
import SubTitle from "../SubTitle";
import ServiceBox from "./ServiceBox";
import { FaSearch, FaGoogle, FaFacebook } from "react-icons/fa";
const services = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "SEO",
    description:
      "Boost your website’s visibility and rank higher on Google with proven SEO strategies.",
  },
  {
    id: 2,
    icon: <FaGoogle />,
    title: "Google Ads",
    description:
      "Run high-converting Google Ads campaigns to get instant traffic and more leads.",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    title: "Social Media Marketing",
    description:
      "Grow your brand presence and engage your audience on Facebook, Instagram & more.",
  },
];
function Services() {
  return (
    <div className="w-[85%] mx-auto py-20">
      <Title title={"Services"} className="" />
      <SubTitle
        firstText="Services"
        secondText="I provide"
        firstItalic={true}
        secondItalic={false}
        className=""
      />
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceBox
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;

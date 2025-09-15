import SubTitle from "../SubTitle";
import Title from "../Title";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  const plans = [
  { 
    type: "Hourly", 
    price: "$80", 
    tag: "Hour", 
    lists: [
      { listItem: "SEO Audit & Recommendations", active: true },
      { listItem: "Keyword Research & Content Plan", active: true },
      { listItem: "On-page SEO Optimization", active: true },
      { listItem: "Google Ads Setup & Management", active: true },
      { listItem: "Technical SEO Fixes", active: false },
      { listItem: "Google Ads Optimization & Reporting", active: false },
      { listItem: "Social Media Content Creation & Posting", active: false },
      { listItem: "Social Media Ads & Campaign Management", active: false },
    ]
  },
  { 
    type: "Monthly", 
    price: "$9600", 
    tag: "Month", 
    highlight: true,
    lists: [
      { listItem: "SEO Audit & Recommendations", active: true },
      { listItem: "Keyword Research & Content Plan", active: true },
      { listItem: "On-page SEO Optimization", active: true },
      { listItem: "Technical SEO Fixes", active: true },
      { listItem: "Google Ads Setup & Management", active: true },
      { listItem: "Google Ads Optimization & Reporting", active: true },
      { listItem: "Social Media Content Creation & Posting", active: false },
      { listItem: "Social Media Ads & Campaign Management", active: false },
    ]
  },
  { 
    type: "Quarterly", 
    price: "$28,800", 
    tag: "Quarter", 
    lists: [
      { listItem: "SEO Audit & Recommendations", active: true },
      { listItem: "Keyword Research & Content Plan", active: true },
      { listItem: "On-page SEO Optimization", active: true },
      { listItem: "Technical SEO Fixes", active: true },
      { listItem: "Google Ads Setup & Management", active: true },
      { listItem: "Google Ads Optimization & Reporting", active: true },
      { listItem: "Social Media Content Creation & Posting", active: true },
      { listItem: "Social Media Ads & Campaign Management", active: true },
    ]
  },
];


  return (
    <section className="bg-[#2c4e35] py-16 text-white">
      <div className="w-[90%] lg:w-[85%] mx-auto">
        <Title title={"Pricing Table"} className="text-white"/>
        <SubTitle
              firstText="My"
              secondText="Pricing Model"
              firstItalic={false}
              secondItalic={true}
              className="text-white text-3xl lg:text-4xl"
            />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

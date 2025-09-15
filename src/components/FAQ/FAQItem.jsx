'use client'
import { useState } from "react";

export default function FAQItem() {
  const faqs = [
    {
      q: "What industries have you worked in as a digital marketing expert?",
      a: "I have experience working across diverse industries including e-commerce, SaaS, healthcare, real estate, and education, helping businesses grow their online presence and achieve measurable results."
    },
    {
      q: "Can I download your resume/CV for more information?",
      a: "Of course! You can download my resume/CV directly from my website. It includes details about my skills, certifications, and past projects in SEO, Google Ads, and digital marketing strategy."
    },
    {
      q: "Are you available for freelance digital marketing projects?",
      a: "Yes, I am available for freelance projects as well as long-term collaborations. Whether you need SEO optimization, Google Ads campaigns, or full digital marketing strategies, I’d be happy to help."
    },
    {
      q: "What tools do you use for your digital marketing work?",
      a: "I use industry-standard tools such as Google Analytics, Google Ads, Google Search Console, Ahrefs, SEMrush, Moz, Meta Business Suite, and Canva to ensure data-driven and effective marketing campaigns."
    },
    {
      q: "How do I navigate through your portfolio projects?",
      a: "My portfolio is organized by category—SEO case studies, Google Ads campaigns, and full digital marketing strategies. Simply click on a category to explore detailed project results and insights."
    },
    {
      q: "Do you guarantee results with SEO and Google Ads?",
      a: "While no marketer can ethically guarantee specific rankings or conversions, I focus on proven strategies, continuous optimization, and transparent reporting to maximize ROI and deliver measurable improvements."
    },
    {
      q: "Can you manage both SEO and paid ads for my business?",
      a: "Yes, I specialize in a balanced approach—using SEO for long-term organic growth and Google Ads for immediate traffic and conversions, ensuring a sustainable digital marketing strategy."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg cursor-pointer transition-all ${
            openIndex === index ? "bg-yellow-500 text-black" : "bg-[#3d5b44] text-white"
          }`}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl">{faq.q}</p>
            <span className="text-3xl">{openIndex === index ? "−" : "+"}</span>
          </div>
          {openIndex === index && (
            <p className="mt-3 text-sm">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

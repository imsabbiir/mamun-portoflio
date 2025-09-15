import About from "@/components/about/About";
import BackToTop from "@/components/BackToTop";
import ContactSection from "@/components/contact/ContactSection";
import FAQ from "@/components/FAQ/FAQ";
import FooterSection from "@/components/footer/FotterSection";
import Home from "@/components/home/Home";
import Price from "@/components/pricing/PricingSection";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";

function page() {
  return (
    <div>
      <div id="home"><Home /></div>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="works"><Projects /></section>
      <section id="pricing"><Price /></section>
      <section id="testimonial"><Testimonial /></section>
      <section id="contact"><ContactSection /></section>
      <section id=""><FAQ /></section>
      <section id=""><FooterSection /></section>
      <BackToTop />
    </div>
  );
}

export default page;

"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Title from "../Title";
import SubTitle from "../SubTitle";
import { FaStar } from "react-icons/fa";
import me from "@/media/about.png";
import Image from "next/image";
function Testimonial() {
  const testimonials = [
  {
    name: "Tanvir Hasan",
    role: "Founder, Dhaka E-Commerce Hub",
    rating: 5,
    feedback:
      "Your SEO strategy helped our store appear on the first page of Google. Sales have increased steadily, and customer engagement is stronger than ever.",
    image: "/avatar1.png", // replace with your image path
  },
  {
    name: "Nusrat Jahan",
    role: "Marketing Manager, Chittagong Apparel Ltd.",
    rating: 5,
    feedback:
      "We were struggling with Google Ads before, but your campaigns brought us qualified leads at a much lower cost. Excellent results!",
    image: "/avatar2.png",
  },
  {
    name: "Md. Rakibul Islam",
    role: "CEO, Sylhet Tech Solutions",
    rating: 5,
    feedback:
      "From SEO to paid ads, your digital marketing expertise gave our startup both immediate visibility and long-term growth opportunities.",
    image: "/avatar3.png",
  },
  {
    name: "Farhana Akter",
    role: "Co-Founder, Rajshahi Organic Foods",
    rating: 5,
    feedback:
      "Your content and marketing strategies matched our brand perfectly. We’ve built stronger trust with our customers and grown our online presence.",
    image: "/avatar4.png",
  },
];

  return (
    <div className="w-full bg-[#f4f4f4] pb-10">
      <div className="w-[90%] md:w-[85%] mx-auto py-20 text-center relative">
        <Title title={"Client Testimonials"} className="mx-auto" />
        <SubTitle
          firstText="The Impact of"
          secondText="My Work"
          firstItalic={true}
          secondItalic={false}
          className="text-3xl"
        />
        <Carousel className="w-full mt-10">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white p-6 rounded-2xl shadow-sm h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3 text-yellow-500">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <FaStar key={idx} className="w-4 h-4 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-700 mb-6 flex-grow text-justify">
                    {t.feedback}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 mt-auto">
                    <Image
                      src={me}
                      alt={t.name}
                      width={500}
                      height={500}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <CarouselPrevious className="bg-[#ffa900] hover:bg-[#2c4e35] text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" />
            <CarouselNext className="bg-[#ffa900] cursor-pointer hover:bg-[#2c4e35] text-white rounded-full w-10 h-10 flex items-center justify-center" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;

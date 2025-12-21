"use client";
import Image from "next/image";
import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/MarqueeSection"
import AboutSection from "@/components/landing/AboutSection";
import ServiceSection from "@/components/landing/ServiceSection";
import WordMarqueeSection from "@/components/landing/WordMarqueeSection";
import BeforeAfter from "@/components/landing/BeforeAfterSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FaqSection from "@/components/landing/FaqSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
  return (
    <>
      <div className="max-w-360 mx-auto px-3 md:px-5 lg:px-5 xl:px-25 pt-22">
        <HeroSection />
        <Marquee />
      </div>
      <AboutSection />
      <ServiceSection />
      <WordMarqueeSection />
      <BeforeAfter />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection/>
    </>
  );
}

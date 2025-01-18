import BlogSection from "@/components/homePage/BlogSection";
import DestinationsSection from "@/components/homePage/destinationsSection";
import HeroSection from "@/components/homePage/HeroSection";
import IntroductionSection from "@/components/homePage/introductionSection";
import MainSafaris from "@/components/homePage/MainSafaris";
import PartnersSection from "@/components/homePage/partnersSection";
import TestimonialSection from "@/components/homePage/testimonialSection";
import ToursSection from "@/components/homePage/ToursSection";
import WhyChooseUs from "@/components/homePage/whyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <MainSafaris />
      <ToursSection />
      <WhyChooseUs />
      <DestinationsSection />
      <TestimonialSection />
      <PartnersSection />
      <BlogSection />
    </>
  );
};

export default HomePage;

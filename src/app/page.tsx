import DestinationsSection from "@/components/homePage/destinationsSection";
import HeroSection from "@/components/homePage/HeroSection";
import IntroductionSection from "@/components/homePage/introductionSection";
import MainSafaris from "@/components/homePage/MainSafaris";
import WhyChooseUs from "@/components/homePage/whyChooseUs";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <MainSafaris />
      <DestinationsSection />
      <WhyChooseUs />
    </>
  );
};

export default HomePage;

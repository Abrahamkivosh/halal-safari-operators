import PagesHeroSection from "@/components/common/PagesHeroSection";
import AboutUs from "@/components/who-we-are/AboutUs";
import React from "react";

const aboutUsPage = () => {
  return (
    <>
      <PagesHeroSection path="About Us" title="About Us" />
      <AboutUs />
    </>
  );
};

export default aboutUsPage;

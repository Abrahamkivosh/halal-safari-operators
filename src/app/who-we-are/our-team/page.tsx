import PagesHeroSection from "@/components/common/PagesHeroSection";
import OurTeam from "@/components/who-we-are/our-team/Team";
import React from "react";

const page = () => {
  return (
    <>
      <PagesHeroSection
        path="Our Team"
        title="Our Team"
        imgUrl="/images/packages/Amboseli-Safari.jpeg"
      />
      <OurTeam />
    </>
  );
};

export default page;

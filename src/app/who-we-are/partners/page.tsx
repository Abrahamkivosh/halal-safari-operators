import PagesHeroSection from "@/components/common/PagesHeroSection";
import Partiners from "@/components/who-we-are/partiners/Partiners";
import React from "react";

const page = () => {
  return (
    <>
      <PagesHeroSection
        path="partiners"
        title="Partiners"
        imgUrl="/images/hands.png"
      />
      <Partiners />
    </>
  );
};

export default page;

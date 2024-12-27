import React from "react";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import PageComponent from "@/components/destinations/PageComponent";

const page = () => {
  return (
    <>
      <PagesHeroSection
        title="Tour Our Destinations"
        path="destinations"
        imgUrl="/images/dodoma.jpg"
      />
      <PageComponent />
    </>
  );
};

export default page;

import PagesHeroSection from "@/components/common/PagesHeroSection";
import GetAQuoteComponent from "@/components/getAQuote";
import React from "react";

const page = () => {
  return (
    <>
      <PagesHeroSection
        title="Get A Quote"
        path="get-a-quote"
        imgUrl="/images/get-a-quote.png"
      />
      <GetAQuoteComponent />
    </>
  );
};

export default page;

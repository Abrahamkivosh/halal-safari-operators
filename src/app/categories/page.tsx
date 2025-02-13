"use client";
import React from "react";
import ErrorComponent from "@/components/common/ErrorComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { marginX } from "@/utilities/constants";
import { getImageURL } from "@/utilities/functions";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import { useDefaultSectionData } from "@/utilities/hooks/useDefaultSectionData";
import { Stack } from "@chakra-ui/react";
import SectionHeader from "@/components/categories/SectionHeader";
import CategoryGrid from "@/components/categories/CategoryGrid";

const Page: React.FC = () => {
  const { sectionArray: categories, error } =
    useDefaultSectionArray("safariCategory");
  const {
    sectionData,
    error: sectionDataError,
    loading,
  } = useDefaultSectionData("categoriesIndex");

  if (loading || !sectionData) return <LoadingComponent />;
  if (sectionDataError) return <ErrorComponent error={sectionDataError} />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      <PagesHeroSection
        title={sectionData.title}
        path="safaris"
        imgUrl={sectionData.image ? getImageURL(sectionData.image.path) : ""}
      />

      <Stack marginX={marginX} my="2rem">
        {/* Section Header */}
        <SectionHeader
          title={sectionData.subTitle ?? sectionData.title}
          description={sectionData.description}
        />

        {/* Category Grid */}
        <CategoryGrid categories={categories} />
      </Stack>
    </>
  );
};

export default Page;

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
import BlogGrid from "@/components/blogs/BlogGrid";

const Page: React.FC = () => {
  const { sectionArray, error } = useDefaultSectionArray("blogs");
  const {
    sectionData,
    error: sectionDataError,
    loading,
  } = useDefaultSectionData("blogsIndex");

  if (loading || !sectionData) return <LoadingComponent />;
  if (sectionDataError) return <ErrorComponent error={sectionDataError} />;
  if (error) return <ErrorComponent error={error} />;

  return (
    <>
      <PagesHeroSection
        title={sectionData.title}
        path="blogs"
        imgUrl={sectionData.image ? getImageURL(sectionData.image.path) : ""}
      />

      <Stack marginX={marginX} my="2rem">
        {/* Section Header */}
        <SectionHeader
          title={sectionData.subTitle ?? sectionData.title}
          description={sectionData.description}
        />

        {/* Category Grid */}
        <Stack mx={marginX} my={"2rem"}>
          <BlogGrid blogs={sectionArray} />
        </Stack>
      </Stack>
    </>
  );
};

export default Page;

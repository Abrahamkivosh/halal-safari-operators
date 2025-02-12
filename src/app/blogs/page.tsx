// pages/blogs.tsx
"use client";
import ErrorComponent from "@/components/common/ErrorComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import { marginX } from "@/utilities/constants";
import React from "react";
import BlogGrid from "@/components/blogs/BlogGrid";
import { Stack } from "@chakra-ui/react";

const page: React.FC = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("blogs");

  // Check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <React.Fragment>
      <PagesHeroSection title="Blogs" path="blogs" />
      <Stack mx={marginX} my={"2rem"}>
        <BlogGrid blogs={sectionArray} />
      </Stack>
    </React.Fragment>
  );
};

export default page;

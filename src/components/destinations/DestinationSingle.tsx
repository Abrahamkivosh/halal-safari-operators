"use client";
import React, { memo } from "react";
import PagesHeroSection from "../common/PagesHeroSection";
import DestinationDetails from "./DestinationDetails";
import { useDestinationSectionData } from "@/utilities/hooks/useDestinationSectionData";
import ErrorComponent from "../common/ErrorComponent";
import { notFound } from "next/navigation";
import LoadingComponent from "../common/LoadingComponent";

interface DestinationSingleProps {
  id: string;
}

const DestinationSingle: React.FC<DestinationSingleProps> = ({ id }) => {
  const endPoint = `destinations/${id}`;
  const { sectionData, error, loading } = useDestinationSectionData(endPoint);

  // Handle loading state
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!sectionData) {
    return notFound(); // Ensures no further execution.
  }

  return (
    <>
      <PagesHeroSection
        title={sectionData.title}
        path="destinations"

        // imgUrl={sectionData.image.path} // Fallback image
      />
      <DestinationDetails {...sectionData} />
    </>
  );
};

export default memo(DestinationSingle);

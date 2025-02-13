// src/components/homePage/MainSafaris.tsx
"use client";

import { Box, Heading } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import ErrorComponent from "../common/ErrorComponent";

import CategoryGrid from "../categories/CategoryGrid";

const MainSafaris = () => {
  const { sectionArray: categories, error } =
    useDefaultSectionArray("safariCategory");

  if (error) {
    return <ErrorComponent error={error} />;
  }

  // Dynamic styles for light/dark mode
  const bgColor = useColorModeValue("brand.secondary", "brand.900");
  const headingColor = useColorModeValue("brand.primary", "brand.secondary");

  return (
    <Box
      py={{ base: "1.5rem", sm: "3rem" }}
      px={{ base: "1rem", sm: "3rem" }}
      bgColor={bgColor}
    >
      {/* Section Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "3xl", sm: "5xl" }}
        color={headingColor}
        textAlign="center"
        mb={{ base: "1.5rem", sm: "3rem" }}
        lineHeight="1.2"
        data-aos="fade-right"
      >
        Explore Our Safari Destinations
      </Heading>

      {/* Destinations Grid */}
      <CategoryGrid categories={categories} />
    </Box>
  );
};

export default MainSafaris;

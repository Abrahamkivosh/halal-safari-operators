// src/components/homePage/ToursSection.tsx
"use client";

import React from "react";
import { Box, Heading, SimpleGrid, Button, For } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { safariPackages } from "@/utilities/constants";
import PackageCard from "../common/PackageCard";
import LoadingComponent from "../common/LoadingComponent";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import ErrorComponent from "../common/ErrorComponent";

const ToursSection = () => {
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const textColor = useColorModeValue("brand.900", "brand.50");
  const bgColor = useColorModeValue("brand.50", "brand.900");
  const { sectionArray: categories, error } =
    useDefaultSectionArray("safariCategory");

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Box
      py={{ base: "1rem", md: "1rem" }}
      px={{ base: "1rem", md: "4rem" }}
      bg={bgColor}
    >
      {/* Section Title */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={textColor}
        mb="2rem"
        data-aos="fade-up"
      >
        Our Best Packages
      </Heading>

      {/* tour Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={6}
        maxW="container.xl"
        mx="auto"
      >
        <For each={safariPackages} fallback={<LoadingComponent />}>
          {(packageData, index) => <PackageCard key={index} {...packageData} />}
        </For>
      </SimpleGrid>

      {/* View More Button */}
      <Box textAlign="center" mt="2rem">
        <Link href="/safaris" passHref>
          <Button
            size="lg"
            bg={buttonBg}
            color="white"
            _hover={{
              bg: buttonHoverBg,
            }}
            variant={"plain"}
            borderRadius="md"
            height={"auto"}
            padding={3}
            data-aos="fade-up"
          >
            View More tours
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ToursSection;

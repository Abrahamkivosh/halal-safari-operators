// src/components/homePage/ToursSection.tsx
"use client";

import React from "react";
import { Box, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { PackageCard } from "../common/package-card";
import { safariPackages } from "@/utilities/constants";

const ToursSection = () => {
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const textColor = useColorModeValue("brand.600", "gray.200");
  const dataAOSDisplay = [
    "fade-up",
    "fade-up-right",
    "fade-up-left",
    "fade-right",
    "fade-left",
    "fade-down",
    "fade-down-right",
    "fade-down-left",
  ];

  return (
    <Box
      py={{ base: "1rem", md: "1rem" }}
      px={{ base: "1rem", md: "4rem" }}
      bg={useColorModeValue("brand.50", "brand.800")}
    >
      {/* Section Title */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={useColorModeValue("brand.800", "white")}
        mb="2rem"
        data-aos="fade-up"
      >
        Our Best Packages
      </Heading>

      {/* tour Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap="2rem"
        maxW="container.xl"
        mx="auto"
      >
        {safariPackages.map((packageData) => (
          <PackageCard
            key={packageData.id}
            {...packageData}
            data-aos={
              dataAOSDisplay[Math.floor(Math.random() * dataAOSDisplay.length)]
            }
          />
        ))}
      </SimpleGrid>

      {/* View More Button */}
      <Box textAlign="center" mt="2rem">
        <Link href="/tour" passHref>
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

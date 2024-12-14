// src/components/homePage/ToursSection.tsx
"use client";

import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { tours } from "@/utilities/constants";
import TourCard from "./TourCard";

const ToursSection = () => {
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
      >
        Our Best Packages
      </Heading>

      {/* tour Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap="2rem"
        maxW="container.xl"
        mx="auto"
      >
        {/* Help me develop beaufiful tourCard . With great Ui UX, Styling allowed,.  */}
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </SimpleGrid>

      {/* View More Button */}
      <Box textAlign="center" mt="2rem">
        <Link href="/tour" passHref>
          <Button
            size="lg"
            bg={useColorModeValue("brand.600", "brand.300")}
            color="white"
            _hover={{
              bg: useColorModeValue("brand.700", "brand.400"),
            }}
          >
            View More tours
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ToursSection;

"use client";
import ErrorComponent from "@/components/common/ErrorComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { useColorModeValue } from "@/components/ui/color-mode";
import { marginX } from "@/utilities/constants";
import { getImageURL } from "@/utilities/functions";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import {
  Box,
  For,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  // Dynamic styles for light/dark mode
  const bgColor = useColorModeValue("brand.secondary", "brand.900");
  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.2)"
  );
  const overlayTextColor = useColorModeValue("white", "black");
  const boxShadow = useColorModeValue("lg", "dark-lg");
  const { sectionArray: categories, error } =
    useDefaultSectionArray("safariCategory");

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <PagesHeroSection title="All Safaris" path="safaris" />

      <Stack marginX={marginX} my="2rem">
        {/* Section Heading */}
        <Box textAlign="center" py={{ base: "1rem", sm: "3rem" }}>
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="gray.700"
            mb={2}
          >
            Our Safaris
          </Heading>
          <Text color="gray.500" fontSize={{ base: "md", md: "lg" }}>
            We have a variety of safaris to choose from
          </Text>
        </Box>

        {/* categories Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="2rem">
          <For each={categories} fallback={<LoadingComponent />}>
            {(category, index) => (
              <Link key={index} href={"/categories/" + category._id} passHref>
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="lg"
                  boxShadow={boxShadow}
                  transition="transform 0.3s ease, box-shadow 0.3s ease"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow: "xl",
                  }}
                  aria-label={`Learn more about ${category.title}`}
                  maxH={{ base: "20rem", sm: "30rem" }}
                >
                  {/* Background Image */}
                  <Image
                    src={
                      category.image
                        ? getImageURL(category.image.path)
                        : "/halal-safari-operator-logo-light.svg"
                    }
                    alt={category.title}
                    objectFit="cover"
                    objectPosition={{ base: "center", md: "top" }}
                    width="100%"
                    height="100%"
                    borderRadius="lg"
                    style={{ aspectRatio: "4/3" }}
                  />

                  {/* Overlay */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="0%"
                    width="100%"
                    // height="100%"
                    bg={overlayBg}
                    opacity={{ base: "1", md: "1" }} // Always visible on mobile
                    _hover={{ opacity: "1" }} // Hover effect for larger screens
                    transition="opacity 0.3s ease-in-out"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    color={overlayTextColor}
                    textAlign="center"
                    p="1rem"
                    borderRadius={{ base: "lg", md: "lg" }}
                    alignContent={{ base: "center", md: "center" }}
                  >
                    <Heading
                      fontWeight="bold"
                      mb="0.5rem"
                      fontSize={{ base: "xl", sm: "3xl" }}
                    >
                      {category.title}
                    </Heading>
                    <Text fontSize={{ base: "md", sm: "lg" }}>
                      {category.subTitle}
                    </Text>
                  </Box>
                </Box>
              </Link>
            )}
          </For>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default page;

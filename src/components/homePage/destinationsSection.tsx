"use client";

import { Box, SimpleGrid, Heading, Text, For } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../ui/color-mode";
import Link from "next/link";
import { useDestinations } from "@/utilities/hooks/useDestinations";
import ErrorComponent from "../common/ErrorComponent";
import LoadingComponent from "../common/LoadingComponent";
import { getImageURL } from "@/utilities/functions";

const DestinationsSection = () => {
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.5)"
  );
  const textColor = useColorModeValue("white", "brand.900");
  const bgColor = useColorModeValue("brand.secondary", "brand.900");

  const { sectionArray, error, loading } = useDestinations("destinations");

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Box
      py={{ base: "1.5rem", sm: "2rem" }}
      px={{ base: "1rem", sm: "3rem" }}
      bgColor={bgColor}
    >
      {/* Section Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "3xl", sm: "5xl" }}
        color={useColorModeValue("brand.primary", "brand.secondary")}
        textAlign="center"
        mb={{ base: "1.5rem", sm: "3rem" }}
        lineHeight="1.2"
        data-aos="fade-left"
      >
        Popular Destinations
      </Heading>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="2rem">
        <For each={sectionArray} fallback={<LoadingComponent />}>
          {(destination) => (
            <Link
              key={destination._id}
              href={`/destinations/${destination._id}`}
              passHref
            >
              <Box
                key={destination._id}
                position="relative"
                overflow="hidden"
                borderRadius="lg"
                boxShadow="lg"
                bgImage={`url(${getImageURL(destination.image.path)})`}
                bgSize="cover"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
                aspectRatio={4 / 3} // Maintains image ratio
              >
                {/* Overlay */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  bg={overlayBg}
                  opacity={{ base: "1", sm: "1" }}
                  _hover={{
                    opacity: "0",
                    cursor: "pointer",
                  }}
                  transition="opacity 0.3s ease-in-out"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  p="1rem"
                  color={textColor}
                >
                  <Heading
                    fontSize={{ base: "lg", sm: "xl" }}
                    fontWeight="bold"
                    mb="0.5rem"
                  >
                    {destination.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", sm: "md" }}>
                    {destination.subTitle}
                  </Text>
                </Box>
              </Box>
            </Link>
          )}
        </For>
      </SimpleGrid>
    </Box>
  );
};

export default DestinationsSection;

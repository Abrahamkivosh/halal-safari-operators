"use client";

import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../ui/color-mode";
import Link from "next/link";

const DestinationsSection = () => {
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.5)"
  );
  const textColor = useColorModeValue("white", "brand.900");
  const bgColor = useColorModeValue("brand.secondary", "brand.900");

  const destinations = [
    {
      id: 1,
      image: "/images/buffalo.jpg",
      title: "WATAMU MARINE PARK",
      subTitle: "Explore the underwater world of Watamu Marine Park",
    },
    {
      id: 2,
      image: "/images/elephant.jpg",
      title: "MAASAI MARA",
      subTitle: "Experience the great wildebeest migration",
    },
    {
      id: 3,
      image: "/images/lion.jpg",
      title: "SERENGETI",
      subTitle: "Discover the endless plains of Serengeti",
    },
    {
      id: 4,
      image: "/images/nairobi.jpg",
      title: "AMBOSELI",
      subTitle: "Get up close with the elephants of Amboseli",
    },
  ];
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

      {/* Destinations Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="2rem">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            href={`/destinations/${destination.id}`}
            passHref
          >
            <Box
              key={destination.id}
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="lg"
              bgImage={`url(${destination.image})`}
              bgSize="cover"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "xl",
              }}
              aspectRatio={4 / 3} // Maintains image ratio
              data-aos={
                dataAOSDisplay[
                  Math.floor(Math.random() * dataAOSDisplay.length)
                ]
              }
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
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DestinationsSection;

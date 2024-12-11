// src/components/homePage/destinationsSection.tsx
"use client";

import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const DestinationsSection = () => {
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

  return (
    <Box mt={{ base: "1.5rem", sm: "3rem" }} px={{ base: "1rem", sm: "3rem" }}>
      {/* Section Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "3xl", sm: "5xl" }}
        color="brand.primary"
        textAlign="center"
        mb={{ base: "1.5rem", sm: "3rem" }}
        lineHeight="1.2"
      >
        Popular Destinations
      </Heading>

      {/* Destinations Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap="2rem">
        {destinations.map((destination) => (
          <Box
            key={destination.id}
            position="relative"
            overflow="hidden"
            borderRadius="lg"
            boxShadow="lg"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
          >
            {/* Background Image */}
            <Image
              src={destination.image}
              alt={destination.title}
              objectFit="cover"
              width="100%"
              height="100%"
              borderRadius="lg"
              style={{ aspectRatio: "4/3" }}
            />

            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.4)"
              opacity="0"
              _hover={{ opacity: "1" }}
              transition="opacity 0.3s ease-in-out"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color="white"
              textAlign="center"
              p="1rem"
            >
              <Heading fontSize="xl" fontWeight="bold" mb="0.5rem">
                {destination.title}
              </Heading>
              <Text fontSize="md">{destination.subTitle}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DestinationsSection;

// src/components/homePage/MainSafaris.tsx
"use client";

import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const MainSafaris = () => {
  const destinations = [
    {
      id: 1,
      image: "/images/nairobi.jpg",
      title: " Explore Safaris In Kenya",
      subTitle: "Discover the best of Kenya's wildlife",
      link: "/safaris/kenya",
    },
    {
      id: 2,
      image: "/images/tanzania.jpg",
      title: " Explore Safaris In Tanzania",
      subTitle: "Experience the beauty of Tanzania",
      link: "/safaris/tanzania",
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
        Our Safaris
      </Heading>

      {/* Destinations Grid */}
      <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap="2rem">
        {destinations.map((destination) => (
          <Link key={destination.id} href={destination.link} passHref>
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
                <Heading
                  fontWeight="bold"
                  mb="0.5rem"
                  fontSize={{ base: "xl", sm: "3xl" }}
                >
                  {destination.title}
                </Heading>
                <Text fontSize={{ base: "md", sm: "lg" }}>
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

export default MainSafaris;

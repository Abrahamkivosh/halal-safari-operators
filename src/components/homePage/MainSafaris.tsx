// src/components/homePage/MainSafaris.tsx
"use client";

import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";

const MainSafaris = () => {
  const destinations = [
    {
      id: 1,
      image: "/images/nairobi.jpg",
      title: "Explore Safaris In Kenya",
      subTitle: "Discover the best of Kenya's wildlife",
      link: "/safaris/kenya",
    },
    {
      id: 2,
      image: "/images/tanzania.jpg",
      title: "Explore Safaris In Tanzania",
      subTitle: "Experience the beauty of Tanzania",
      link: "/safaris/tanzania",
    },
  ];

  // Dynamic styles for light/dark mode
  const bgColor = useColorModeValue("brand.secondary", "brand.900");
  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.2)"
  );
  const overlayTextColor = useColorModeValue("white", "black");
  const boxShadow = useColorModeValue("lg", "dark-lg");
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
        Our Safaris
      </Heading>

      {/* Destinations Grid */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="2rem">
        {destinations.map((destination) => (
          <Link key={destination.id} href={destination.link} passHref>
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
              aria-label={`Learn more about ${destination.title}`}
              data-aos={
                dataAOSDisplay[
                  Math.floor(Math.random() * dataAOSDisplay.length)
                ]
              }
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

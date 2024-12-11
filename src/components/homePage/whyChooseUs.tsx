"use client";
import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaGlobeAfrica,
  FaShieldAlt,
  FaDollarSign,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

const WhyChooseUs = () => {
  // Updated whyUsData array with corresponding icons
  const whyUsData = [
    {
      title: "Top Notch Authentic African Experience Tour",
      description:
        "With the greatest travel agency, you may easily see the world and turn your ideal trip into a smooth, life-changing experience.",
      icon: FaGlobeAfrica, // Icon for African experience
    },
    {
      title: "Trust & Safety",
      description:
        "We guarantee that every trip is safe, dependable, and planned with your piece of mind in mind since we are dedicated to trust and safety.",
      icon: FaShieldAlt, // Icon for safety and trust
    },
    {
      title: "Best Price Guarantee",
      description:
        "We provide the best prices on the market, and we are confident that we will match any price for a similar trip.",
      icon: FaDollarSign, // Icon for pricing and value
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available 24 hours a day, 7 days a week to provide you with the best possible service.",
      icon: FaHeadset, // Icon for customer support
    },
    {
      title: "Fast Booking & Quick Response",
      description:
        "We provide quick responses to all of your inquiries and booking requests. We are dedicated to providing you with the best possible service.",
      icon: FaClock, // Icon for speed and efficiency
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
      mt={{ base: "1.5rem", sm: "3rem" }}
      px={{ base: "1rem", sm: "3rem" }}
      bgImage="url('/images/woman.jpg')"
      py={{ base: "2rem", sm: "2rem" }}
      bgSize="cover"
      bgBlendMode="overlay"
      bgPos="center"
      bgRepeat="no-repeat"
      backgroundAttachment="fixed"
      bgColor={"rgba(0,0,0,0.5)"}
    >
      <Stack
        display="flex"
        flexDir="column"
        align="center"
        textAlign="center"
        color="white"
      >
        <Text
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          fontWeight="bold"
          data-aos="fade-up"
          color="brand.primary"
          mb={{ base: "1.5rem", sm: "1.5rem" }}
        >
          Why Choose Us ?
        </Text>
        <Text
          textAlign="center"
          maxW="80%"
          mx="auto"
          fontSize={{ base: "xl", sm: "2xl" }}
        >
          We will provide a genuine African experience, regardless of whether
          this is your first safari or you are a seasoned traveler. Our
          experience guarantees that you get the most out of your trip, whether
          you choose to go on safaris, take part in cultural city excursions,
          climb Kilimanjaro, or relax in a peaceful resort. Find important
          planning information, reserve a full trip with us, or get in touch
          with us for a customised vacation. Operating in 16 African nations,
          with its headquarters in Kenya
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        gap="2rem"
        my={{ base: "1rem", sm: "2rem" }}
      >
        {whyUsData.map((item, index) => (
          <Stack
            key={index}
            gap="1rem"
            align="center"
            textAlign="center"
            boxShadow="lg"
            p="2rem"
            borderRadius="lg"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            bg="gray.50" // Card background
            data-aos-delay={index * 100}
            data-aos={dataAOSDisplay[index]}
          >
            <Icon w={10} h={10} color="brand.primary">
              {<item.icon />}
            </Icon>
            <Text fontSize="xl" fontWeight="bold" color="brand.secondary">
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {item.description}
            </Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhyChooseUs;

"use client";
import { marginX } from "@/utilities/constants";
import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaGlobeAfrica,
  FaShieldAlt,
  FaDollarSign,
  FaHeadset,
  FaClock,
  FaMapSigns,
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
    {
      title: "Customized Tours & Itineraries",
      description:
        "We offer personalized tour plans tailored to your unique preferences and interests, ensuring a memorable journey.",
      icon: FaMapSigns, // Icon for custom itineraries
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
      bgImage="url('/images/woman.jpg')"
      py={{ base: "1rem", sm: "1rem" }}
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
          color="white"
          mb={{ base: "1rem", sm: "1rem" }}
        >
          Why Choose Us ?
        </Text>
      </Stack>

      <Marquee autoFill pauseOnHover speed={80} gradient gradientWidth={100}>
        {whyUsData.map((item, index) => (
          <Stack
            key={index}
            align="center"
            textAlign="center"
            boxShadow="lg"
            p={{ base: "1rem", sm: "1rem" }}
            borderRadius="lg"
            _hover={{
              bg: "gray.100",
            }}
            transition="all 0.3s ease"
            bg="gray.50" // Card background
            data-aos-delay={index * 100}
            data-aos={dataAOSDisplay[index]}
            w={{ base: "90%", sm: "90%", md: "90%", lg: "90%" }}
            mx="auto"
          >
            <Icon
              // different color for each icon
              color={
                index === 0
                  ? "yellow.500"
                  : index === 1
                  ? "red.500"
                  : index === 2
                  ? "green.500"
                  : index === 3
                  ? "blue.500"
                  : "purple.500"
              }
              width={20}
              height={20}
              p={0}
            >
              {<item.icon />}
            </Icon>
            <Text fontSize="xl" fontWeight="bold" color="brand.primary" p="0px">
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {item.description}
            </Text>
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default WhyChooseUs;

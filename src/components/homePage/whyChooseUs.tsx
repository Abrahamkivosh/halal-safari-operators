"use client";
import { marginX } from "@/utilities/constants";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import { Box, For, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
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
import ErrorComponent from "../common/ErrorComponent";
import LoadingComponent from "../common/LoadingComponent";

const WhyChooseUs = () => {
  // Updated whyUsData array with corresponding icons
  const whyUsDataIcons = [
    FaGlobeAfrica, // Icon for African experience
    FaShieldAlt, // Icon for safety and trust
    FaDollarSign, // Icon for pricing and value
    FaHeadset, // Icon for customer support
    FaClock, // Icon for speed and efficiency
    FaMapSigns, // Icon for custom itineraries
  ];

  const { sectionArray, error, loading } =
    useDefaultSectionArray("whychooseus");

  // check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

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
        {sectionArray.map((item, index) => (
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
              as={whyUsDataIcons[index]}
            ></Icon>
            <Text fontSize="xl" fontWeight="bold" color="brand.primary" p="0px">
              {item.title}
            </Text>
            <Text
              fontSize="sm"
              color="gray.600"
              dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
            />
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default WhyChooseUs;

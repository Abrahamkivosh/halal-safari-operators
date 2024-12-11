"use client";
import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

const HeroSection = () => {
  const heroData = [
    {
      id: 1,
      image: "/images/elephant.jpg",
      heading: "Welcome to Our Website",
      subText: "Experience the best services tailored just for you.",
    },
    {
      id: 2,
      image: "/images/lion.jpg",
      heading: "Innovate with Us",
      subText: "Step into the future of technology and creativity.",
    },
    {
      id: 3,
      image: "/images/buffalo.jpg",
      heading: "Transform Your Ideas",
      subText: "Let’s turn your vision into reality together.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <Box
      position="relative"
      w="100%"
      h="100vh"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        overflow="hidden"
        zIndex="-1"
      >
        {heroData.map((slide, index) => (
          <Box
            key={slide.id}
            position="absolute"
            w="100%"
            h="100%"
            bgImage={`url(${slide.image})`}
            bgSize="cover"
            opacity={index === currentIndex ? 1 : 0}
            transform={index === currentIndex ? "scale(1)" : "scale(1.1)"}
            transition="opacity 1.5s ease, transform 1.5s ease"
          />
        ))}
      </Box>

      <Flex
        direction="column"
        textAlign="center"
        color="white"
        zIndex="1"
        align="center"
        animation="fadeIn 2s ease-in-out"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        bg="rgba(255, 255, 255, 0.3)"
        backdropFilter="blur(10px)"
        maxW="80%"
        mx="auto"
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          textTransform="uppercase"
          mb={4}
          animation="slideIn 1s ease-in-out"
        >
          {heroData[currentIndex].heading}
        </Heading>
        <Text
          fontSize="xl"
          mb={6}
          animation="fadeIn 1.5s ease-in-out"
          maxW="90%"
        >
          {heroData[currentIndex].subText}
        </Text>
        <Button
          size="lg"
          bg="teal"
          color="white"
          borderRadius="md"
          px={6}
          py={4}
          _hover={{ bg: "darkcyan" }}
          animation="btnAppear 2s ease"
        >
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroSection;

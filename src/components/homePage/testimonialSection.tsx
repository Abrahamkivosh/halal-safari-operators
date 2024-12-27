"use client";
import React, { Fragment } from "react";
import { Box, Text, Stack, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/utilities/constants";

const TestimonialSection = () => {
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
      position="relative"
      py={{ base: "1rem" }}
      px={{ base: "2rem", md: "4rem" }}
      color="white"
      overflow="hidden"
      bgGradient={"to-br"}
      gradientFrom={"brand.100"}
      gradientTo={"brand.300"}
      zIndex={1}
    >
      {/* Background Decorative Circles */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="300px"
        h="300px"
        bgGradient="radial(blue.400, transparent)"
        borderRadius="full"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-150px"
        right="-150px"
        w="400px"
        h="400px"
        bgGradient="radial(purple.500, transparent)"
        borderRadius="full"
        zIndex={0}
      />

      {/* Section Title */}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        textAlign="center"
        mb={{ base: "2rem", md: "2rem" }}
        zIndex={1}
        position="relative"
        data-aos="fade-up"
      >
        what our clients had to say
      </Heading>

      {/* Testimonials */}
      <SimpleGrid
        columns={{ base: 1, md: 4 }}
        gap="2rem"
        mx="auto"
        maxW="container.lg"
        zIndex={1}
        position="relative"
      >
        {testimonials.map((testimonial) => (
          <Box
            bg="white"
            color="gray.800"
            boxShadow="2xl"
            borderRadius="lg"
            padding={{ base: "1rem", md: "1rem" }}
            maxW={{ base: "100%", md: "400px" }}
            width={{ base: "100%", md: "400px" }}
            position="relative"
            borderTop="3px solid"
            borderColor="green.400"
            borderBottomLeftRadius="lg"
            borderBottomRightRadius="lg"
            _hover={{
              transform: "scale(1.05) rotate(-1deg)",
              boxShadow: "3xl",
            }}
            transition="all 0.4s ease-in-out"
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              w: "100%",
              h: "100%",
              bgGradient: "linear(to-br, blue.100, purple.100)",
              zIndex: -1,
              opacity: 0.4,
              borderRadius: "lg",
            }}
            key={testimonial.id}
            zIndex={1}
            data-aos={
              dataAOSDisplay[Math.floor(Math.random() * dataAOSDisplay.length)]
            }
          >
            {/* Quote Icon */}
            <Icon fontSize="3xl" color="purple.500" mb="1rem">
              <FaQuoteLeft />
            </Icon>
            {/* Testimonial Content */}
            <Text fontSize="md" fontStyle="italic" mb="2rem">
              &quot;{testimonial.content}&quot;
            </Text>
            <Stack gap="0.5rem">
              <Text fontWeight="bold" fontSize="lg">
                {testimonial.name}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {testimonial.position}
              </Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestimonialSection;

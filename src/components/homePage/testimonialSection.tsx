"use client";
import React from "react";
import { Box, Text, Stack, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { useColorModeValue } from "../ui/color-mode";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "This was an unforgettable experience! The team went above and beyond to make sure we had the perfect safari adventure. Highly recommended!",
      name: "Jane Doe",
      position: "Travel Enthusiast",
    },
    {
      id: 2,
      content:
        "The level of professionalism and attention to detail was outstanding. The guides were knowledgeable and the destinations were breathtaking.",
      name: "John Smith",
      position: "Photographer",
    },
    {
      id: 3,
      content:
        "I’ve traveled to many places, but this was truly exceptional. From planning to execution, everything was seamless and exceeded my expectations.",
      name: "Emily Rose",
      position: "Adventure Seeker",
    },
    {
      id: 4,
      content:
        "An extraordinary journey! I felt safe, cared for, and inspired every step of the way. Can’t wait to book my next trip with them.",
      name: "Michael Carter",
      position: "Nature Lover",
    },
  ];

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      py={{ base: "4rem", md: "6rem" }}
      px={{ base: "1rem", md: "3rem" }}
    >
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "4xl" }}
        textAlign="center"
        color={useColorModeValue("gray.700", "white")}
        mb={{ base: "2rem", md: "3rem" }}
      >
        What Our Clients Say
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap="2rem"
        mx="auto"
        maxW="container.md"
      >
        {testimonials.map((testimonial) => (
          <Box
            key={testimonial.id}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow="lg"
            borderRadius="lg"
            p="2rem"
            position="relative"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease-in-out"
          >
            <Icon fontSize="3xl" color="brand.primary" mb="1rem">
              <FaQuoteLeft />
            </Icon>
            <Text
              fontSize="md"
              fontStyle="italic"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              &quot;{testimonial.content}&quot;
            </Text>
            <Stack mt="2rem" gap="0.5rem">
              <Text
                fontWeight="bold"
                fontSize="lg"
                color={useColorModeValue("brand.primary", "white")}
              >
                {testimonial.name}
              </Text>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.400")}
              >
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

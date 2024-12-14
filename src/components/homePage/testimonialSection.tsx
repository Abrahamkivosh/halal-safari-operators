"use client";
import React, { Fragment } from "react";
import { Box, Text, Stack, Icon, SimpleGrid, Heading } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

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
      >
        what our clients had to say
      </Heading>

      {/* Testimonials */}
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        gap="2rem"
        mx="auto"
        maxW="container.lg"
        zIndex={1}
        position="relative"
      >
        {testimonials.map((testimonial) => (
          <Fragment key={testimonial.id}>
            <Box
              bg="white"
              color="gray.800"
              boxShadow="2xl"
              borderRadius="lg"
              padding={{ base: "1rem", md: "1rem" }}
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
          </Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TestimonialSection;

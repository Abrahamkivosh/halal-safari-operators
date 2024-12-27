"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { destinations } from "@/utilities/constants";
import Link from "next/link";

const PageComponent = () => {
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const mutedTextColor = useColorModeValue("gray.400", "gray.500");
  return (
    <Box
      as="section"
      mx={{ base: "4%", md: "8%" }}
      py={{ base: "2rem", md: "4rem" }}
    >
      {/* Hero Section */}
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        textAlign="center"
        my="2rem"
        fontWeight="extrabold"
        // bgGradient="linear(to-r, teal.500, green.400, blue.500)"
        lineHeight="1.2"
        _hover={{
          transition: "0.3s",
        }}
      >
        Travel and Explore Destinations in Africa
      </Heading>

      <Text
        fontSize={{ base: "md", md: "lg" }}
        textAlign="center"
        mb="2rem"
        color={mutedTextColor}
      >
        Discover the wonders of Africa's rich landscapes, culture, and wildlife.
        From mountains to waterfalls, embark on a journey that will leave you
        inspired.
      </Text>

      {/* Featured Destinations */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="1.5rem">
        {destinations.map((destination, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image
              src={destination.image}
              alt={destination.title}
              height="200px"
              objectFit="cover"
              width={"100%"}
            />
            <Box p="1.5rem">
              <Heading as="h3" fontSize="lg" mb="1rem" color={textColor}>
                {destination.title}
              </Heading>
              <Text fontSize="sm" color={mutedTextColor} mb="1rem">
                {destination.description}
              </Text>
              <Button
                size="sm"
                variant="solid"
                width="full"
                color="white"
                bg={buttonBg}
                _hover={{ bg: buttonHoverBg }}
                p={{ base: "0.5rem 1rem", md: "0.75rem 1.5rem" }}
                fontWeight={600}
              >
                Explore More
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {/* Call to Action */}
      <Flex justify="center" mt="3rem">
        <Link href={"/get-a-quote"} passHref>
          <Button
            size="lg"
            variant="solid"
            px="3rem"
            _hover={{
              bg: buttonHoverBg,
            }}
            bg={buttonBg}
            color="white"
            fontWeight={600}
          >
            Plan Your Adventure Now
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default PageComponent;

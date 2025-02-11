"use client";
import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaTree } from "react-icons/fa"; // Example icons
import Link from "next/link";
import { getImageURL } from "@/utilities/functions";

const DestinationDetails = (destination: DestinationInterface) => {
  return (
    <Box marginX={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }} my={"3rem"}>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignContent={{ base: "center", md: "center" }}
      >
        <Image
          src={getImageURL(destination.image.path)}
          alt={destination.image.altText}
          borderRadius="xl"
          boxShadow="xl"
          height="65vh"
          width={{ base: "100%", md: "80%" }}
          objectFit="cover"
        />
      </Box>

      {/* Destination Details */}
      <Stack mt="2rem" gap="2rem">
        {/* Title & Subtitle */}
        <Heading as="h1" size="lg" textAlign="center" color="teal.600">
          {destination.title}
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.600">
          {destination.subtitle}
        </Text>

        {/* Description Section */}
        <Box
          textAlign="justify"
          color="gray.700"
          fontSize="md"
          lineHeight="1.8"
          dangerouslySetInnerHTML={{ __html: destination.description }}
        />

        {/* Activities Section */}
        <Box mt="2rem">
          <Heading
            as="h2"
            size="md"
            mb="1rem"
            color="teal.700"
            textAlign="center"
          >
            Activities to Explore
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="2rem">
            {destination.activities.map((activity, index) => (
              <Flex
                key={index}
                align="center"
                justify="center"
                direction="column"
                bg="gray.50"
                borderRadius="lg"
                boxShadow="md"
                p="1.5rem"
                textAlign="center"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              >
                <FaTree color="teal.500" />
                <Text fontWeight="semibold" color="gray.800">
                  {activity}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
        {/* call to Action Section */}
        <Box
          bg="teal.600"
          color="white"
          borderRadius="xl"
          p="1.5rem"
          textAlign="center"
          boxShadow="lg"
        >
          <Heading as="h3" size="md">
            Ready to Explore {destination.title}?
          </Heading>
          <Text fontSize="lg" mt="1rem">
            Book your next adventure with us today!
          </Text>
          <Link href="/get-a-quote" passHref>
            <Text
              display="inline-block"
              bg="white"
              color="teal.600"
              px="2rem"
              py="0.5rem"
              mt="1rem"
              borderRadius="lg"
              transition="background-color 0.3s ease"
              _hover={{ bg: "gray.200" }}
            >
              Get A Quote
            </Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default DestinationDetails;

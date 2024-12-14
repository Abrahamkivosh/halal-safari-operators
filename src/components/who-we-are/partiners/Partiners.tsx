// src/components/who-we-are/partiners/Partiners.tsx
"use client";

import { partnersData } from "@/utilities/constants";
import { Box, Heading, Stack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Partiners = () => {
  return (
    <Stack marginX="5%" my="3rem" gap={6} textAlign="center">
      {/* Section Heading */}
      <Box>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color="gray.700"
          mb={2}
        >
          Our Trusted Partners
        </Heading>
        <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
          We collaborate with amazing organizations to bring great value.
        </Text>
      </Box>

      {/* Partners Grid */}
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
        gap={6}
        alignItems="center"
        justifyContent="center"
      >
        {partnersData.map((partner, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="10px"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
            p={3}
            _hover={{
              transform: "translateY(-8px)",
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
            }}
            transition="all 0.3s ease-in-out"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              objectFit="contain"
              width="100%"
              height="auto"
              maxH="80px"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Partiners;

// src/components/who-we-are/partiners/Partiners.tsx
"use client";

import ErrorComponent from "@/components/common/ErrorComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import { useColorModeValue } from "@/components/ui/color-mode";
import { marginX } from "@/utilities/constants";
import { getImageURL } from "@/utilities/functions";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import { Box, Heading, Stack, Text, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Partiners: React.FC = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("partners");

  // check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Stack marginX={marginX} my="2rem">
      {/* Section Heading */}
      <Box textAlign="center" py={{ base: "1rem", sm: "3rem" }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={useColorModeValue("gray.800", "gray.50")}
          mb={2}
        >
          Our Trusted Partners
        </Heading>
        <Text
          color={useColorModeValue("gray.500", "gray.50")}
          fontSize={{ base: "md", md: "lg" }}
        >
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
        {sectionArray.map((partner, index) => (
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
              src={
                partner.image
                  ? getImageURL(partner.image.path)
                  : "/halal-safari-operator-logo-light.svg"
              }
              alt={partner.title}
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

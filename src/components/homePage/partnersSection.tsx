"use client";
// src/components/homePage/partnersSection.tsx
import { Box, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useColorModeValue } from "../ui/color-mode";
import React from "react";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";
import { getImageURL } from "@/utilities/functions";

const PartnersSection: React.FC = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("partners");

  // check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Box py={{ base: "1rem", md: "1rem" }} position={"relative"}>
      {/* Section Title */}
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        color="brand.primary"
        textAlign="center"
        letterSpacing="wide"
      >
        Our Trusted Partners
      </Text>
      <Text
        textAlign="center"
        mb="3rem"
        fontSize={{ base: "md", md: "lg" }}
        color={useColorModeValue("gray.500", "gray.50")}
      >
        We are proud to be associated with the following partners who have made
        our work easier.
      </Text>

      {/* Partner Logos Marquee */}
      <Marquee autoFill pauseOnHover speed={80} gradient gradientWidth={100}>
        {sectionArray.map((partner, i) => (
          <Link key={i} passHref href={partner.link ?? "#"} target="_blank">
            <Stack
              h={200}
              w={200}
              align="center"
              justify="center"
              bg="white"
              borderRadius="full"
              boxShadow="lg"
              transition="all 0.3s ease"
              mr="2rem"
              _hover={{
                boxShadow: "2xl",
                borderColor: "brand.primary",
                borderWidth: "2px",
              }}
              title={partner.title}
              zIndex={1}
              position={"relative"}
            >
              <Image
                src={
                  partner.image
                    ? getImageURL(partner.image.path)
                    : "/halal-safari-operator-logo-light.svg"
                }
                alt={partner.title}
                style={{
                  objectFit: "cover",
                }}
              />
              {/* 
              overlay for the partner logos on hover
               */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="full"
                bg="blackAlpha.200"
                opacity={0}
                transition="all 0.3s ease"
                borderRadius="full"
                _hover={{
                  opacity: 0.9,
                }}
              />
            </Stack>
          </Link>
        ))}
      </Marquee>
    </Box>
  );
};

export default PartnersSection;

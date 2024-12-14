"use client";
// src/components/homePage/partnersSection.tsx
import { partnersData } from "@/utilities/constants";
import { Box, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useColorModeValue } from "../ui/color-mode";

const PartnersSection = () => {
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
        color={useColorModeValue("gray.50", "gray.500")}
      >
        We are proud to be associated with the following partners who have made
        our work easier.
      </Text>

      {/* Partner Logos Marquee */}
      <Marquee autoFill pauseOnHover speed={80} gradient gradientWidth={100}>
        {partnersData.map((partner, i) => (
          <Link key={i} passHref href={partner.link}>
            <Stack
              maxH={300}
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
                transform: "rotate(5deg)",
                boxShadow: "2xl",
                borderColor: "brand.primary",
                borderWidth: "2px",
              }}
              title={partner.name}
              zIndex={1}
              position={"relative"}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={100}
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

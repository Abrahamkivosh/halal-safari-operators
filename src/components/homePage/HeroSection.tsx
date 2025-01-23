// src/components/home/Hero.tsx
"use client";
import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { useDefaultSectionData } from "@/utilities/hooks/useDefaultSectionData";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";

const Hero = () => {
  // Dynamic background overlay colors for light and dark modes
  const overlayColor = useColorModeValue(
    "rgba(0, 0, 0, 0.5)",
    "rgba(0, 0, 0, 0.7)"
  );
  const textColor = useColorModeValue("white", "gray.200");
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");

  const { sectionData, error, loading } = useDefaultSectionData("homeHero");

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Stack
      position="relative"
      height="80vh"
      bgImage="url('images/lion.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={overlayColor} // Dynamic overlay color for dark and light modes
      />

      <Flex
        position="relative"
        height="100%"
        justify="center"
        align="center"
        textAlign="center"
      >
        <Flex
          direction="column"
          align="center"
          gap={6}
          // maxWidth="800px"
          px={4}
          py={6}
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(10px)"
          borderRadius="xl"
          boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
          border="1px solid rgba(255, 255, 255, 0.2)"
          height={{ base: "100%", md: "auto" }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            color={textColor}
            lineHeight="1.2"
            data-state="open"
          >
            {sectionData?.title}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color={textColor}
            dangerouslySetInnerHTML={{ __html: sectionData?.description || "" }}
          />
          <Link href="/contact-us" passHref>
            <Button
              size="lg"
              borderRadius="md"
              height={50}
              width={200}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              bg={buttonBg} // Dynamic button background color for light/dark modes
              color="white"
              _hover={{ bg: buttonHoverBg }} // Dynamic hover background color for light/dark modes
            >
              Contact Us
              <RiArrowRightLine />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Hero;

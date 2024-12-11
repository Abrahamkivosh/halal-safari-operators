"use client";
import React from "react";
import { Stack, Text, Heading, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "@/components/ui/color-mode";

const NotFound = () => {
  // Dynamic styles for light and dark mode
  const bgColor = useColorModeValue("brand.50", "gray.500");
  const headingColor = useColorModeValue("teal.600", "brand.100");
  const textColor = useColorModeValue("brand.600", "gray.200");
  const buttonHoverBg = useColorModeValue("teal.700", "brand.500");

  return (
    <Stack
      direction="column"
      align="center"
      justify="center"
      gap={6}
      bgColor={bgColor}
      p={{ base: 6, md: 10 }}
      minH="100vh"
      textAlign="center"
    >
      {/* Decorative Image */}
      <Image
        src="/404.svg"
        alt="404 Error"
        maxW={{ base: "90%", sm: "400px", md: "500px" }}
        objectFit="contain"
        borderRadius="lg"
        shadow="lg"
      />

      {/* Main Heading */}
      <Heading size="2xl" color={headingColor}>
        Oops! Page Not Found
      </Heading>

      {/* Subtext */}
      <Text fontSize={{ base: "md", md: "lg" }} color={textColor}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>

      {/* Call-to-action Button */}
      <Link href="/" passHref>
        <Button
          size="lg"
          colorScheme="teal"
          shadow="md"
          _hover={{
            bg: buttonHoverBg,
            transform: "scale(1.05)",
          }}
        >
          Go Back to Homepage
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFound;

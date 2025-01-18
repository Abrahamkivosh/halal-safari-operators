"use client";

import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Badge,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useRouter } from "next/navigation";

interface SafariPackageInterface {
  id: string;
  image: string;
  title: string;
  price: string;
  duration: string;
}

const PackageCard: React.FC<SafariPackageInterface> = ({
  id,
  image,
  title,
  price,
  duration,
}) => {
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const shadowColor = useColorModeValue("lg", "dark-lg");
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const textLightColor = useColorModeValue("gray.500", "gray.400");
  const router = useRouter();

  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      boxShadow={shadowColor}
      bg={bgColor}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
      position="relative"
    >
      {/* Duration Badge */}
      <Badge
        position="absolute"
        top="3"
        left="3"
        bg="brand.primary"
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        fontSize="1rem"
        fontWeight="bold"
      >
        {duration}
      </Badge>

      {/* Image */}
      <Image
        src={image}
        alt={title}
        width="100%"
        height="250px"
        objectFit="cover"
      />

      {/* Content */}
      <VStack align="start" gap={4} p={5}>
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          {title}
        </Text>

        <HStack justify="space-between" w="full">
          <Text fontSize="lg" fontWeight="semibold" color={textLightColor}>
            {price}
          </Text>
        </HStack>

        {/* Call-to-Action Button */}
        <Button
          w="full"
          bg={buttonBg}
          color="white"
          _hover={{ bg: buttonHoverBg }}
          borderRadius="full"
          fontSize="md"
          py={6}
          onClick={() => router.push(`/safaris/${id}`)}
        >
          Explore Package
        </Button>
      </VStack>
    </Box>
  );
};

export default PackageCard;

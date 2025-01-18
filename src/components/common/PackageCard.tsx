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
  Flex,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useRouter } from "next/navigation";
import { FaCableCar } from "react-icons/fa6";
import { FaCalendar, FaStar, FaUser } from "react-icons/fa";
import { formatPrice } from "@/utilities/constants";
import Link from "next/link";

interface SafariPackageInterface {
  id: string;
  image: string;
  title: string;
  price: number;
  duration: string;
  people: number;
  rating: number;
}

const PackageCard: React.FC<SafariPackageInterface> = ({
  id,
  image,
  title,
  price,
  duration,
  people,
  rating,
}) => {
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const shadowColor = useColorModeValue("lg", "dark-lg");
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const textLightColor = useColorModeValue("gray.500", "gray.400");
  const router = useRouter();

  return (
    <>
      <Link href={`/safaris/${id}`} passHref>
        <Box
          borderRadius="xl"
          overflow="hidden"
          boxShadow={shadowColor}
          bg={bgColor}
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{ transform: "translateY(-5px)", boxShadow: "2xl" }}
          position="relative"
        >
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
            <Flex
              justifyContent={"space-between"}
              width="100%"
              align="start"
              gap={6}
            >
              <HStack fontSize="md" color={textLightColor}>
                <FaCalendar /> {duration}
              </HStack>
              <Box>
                <HStack fontSize="md" color={textLightColor}>
                  <FaUser /> {people} People
                </HStack>
              </Box>
            </Flex>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={textColor}
              textAlign={"center"}
              width={"100%"}
            >
              {title}
            </Text>

            <HStack justify="space-between" w="full">
              <Box>
                <Badge colorPalette="green" size="md" fontSize="md">
                  <FaStar /> {rating}
                </Badge>
              </Box>
              <Text fontSize="lg" fontWeight="semibold" color={textColor}>
                {formatPrice(price)}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Link>
    </>
  );
};

export default PackageCard;

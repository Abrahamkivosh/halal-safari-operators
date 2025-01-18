"use client";
import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaClock, FaTag } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import { getSubCategoryPackages } from "@/utilities/constants";
import PackageCard from "../common/PackageCard";

//
const SafariDetails = ({
  safari,
  packages,
}: {
  safari: SafariPackageInterface;
  packages: SafariPackageInterface[];
}) => {
  const inclusions = safari.includes.filter(
    (item: { title: string; status: boolean }) => item.status
  );
  const exclusions = safari.includes.filter(
    (item: { title: string; status: boolean }) => !item.status
  );

  const bgColor = useColorModeValue("brand.50", "gray.500");
  const headingColor = useColorModeValue("teal.600", "brand.100");
  const textColor = useColorModeValue("brand.600", "gray.200");
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  return (
    <>
      <Box maxW="6xl" mx="auto" py={10} px={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          {/* Left Section - Images */}
          <Image
            src={safari.image}
            alt={safari.title}
            borderRadius="lg"
            boxShadow="lg"
            objectFit="cover"
            w="100%"
            h="350px"
          />

          {/* Right Section - Info */}
          <VStack align="start" gap={4}>
            <Heading as="h2" size="xl">
              {safari.title}
            </Heading>

            <HStack>
              <Icon as={FaClock} color="blue.500" />
              <Text fontSize="lg">{safari.duration}</Text>
            </HStack>
            <HStack>
              <Icon as={FaTag} color="green.500" />
              <Text fontSize="lg" fontWeight="bold">
                $ {safari.price}
              </Text>
            </HStack>

            <Button
              w="full"
              bg={buttonBg}
              color="white"
              _hover={{ bg: buttonHoverBg }}
              borderRadius="full"
              fontSize="md"
              py={6}
            >
              Book Now
            </Button>
          </VStack>
        </SimpleGrid>

        {/* Description */}
        <Box mt={10}>
          <Heading size="lg">Overview</Heading>
          <Text mt={2} fontSize="md" color="gray.600">
            {safari.description}
          </Text>
        </Box>
        {/* inclusions and exclusions */}
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} mt={10}>
          <Box>
            <Heading size="lg">Inclusions</Heading>
            <VStack align="start" mt={4} gap={2}>
              {inclusions.map((item: { title: string }) => (
                <HStack key={item.title}>
                  <Icon as={FaTag} color="green.500" />
                  <Text fontSize="md">{item.title}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Box>
            <Heading size="lg">Exclusions</Heading>
            <VStack align="start" mt={4} gap={2}>
              {exclusions.map((item: { title: string }) => (
                <HStack key={item.title}>
                  <Icon as={FaTag} color="red.500" />
                  <Text fontSize="md">{item.title}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </SimpleGrid>

        {/* Itinerary */}
        {safari.itinerary && (
          <Box mt={10}>
            <Heading size="lg">Itinerary</Heading>
            {safari.itinerary.map((day: any, index: number) => (
              <Box key={index} mt={4} p={4} borderWidth="1px" borderRadius="md">
                <Heading size="md">
                  Day {index + 1}: {day.title}
                </Heading>
                <Text mt={2}>{day.description}</Text>
              </Box>
            ))}
          </Box>
        )}

        {/* Related Packages */}
        <Box mt={10}>
          <Heading size="lg">Related Packages</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default SafariDetails;

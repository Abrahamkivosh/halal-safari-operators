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
  Icon,
  Stack,
  For,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  FormatNumber,
} from "@chakra-ui/react";
import { FaChevronDown, FaClock, FaStar, FaTag, FaUser } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import PackageCard from "../common/PackageCard";
import BookPackage from "../common/BookPackage";
import { FaMoneyCheckDollar } from "react-icons/fa6";

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
        <VStack align="start" gap={6}>
          <Heading as="h2" fontSize={"2xl"} color={headingColor}>
            {safari.title}
          </Heading>
          <SimpleGrid columns={2} gap={6}>
            <HStack>
              <Icon as={FaClock} color="blue.500" fontSize={"1.5rem"} />
              <Text fontSize="lg">{safari.duration}</Text>
            </HStack>
            <HStack>
              <Icon
                as={FaMoneyCheckDollar}
                color="green.500"
                fontSize={"1.5rem"}
              />
              <Text fontSize="lg" fontWeight="bold">
                <FormatNumber
                  value={safari.price}
                  style="currency"
                  currency="USD"
                />
              </Text>
            </HStack>

            <HStack>
              <Icon as={FaUser} color="purple.500" fontSize={"1.5rem"} />
              <Text fontSize="lg" fontWeight="bold">
                {safari.people} People
              </Text>
            </HStack>
            <HStack>
              <Icon as={FaStar} color="red.500" fontSize={"1.5rem"} />
              <Text fontSize="lg" fontWeight="bold">
                {safari.rating} Rating
              </Text>
            </HStack>
          </SimpleGrid>

          <BookPackage {...safari} />
        </VStack>
      </SimpleGrid>

      {/* Description */}
      <Box mt={10}>
        <Heading size="2xl" fontWeight={"semibold"}>
          Overview
        </Heading>
        <Text mt={2} fontSize="md" color="gray.600">
          {safari.description}
        </Text>
      </Box>
      {/* inclusions and exclusions */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} mt={10}>
        <Box>
          <Heading size="2xl" fontWeight={"semibold"}>
            Inclusions
          </Heading>
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
          <Heading size="2xl" fontWeight={"semibold"}>
            Exclusions
          </Heading>
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
          <Heading size="2xl" fontWeight={"semibold"}>
            Itinerary
          </Heading>
          <Stack gap="8">
            <Stack gap="2">
              <AccordionRoot size={"lg"} collapsible variant={"subtle"}>
                {safari.itinerary.map((itinerary, index) => (
                  <AccordionItem key={index} value={itinerary.title}>
                    <AccordionItemTrigger bg={bgColor} p={4} mt={2}>
                      <Box
                        w="full"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box fontSize="xl" fontWeight="semibold">
                          {itinerary.title}
                        </Box>
                        <Icon fontSize="lg" color="fg.subtle">
                          <FaChevronDown />
                        </Icon>
                      </Box>
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text
                        p={{
                          base: 4,
                          md: 8,
                        }}
                        dangerouslySetInnerHTML={{
                          __html: itinerary.description,
                        }}
                      />
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </AccordionRoot>
            </Stack>
          </Stack>
        </Box>
      )}

      {/* Related Packages */}
      <Box mt={10}>
        <Heading size="2xl" fontWeight={"semibold"}>
          Related Packages
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={4}>
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  </>;
};

export default SafariDetails;

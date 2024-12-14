// src/components/homePage/TourCard.tsx
"use client";
import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Heading,
  Stack,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { FaClock } from "react-icons/fa";
import RatingCard from "./RatingCard";

const TourCard = ({ tour }: { tour: TourCardProps }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue("white", "gray.700")}
      boxShadow="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.03)" }}
      position={"relative"}
    >
      {/* Tour Image */}
      <Image
        src={tour.image}
        alt={tour.title}
        h="180px"
        w="100%"
        pos={"relative"}
        objectPosition={"top center"}
        objectFit="cover"
      />

      {/* Tour Content */}
      <Box p={5}>
        <Flex justifyContent="space-between" alignItems="center">
          {/* Tour Title */}
          <Heading as="h3" fontSize="xl" color="brand.800">
            {tour.title}
          </Heading>

          {/* Duration */}
          <Text color="brand.600" fontSize={"lg"}>
            <Icon size={"lg"} pr={1}>
              <FaClock />
            </Icon>
            {tour.duration}
          </Text>
        </Flex>

        {/* Location */}
        <Text color="gray.500" fontSize={"sm"} mt={2}>
          {tour.location}
        </Text>
        {/*
         Rating tour.rating e.g 4.5
          */}
        {/* <Stack direction="row" gap={1} mt={2}>
          <RatingCard num={4} />
        </Stack> */}

        <Badge
          colorScheme="green"
          fontSize="1.5rem"
          padding={2}
          borderRadius="full"
          pos={"absolute"}
          top={2}
          right={2}
          fontWeight={"bold"}
        >
          {tour.price}
        </Badge>

        {/* View Tour Button */}
        <Link href={tour.link} passHref>
          <Button
            mt={4}
            size="sm"
            w="full"
            borderRadius="md"
            color={useColorModeValue("white", "gray.800")}
            bg={useColorModeValue("brand.600", "brand.300")}
            _hover={{
              bg: useColorModeValue("brand.700", "brand.400"),
            }}
          >
            Explore Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TourCard;

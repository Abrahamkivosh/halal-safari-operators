"use client";

import React from "react";
import {
  Box,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Flex,
  FormatNumber,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useRouter } from "next/navigation";
import { FaCalendar, FaStar, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useTourPackageData } from "@/utilities/hooks/useTourPackageData";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";
import { getImageURL } from "@/utilities/functions";

interface packageProps {
  _id: string;
  category_id: string;
  sub_category_id: string;
}

const PackageCardSubCategory: React.FC<packageProps> = ({
  _id,
  category_id,
  sub_category_id,
}) => {
  const bgColor = useColorModeValue("whiteAlpha.900", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const shadowColor = useColorModeValue("lg", "dark-lg");

  const textLightColor = useColorModeValue("gray.500", "gray.400");

  const {
    sectionData: tour,
    error,
    loading,
  } = useTourPackageData("tours/" + _id);

  if (loading || !tour) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <Link
        href={`/categories/${category_id}/subcategories/${sub_category_id}/tour/${_id}`}
        passHref
      >
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
            src={
              tour.image
                ? getImageURL(tour.image.path)
                : "/halal-safari-operator-logo-light.svg"
            }
            alt={tour.title}
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
                <FaCalendar /> {tour.duration} Days
              </HStack>
              <Box>
                <HStack fontSize="md" color={textLightColor}>
                  <FaUser /> {tour.people} People
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
              {tour.title}
            </Text>

            <HStack justify="space-between" w="full">
              <Box>
                <Badge colorPalette="green" size="md" fontSize="md">
                  <FaStar /> {tour.rating}
                </Badge>
              </Box>
              <Text fontSize="lg" fontWeight="semibold" color={textColor}>
                <FormatNumber
                  value={tour.price}
                  style="currency"
                  currency="USD"
                />
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Link>
    </>
  );
};

export default PackageCardSubCategory;

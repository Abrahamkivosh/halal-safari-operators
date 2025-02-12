// src/components/homePage/BlogSection.tsx
"use client";

import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../ui/color-mode";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";
import { getImageURL } from "@/utilities/functions";
import { FaChevronRight } from "react-icons/fa";
import BlogGrid from "../blogs/BlogGrid";

const BlogSection: React.FC = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("blogs");

  // check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  const dataAOSDisplay = [
    "fade-up",
    "fade-up-right",
    "fade-up-left",
    "fade-right",
    "fade-left",
    "fade-down",
    "fade-down-right",
    "fade-down-left",
  ];

  return (
    <Box
      py={{ base: "1rem", md: "1rem" }}
      px={{ base: "1rem", md: "4rem" }}
      bg={useColorModeValue("brand.50", "brand.800")}
    >
      {/* Section Title */}
      <Heading
        as="h2"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        color={useColorModeValue("brand.800", "white")}
        mb="2rem"
        data-aos="fade-up"
      >
        Latest from Our Blog
      </Heading>

      {/* Blog Cards */}
      <BlogGrid blogs={sectionArray} />

      {/* View More Button */}
      <Box textAlign="center" mt="2rem">
        <Link href="/blogs" passHref>
          <Button
            size="lg"
            bg={useColorModeValue("brand.600", "brand.300")}
            color="white"
            _hover={{
              bg: useColorModeValue("brand.700", "brand.400"),
            }}
          >
            View More Blogs
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogSection;

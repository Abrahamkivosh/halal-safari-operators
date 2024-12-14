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
import { blogs } from "@/utilities/constants";

const BlogSection = () => {
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
      >
        Latest from Our Blog
      </Heading>

      {/* Blog Cards */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap="2rem"
        maxW="container.xl"
        mx="auto"
      >
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            bg={useColorModeValue("white", "brand.700")}
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "2xl",
            }}
            position={"relative"}
          >
            {/* Blog Image */}
            <Image
              src={blog.image}
              alt={blog.title}
              width="100%"
              height="auto"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="1rem"
              right="1rem"
              bg={useColorModeValue("white", "brand.700")}
              color={useColorModeValue("gray.800", "white")}
              px="1rem"
              py="0.5rem"
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
            >
              <Text fontSize="sm">{blog.date}</Text>
            </Box>

            {/* Blog Content */}
            <Stack p="2rem" gap="1rem">
              <Heading
                as="h3"
                fontSize="lg"
                color={useColorModeValue("brand.800", "white")}
              >
                {blog.title}
              </Heading>
              <Text
                fontSize="md"
                fontWeight="semibold"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {blog.subtitle}
              </Text>

              <Link href={blog.link} passHref>
                <Text
                  color={useColorModeValue("blue.600", "blue.300")}
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  Read More →
                </Text>
              </Link>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      {/* View More Button */}
      <Box textAlign="center" mt="2rem">
        <Link href="/blog" passHref>
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

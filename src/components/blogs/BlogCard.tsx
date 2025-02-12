// components/common/BlogCard.tsx
import React from "react";
import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import { getImageURL } from "@/utilities/functions";

interface BlogCardProps {
  blog: DefaultSectionInterface;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Box
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
      <Link href={"/blogs/" + blog._id} passHref>
        <Image
          src={
            blog.image ? getImageURL(blog.image.path) : "/fallback-image.svg"
          }
          alt={blog.title}
          width="100%"
          height="auto"
          objectFit="cover"
        />
      </Link>

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
          {blog.subTitle}
        </Text>

        <Link href={"/blogs/" + blog._id} passHref>
          <Text
            color={useColorModeValue("blue.600", "blue.300")}
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
            display={"flex"}
            alignItems={"center"}
          >
            Read More <FaChevronRight />
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};

export default BlogCard;

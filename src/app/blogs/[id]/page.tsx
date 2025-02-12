"use client";
// src/app/blogs/[id]/page.tsx
import React, { memo } from "react";
import { Stack, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaShareAlt } from "react-icons/fa";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { getImageURL } from "@/utilities/functions"; // Assumed function to get image URL.
import { usePathname } from "next/navigation";
import { useDefaultSectionData } from "@/utilities/hooks/useDefaultSectionData";
import LoadingComponent from "@/components/common/LoadingComponent";
import ErrorComponent from "@/components/common/ErrorComponent";

const Page: React.FC = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const { sectionData, error, loading } = useDefaultSectionData("blogs/" + id);

  if (loading || !sectionData) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return <SingleBlogDetails blog={sectionData} />;
};

export default memo(Page);

const SingleBlogDetails: React.FC<{ blog: DefaultSectionInterface }> = ({
  blog,
}) => {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <PagesHeroSection title={blog.title} path="blog" />

      {/* Blog Details Section */}
      <Stack
        mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }}
        my={"2rem"}
        gap="2rem"
      >
        {/* Blog Image */}
        <Box>
          <Image
            src={getImageURL(blog.image?.path ?? "")}
            alt={blog.title}
            width="100%"
            height="auto"
            objectFit="cover"
            borderRadius="lg"
            boxShadow="xl"
          />
        </Box>

        {/* Blog Title and Subtitle */}
        <Box textAlign="center">
          <Heading as="h1" fontSize="3xl" color="brand.800" fontWeight="bold">
            {blog.title}
          </Heading>
          <Text fontSize="lg" color="gray.600" fontWeight="medium" mt="1rem">
            {blog.subTitle}
          </Text>
        </Box>

        {/* custom divider */}
        <Stack
          direction="row"
          align="center"
          justify="center"
          gap={4}
          mt="1rem"
          border={2}
          borderColor="gray.300"
          opacity={0.6}
        />

        {/* Blog Content */}
        <Box
          dangerouslySetInnerHTML={{ __html: blog.description || "" }}
          fontSize="md"
          color="gray.700"
          lineHeight="1.6"
          mb="2rem"
        />

        {/* Author and Date */}
        <Stack direction="row" justify="space-between" align="center">
          <Text fontSize="sm" color="gray.500">
            Written by Admin
          </Text>

          {/* Social Sharing Button */}
          <Button
            colorScheme="blue"
            variant="outline"
            size="sm"
            onClick={() =>
              window.open(
                "https://twitter.com/intent/tweet?text=" + window.location.href,
                "_blank"
              )
            }
          >
            Share <FaShareAlt />
          </Button>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

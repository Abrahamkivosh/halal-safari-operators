"use client";
import React from "react";
import { Box, For, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import LoadingComponent from "@/components/common/LoadingComponent";
import ErrorComponent from "@/components/common/ErrorComponent";
import { getImageURL } from "@/utilities/functions";
import { notFound } from "next/navigation";
import PagesHeroSection from "../common/PagesHeroSection";
import { marginX } from "@/utilities/constants";
import { useCategoryData } from "@/utilities/hooks/useCategoryData";
import SubCategoryCard from "./SubCategoryCard";

interface CategoryDetailsProps {
  slug: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ slug }) => {
  const {
    sectionData: category,
    error,
    loading,
  } = useCategoryData("safariCategory/" + slug);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!category) {
    notFound();
  }
  return (
    <>
      <PagesHeroSection
        title={category.title}
        path={`/categories/${category._id}`}
        imgUrl={
          category.image
            ? getImageURL(category.image.path)
            : "/halal-safari-operator-logo-light.svg"
        }
      />

      {/* Description Section */}
      <Box py={12} mx={marginX}>
        <Heading
          as="h2"
          fontSize="3xl"
          fontWeight="bold"
          mb={8}
          color="primary.500"
          textAlign="center"
        >
          {category.title}
        </Heading>
        <Text
          fontSize="lg"
          color="gray.600"
          textAlign={{ base: "justify", md: "justify" }}
          dangerouslySetInnerHTML={{ __html: category.description || "" }}
        />
      </Box>

      {/* Packages Section */}
      <Box py={12} px={{ base: 4, md: 6, lg: 8 }} bg="gray.50">
        <Box maxW="7xl" mx="auto">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={12}
          >
            Our Safari Packages
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap="2rem"
            maxW="container.xl"
            mx="auto"
          >
            {category.subcategories ? (
              <For
                each={category.subcategories}
                fallback={<LoadingComponent />}
              >
                {(subcategory, index) => (
                  <SubCategoryCard
                    key={index}
                    category_id={category._id}
                    sub_category_id={subcategory._id}
                  />
                )}
              </For>
            ) : (
              <Text>No subcategories found</Text>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default CategoryDetails;

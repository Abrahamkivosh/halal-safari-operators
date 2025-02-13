"use client";
import React from "react";

interface SubCategoryDetailsProps {
  category_id: string;
  sub_category_id: string;
}

// src/app/kenya-safaris/[slug]/page.tsx  : To show subcategory
import PagesHeroSection from "@/components/common/PagesHeroSection";

import { Box, For, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";
import { useSubCategoryData } from "@/utilities/hooks/useSubCategoryData";
import PackageCardSubCategory from "./PackageCardSubCategory";
import { getImageURL } from "@/utilities/functions";

const SubCategoryDetails: React.FC<SubCategoryDetailsProps> = ({
  category_id,
  sub_category_id,
}) => {
  const {
    sectionData: subCategory,
    error,
    loading,
  } = useSubCategoryData("subCategory/" + sub_category_id);

  if (loading || !subCategory) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <PagesHeroSection
        title={subCategory.title}
        path={`categories/${category_id}/subcategories/${subCategory._id}`}
        imgUrl={getImageURL(subCategory.image.path)}
      />

      {/* Description Section */}
      <Box py={12} px={{ base: 4, md: 6, lg: 8 }}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            mb={8}
            color="primary.500"
          >
            {subCategory.title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            dangerouslySetInnerHTML={{ __html: subCategory.description || "" }}
          />
        </Box>
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
            {/* Packages */}
            <For each={subCategory.packages} fallback={<LoadingComponent />}>
              {(packageItem, index) => (
                <PackageCardSubCategory
                  key={index}
                  _id={packageItem._id}
                  category_id={category_id}
                  sub_category_id={sub_category_id}
                />
              )}
            </For>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default SubCategoryDetails;

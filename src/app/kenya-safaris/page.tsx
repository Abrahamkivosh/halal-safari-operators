// src/app/kenya-safaris/page.tsx  : To show category
import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import {
  getCategoryById,
  getSubCategoriesByCategoryId,
} from "@/utilities/constants";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { notFound } from "next/navigation";
import SubCategoryCard from "@/components/common/SubCategoryCard";

const KenyaSafaris: React.FC = async () => {
  const slug = "kenya-safaris";
  const category = await getCategoryById(slug);
  if (!category) {
    notFound();
  }

  // fetch subcategories
  const subCategories = await getSubCategoriesByCategoryId(category.id);

  return (
    <>
      <PagesHeroSection
        title="KENYA SAFARIS BY ROAD"
        path="kenya-safaris"
        imgUrl="/kenya.jpg"
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
            {category.title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            dangerouslySetInnerHTML={{ __html: category.description }}
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
            {
              // fetch subcategories
              subCategories ? (
                subCategories.map((subCategory) => (
                  <SubCategoryCard key={subCategory.id} {...subCategory} />
                ))
              ) : (
                <Text>No subcategories found</Text>
              )
            }
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default KenyaSafaris;

// src/app/kenya-safaris/[slug]/page.tsx  : To show subcategory
import PagesHeroSection from "@/components/common/PagesHeroSection";
import {
  getSubCategoryById,
  getSubCategoryPackages,
} from "@/utilities/constants";
import { notFound } from "next/navigation";
import React from "react";
import { PageProps } from "../../../../.next/types/app/page";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import PackageCard from "@/components/common/PackageCard";

interface Props extends PageProps {
  params: Promise<{
    slug: number;
  }>;
}

const SubcategoryPage: React.FC<Props> = async (props) => {
  const { params } = props;
  const { slug } = await params;
  const subCategory = await getSubCategoryById(slug);
  if (!subCategory) {
    notFound();
  }
  // fetch packages
  const packages = await getSubCategoryPackages(subCategory.id);

  return (
    <>
      <PagesHeroSection
        title={subCategory.title}
        path={`/${subCategory.category_id}/${subCategory.id}`}
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
            {subCategory.title}
          </Heading>
          <Text
            fontSize="lg"
            color="gray.600"
            dangerouslySetInnerHTML={{ __html: subCategory.description }}
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
              // fetch packages
              packages ? (
                packages.map((pk) => <PackageCard key={pk.id} {...pk} />)
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

export default SubcategoryPage;

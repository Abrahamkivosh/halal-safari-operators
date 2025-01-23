import { useDefaultSectionData } from "@/utilities/hooks/useDefaultSectionData";
import React from "react";
import LoadingComponent from "../common/LoadingComponent";
import ErrorComponent from "../common/ErrorComponent";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { getImageURL } from "@/utilities/functions";
import Link from "next/link";

interface SubCategoryCardProps {
  category_id: string;
  sub_category_id: string;
}

const SubCategoryCard: React.FC<SubCategoryCardProps> = ({
  category_id,
  sub_category_id,
}) => {
  const {
    sectionData: subcategory,
    error,
    loading,
  } = useDefaultSectionData("subCategory/" + sub_category_id);

  if (loading || !subcategory) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <Link
        href={`/categories/${category_id}/subcategories/${sub_category_id}`}
        passHref
      >
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="lg"
          boxShadow="md"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "xl",
          }}
          aria-label={`Learn more about ${subcategory.title}`}
          maxH={{ base: "20rem", sm: "30rem" }}
        >
          {/* Background Image */}
          <Image
            src={
              subcategory.image
                ? getImageURL(subcategory.image.path)
                : "/halal-safari-operator-logo-light.svg"
            }
            alt={subcategory.title}
            objectFit="cover"
            objectPosition={{ base: "center", md: "top" }}
            width="100%"
            height="100%"
            borderRadius="lg"
            style={{ aspectRatio: "4/3" }}
          />

          {/* Overlay */}
          <Box
            position="absolute"
            top="50%"
            left="0%"
            width="100%"
            height={{ base: "100%", md: "100%" }}
            bg="blackAlpha.600"
            color="white"
            padding={4}
            transform="translateY(-50%)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            borderRadius="lg"
          >
            <Heading as="h3" fontSize="2xl" mb={2}>
              {subcategory.title}
            </Heading>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default SubCategoryCard;

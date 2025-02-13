import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { getImageURL } from "@/utilities/functions";
import { useColorModeValue } from "../ui/color-mode";

interface CategoryCardProps {
  category: DefaultSectionInterface;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const overlayBg = useColorModeValue("brand.900", "brand.50");
  const overlayTextColor = useColorModeValue("white", "black");
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Link href={`/categories/${category._id}`} passHref>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="lg"
        boxShadow={boxShadow}
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        maxH={{ base: "20rem", sm: "30rem" }}
        aria-label={`Learn more about ${category.title}`}
      >
        {/* Background Image */}
        <Image
          src={
            category.image
              ? getImageURL(category.image.path)
              : "/halal-safari-operator-logo-light.svg"
          }
          alt={category.title}
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
          left="0%"
          bottom={{ base: "0%", sm: "5%" }}
          width="100%"
          bg={overlayBg}
          opacity="1"
          transition="opacity 0.3s ease-in-out"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color={overlayTextColor}
          textAlign="center"
          p="1rem"
          borderRadius="lg"
        >
          <Heading
            fontWeight="bold"
            mb="0.5rem"
            fontSize={{ base: "xl", sm: "3xl" }}
          >
            {category.title}
          </Heading>
          <Text fontSize={{ base: "md", sm: "lg" }}>{category.subTitle}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default CategoryCard;

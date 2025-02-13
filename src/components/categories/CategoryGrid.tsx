import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import LoadingComponent from "@/components/common/LoadingComponent";

interface CategoryGridProps {
  categories: DefaultSectionInterface[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  if (!categories || categories.length === 0) {
    return <LoadingComponent />;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="2rem">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </SimpleGrid>
  );
};

export default CategoryGrid;

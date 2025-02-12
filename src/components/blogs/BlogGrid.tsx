// components/common/BlogGrid.tsx
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  blogs: Array<DefaultSectionInterface>;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      gap="2rem"
      maxW="container.xl"
      mx="auto"
    >
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </SimpleGrid>
  );
};

export default BlogGrid;

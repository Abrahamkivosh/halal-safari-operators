// src/app/categories/[slug]/page.tsx

// Purpose: Display the details of a category
import React from "react";
import { PageProps } from "../../../../.next/types/app/page";
import CategoryDetails from "@/components/categories/categoryDetails";

interface Props extends PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SubcategoryPage: React.FC<Props> = async (props) => {
  const { params } = props;
  const { slug } = await params;

  return <CategoryDetails slug={slug} />;
};

export default SubcategoryPage;

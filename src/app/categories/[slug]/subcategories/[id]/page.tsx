// Purpose: Display the details of a category
import React from "react";

import { PageProps } from "../../../../../../.next/types/app/page";
import SubCategoryDetails from "@/components/categories/SubCategoryDetails";

interface Props extends PageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

const SubcategoryPage: React.FC<Props> = async (props) => {
  const { params } = props;
  const { slug, id } = await params;

  return <SubCategoryDetails category_id={slug} sub_category_id={id} />;
};

export default SubcategoryPage;

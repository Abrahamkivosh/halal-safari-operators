import PagesHeroSection from "@/components/common/PagesHeroSection";
import {
  getPackageBySlug,
  getSubCategoryById,
  getSubCategoryPackages,
} from "@/utilities/constants";
import { notFound } from "next/navigation";
import React from "react";
import { PageProps } from "../../../../.next/types/app/page";
import SafariDetails from "@/components/safaris/SafariDetails";

interface Props extends PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const PackagePage: React.FC<Props> = async (props) => {
  const { params } = props;
  const { slug } = await params;
  const safari = await getPackageBySlug(slug); // Get package by slug

  if (!safari) {
    notFound();
  }

  // Get package subcategory
  const subCategory = await getSubCategoryById(safari.sub_category_id);
  if (!subCategory) {
    notFound();
  }
  // Related Packages for this subcategory
  const packages = await getSubCategoryPackages(safari.sub_category_id);

  return (
    <>
      {/* Hero Section */}
      <PagesHeroSection
        title={safari.title}
        path={`/${subCategory.category_id}/${safari.sub_category_id}/${safari.id}`}
        imgUrl={safari.image || "/default-hero.jpg"}
      />

      {/* Package Details */}
      <SafariDetails safari={safari} packages={packages} />
    </>
  );
};

export default PackagePage;

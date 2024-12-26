// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { getPackageBySlug } from "@/utilities/constants";
import SafariDetails from "@/components/safaris/SafariDetails";

interface Props {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: Props) => {
  const safariPackage = getPackageBySlug(slug);

  if (!safariPackage) {
    notFound();
  }

  return (
    <Box as="main" minH="100vh" py="12" px="4">
      <SafariDetails {...safariPackage} />
    </Box>
  );
};

export default Page;

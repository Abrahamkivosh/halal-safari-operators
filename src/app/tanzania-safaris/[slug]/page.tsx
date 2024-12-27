// import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { getPackageBySlug } from "@/utilities/constants";
import SafariDetails from "@/components/safaris/SafariDetails";
import { PageProps } from "../../../../.next/types/app/page";

interface Props extends PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const safariPackage = await getPackageBySlug(slug);

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

import React from "react";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import { PageProps } from "../../../../.next/types/app/page";
import { notFound } from "next/navigation";
import { getDestinationById } from "@/utilities/constants";
import DestinationDetails from "@/components/destinations/DestinationDetails";

interface Props extends PageProps {
  params: Promise<{
    id: number;
  }>;
}
const Page = async ({ params }: Props) => {
  const { id } = await params;
  const destination = await getDestinationById(id);
  if (!destination) {
    notFound();
  }
  return (
    <>
      <PagesHeroSection
        title={destination.title}
        path={"destinations"}
        imgUrl="/images/dodoma.jpg"
      />
      <DestinationDetails {...destination} />
    </>
  );
};

export default Page;

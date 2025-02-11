import React, { memo } from "react";
import { PageProps } from "../../../../.next/types/app/page";
import DestinationSingle from "@/components/destinations/DestinationSingle";

interface Props extends PageProps {
  params: Promise<{
    id: string;
  }>;
}
const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <>
      <DestinationSingle id={id} />
    </>
  );
};

export default memo(Page);

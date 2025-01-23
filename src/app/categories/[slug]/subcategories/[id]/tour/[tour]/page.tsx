// Purpose: Display the details of a category
import React from "react";

import { PageProps } from "../../../../../../../../.next/types/app/page";
import SafariDetails from "@/components/categories/SafariDetails";

interface Props extends PageProps {
  params: Promise<{
    id: string;
    tour: string;
  }>;
}

const TourPage: React.FC<Props> = async (props) => {
  const { params } = props;
  const { id, tour } = await params;

  return <SafariDetails sub_category_id={id} tour_id={tour} />;
};

export default TourPage;

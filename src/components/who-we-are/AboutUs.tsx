// src/components/who-we-are/AboutUs.tsx
"use client";

import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "../ui/color-mode";
import OurTeam from "./our-team/Team";
import Partiners from "./partiners/Partiners";
import FaqSection from "../homePage/FaqSection";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import ErrorComponent from "../common/ErrorComponent";
import LoadingComponent from "../common/LoadingComponent";
import { getImageURL } from "@/utilities/functions";

const AboutUs = () => {
  const bgColor = useColorModeValue("brand.50", "brand.900");
  const {
    sectionArray: aboutUsData,
    error,
    loading,
  } = useDefaultSectionArray("aboutus");

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Box py={{ base: "1.5rem", sm: "2rem" }} bg={bgColor}>
      {aboutUsData.map((data, index) => (
        <ImageWithTextSection data={data} reverse={index % 2 === 0} />
      ))}
      <OurTeam />
      <Partiners />
      <FaqSection />
    </Box>
  );
};

export default AboutUs;

// Reusable Component for Sections with Image and Text
const ImageWithTextSection = ({
  data,
  reverse = false,
}: {
  data: DefaultSectionInterface;
  reverse?: boolean;
}) => {
  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const textColor = useColorModeValue("gray.700", "brand.secondary");
  const boxShadow = useColorModeValue("xl", "dark-lg");
  return (
    <SimpleGrid
      marginX={marginX}
      columns={{ base: 1, md: 2 }}
      gap={8}
      alignItems="center"
      my={{ base: "1rem", sm: "1rem" }}
    >
      {!reverse && (
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow={boxShadow}
          data-aos="fade-left"
        >
          <Image
            src={
              data.image ? getImageURL(data.image.path) : "/fallback-image.svg"
            }
            alt={data.title}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}
      <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-up">
        <Heading
          as="h2"
          fontSize={{ base: "4xl", sm: "6xl" }}
          color={headingColor}
          lineHeight={1.1}
        >
          {data.title}
        </Heading>
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          data-aos="fade-up-right"
          color={textColor}
          dangerouslySetInnerHTML={{ __html: data.description ?? "" }}
        ></Text>
      </Stack>
      {reverse && (
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow={boxShadow}
          data-aos="fade-left"
        >
          <Image
            src={
              data.image ? getImageURL(data.image.path) : "/fallback-image.svg"
            }
            alt={data.title}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}
    </SimpleGrid>
  );
};

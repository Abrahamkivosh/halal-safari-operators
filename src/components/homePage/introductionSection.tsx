"use client";

import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "../ui/color-mode";
import { useDefaultSectionData } from "@/utilities/hooks/useDefaultSectionData";
import ErrorComponent from "../common/ErrorComponent";
import { getImageURL } from "@/utilities/functions";
import Link from "next/link";
import LoadingComponent from "../common/LoadingComponent";

const IntroductionSection = () => {
  // Dynamic color values for dark mode support
  const bgColor = useColorModeValue("brand.50", "brand.900");

  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const textColor = useColorModeValue("gray.700", "brand.secondary");
  const boxShadow = useColorModeValue("xl", "dark-lg");

  const { sectionData, error, loading } =
    useDefaultSectionData("welcomeMessage");

  if (loading || !sectionData) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Box py={{ base: "1.5rem", sm: "2rem" }} bg={bgColor}>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        gap={8}
        alignItems="center"
      >
        {/* Image Section */}
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow={boxShadow}
          display={{ base: "none", sm: "block" }}
          data-aos="fade-left"
        >
          <Image
            src={
              sectionData.image
                ? getImageURL(sectionData.image.path)
                : "/halal-safari-operator-logo-light.svg"
            }
            alt={`${sectionData.title} logo`}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Text Section */}
        <Stack gap={{ base: 2, sm: 4 }}>
          <Link href={sectionData.link || "#"} passHref>
            <Heading
              as="h2"
              fontSize={{ base: "4xl", sm: "6xl" }}
              color={headingColor}
              textAlign={{ base: "center", sm: "left" }}
              lineHeight={{ base: "1.2", sm: "1.1" }}
              data-aos="fade-down"
              dangerouslySetInnerHTML={{
                __html: sectionData?.title || "Best Safari Operator",
              }}
            />
          </Link>

          <Stack fontSize={{ base: "md", sm: "lg" }} color={textColor}>
            <Text
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html:
                  sectionData?.description ||
                  "Best Safari Operator in the world",
              }}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default IntroductionSection;

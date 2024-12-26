// src/components/who-we-are/AboutUs.tsx
"use client";

import { aboutUsData, marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "../ui/color-mode";

const AboutUs = () => {
  const bgColor = useColorModeValue("brand.50", "brand.900");
  return (
    <Box py={{ base: "1.5rem", sm: "2rem" }} bg={bgColor}>
      {aboutUsData.map((data, index) => (
        <ImageWithTextSection
          key={index}
          title={data.title}
          description={data.description}
          imageUrl={data.image}
          reverse={index % 2 === 0}
        />
      ))}
    </Box>
  );
};

export default AboutUs;

// Reusable Component for Sections with Image and Text
const ImageWithTextSection = ({
  title,
  description,
  imageUrl,
  reverse = false,
}: {
  title: string;
  description: string;
  imageUrl: string;
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
            src={imageUrl}
            alt={title}
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
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          color={headingColor}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: "md", sm: "lg" }}
          data-aos="fade-up-right"
          color={textColor}
          dangerouslySetInnerHTML={{ __html: description }}
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
            src={imageUrl}
            alt={title}
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

// src/components/who-we-are/TopHistory.tsx
"use client";

import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "../ui/color-mode";
import { title } from "process";

const TopHistory = () => {
  const bgColor = useColorModeValue("brand.50", "brand.900");

  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const textColor = useColorModeValue("gray.700", "brand.secondary");
  const boxShadow = useColorModeValue("xl", "dark-lg");

  const aboutUsData = [
    {
      image: "/images/lion.jpg",
      title: "Halal Safari Operator",
      description:
        "We are a team of professionals with a passion for travel and adventure. We are committed to providing you with the best experience possible. Our goal is to make your trip as memorable as possible, so you can focus on enjoying the journey.",
    },
    {
      image: "/images/woman.jpg",
      title: "Our Mission",
      description:
        "Our mission is to provide you with the best experience possible. We are committed to making your trip as memorable as possible, so you can focus on enjoying the journey. We are dedicated to providing you with the best service and support, so you can relax and enjoy your vacation without any worries.",
    },
    {
      image: "/images/elephant.jpg",
      title: "Our Vision",
      description:
        "Our vision is to be the leading travel and adventure company in the world. We are committed to providing you with the best experience possible, so you can focus on enjoying the journey. We are dedicated to providing you with the best service and support, so you can relax and enjoy your vacation without any worries.",
    },
  ];

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

export default TopHistory;

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
}) => (
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
        boxShadow="xl"
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
      >
        <Text color="brand.primary" className="welcomeText">
          {title}
        </Text>
      </Heading>
      <Text
        fontSize={{ base: "md", sm: "lg" }}
        data-aos="fade-up-right"
        dangerouslySetInnerHTML={{ __html: description }}
      ></Text>
    </Stack>
    {reverse && (
      <Box
        height={{ base: "20rem", sm: "30rem" }}
        overflow="hidden"
        borderRadius="xl"
        boxShadow="xl"
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

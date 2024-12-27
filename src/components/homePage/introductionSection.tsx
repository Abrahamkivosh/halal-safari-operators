"use client";

import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useColorModeValue } from "../ui/color-mode";

const IntroductionSection = () => {
  // Dynamic color values for dark mode support
  const bgColor = useColorModeValue("brand.50", "brand.900");

  const headingColor = useColorModeValue("brand.primary", "brand.secondary");
  const textColor = useColorModeValue("gray.700", "brand.secondary");
  const boxShadow = useColorModeValue("xl", "dark-lg");

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
            src="/images/maasai.jpg"
            alt="A Maasai tribe member representing African culture"
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
          <Heading
            as="h2"
            fontSize={{ base: "4xl", sm: "6xl" }}
            color={headingColor}
            textAlign={{ base: "center", sm: "left" }}
            lineHeight={{ base: "1.2", sm: "1.1" }}
            data-aos="fade-down"
            dangerouslySetInnerHTML={{
              __html: "Welcome To Halal Safari Operator",
            }}
          />

          <Stack fontSize={{ base: "md", sm: "lg" }} color={textColor}>
            <Text
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html:
                  "We will provide a genuine African experience, regardless of whether this is your first safari or you are a seasoned traveler. Explore safaris, delve into cultural city tours, conquer Kilimanjaro, or unwind in a tranquil resort — our expertise ensures you get the most out of your journey. Discover vital planning details, book a complete journey through us, or contact us for personalised trip. Based in Kenya, operating across 16 African countries.",
              }}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default IntroductionSection;

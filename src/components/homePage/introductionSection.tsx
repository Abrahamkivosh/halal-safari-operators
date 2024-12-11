"use client";
import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const IntroductionSection = () => {
  return (
    <Box mt={{ base: "1.5rem", sm: "3rem" }}>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        gap={8}
        alignItems="center"
        mt={{ base: "1rem", sm: "1.5rem" }}
        my={{ base: "1rem", sm: "4rem" }}
      >
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow="xl"
          data-aos-delay="100"
          data-aos="fade-left"
          display={{ base: "none", sm: "block" }}
        >
          <Image
            src="/images/maasai.jpg"
            alt="Halal safari Operator"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-aos="fade-left"
          />
        </Box>
        <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-up">
          <Heading
            as="h2"
            fontSize={{ base: "4xl", sm: "6xl" }}
            display="flex"
            flexDir={{ base: "row", sm: "row" }}
            data-aos="fade-right"
            color="brand.primary"
            className="welcomeText"
            dangerouslySetInnerHTML={{
              __html: "Welcome To Halal Safari Operator",
            }}
            textAlign={{ base: "center", sm: "left" }}
            lineHeight={{ base: "1.2", sm: "1.1" }}
          />
          <Stack data-aos="fade-up-right" fontSize={{ base: "md", sm: "lg" }}>
            <Text
              dangerouslySetInnerHTML={{
                __html:
                  "We will provide a genuine African experience, regardless of whether this is your first safari or you are a seasoned traveler. Explore safaris, delve into cultural city tours, conquer Kilimanjaro, or unwind in a tranquil resort — our expertise ensures you get the most out of your journey. Discover vital planning details, book a complete journey through us, or contact us for personalised trip. Based in Kenya, operating across 16 African countries",
              }}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default IntroductionSection;

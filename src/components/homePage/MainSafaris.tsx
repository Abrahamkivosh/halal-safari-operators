"use client";
import { marginX } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const MainSafaris = () => {
  return (
    <Box mt={{ base: "1.5rem", sm: "3rem" }}>
      <Box>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "4xl", sm: "6xl" }}
          color="brand.primary"
          className="welcomeText"
          dangerouslySetInnerHTML={{
            __html: "Our Safaris",
          }}
          lineHeight={{ base: "1.2", sm: "1.1" }}
        />
      </Box>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        gap={8}
        alignItems="center"
        mt={{ base: "1rem", sm: "1.5rem" }}
        my={{ base: "1rem", sm: "4rem" }}
      >
        {/* Kenya Tour */}
        <Link href="/kenya-tour" passHref>
          <Box
            position="relative"
            height={{ base: "20rem", sm: "30rem" }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
            role="group"
            bgImage={`url("/images/nairobi.jpg")`}
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            {/* Overlay */}
            <Box
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 1)"
              opacity="0"
              _groupHover={{ opacity: "1" }}
              transition="opacity 0.3s ease-in-out"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="black"
              zIndex={1}
            >
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                Explore Kenya
              </Text>
            </Box>
          </Box>
        </Link>

        {/* Tanzania Tour */}
        <Link href="/tanzania-tour" passHref>
          <Box
            position="relative"
            height={{ base: "20rem", sm: "30rem" }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
            role="group"
            bgImage={`url("/images/tanzania.jpg")`}
            bgSize="cover"
            bgRepeat="no-repeat"
          >
            <Box
              w="100%"
              h="100%"
              bg="rgba(0, 0, 0, 0.6)"
              opacity="0"
              _groupHover={{ opacity: "1" }}
              transition="opacity 0.3s ease-in-out"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                Discover Tanzania
              </Text>
            </Box>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
};

export default MainSafaris;

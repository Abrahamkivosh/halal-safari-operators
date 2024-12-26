// src/app/kenya-safaris/page.tsx
import Image from "next/image";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { PackageCard } from "../../components/common/package-card";
import { miniSafariPackages } from "@/utilities/constants";

export default function KenyaSafaris() {
  return (
    <>
      {/* Hero Section */}
      <Box position="relative" height={{ base: "60vh", sm: "60vh" }}>
        <Image
          src="/kenya.jpg"
          alt="Masai Mara Safari In Kenya"
          layout="fill"
          objectFit="cover"
          priority
          objectPosition="center center"
        />
        <Flex
          position="absolute"
          inset="0"
          align="center"
          justify="center"
          direction="column"
          color="white"
          textAlign="center"
        >
          <Box
            bg="rgba(0, 0, 0, 0.2)"
            p={{ base: 4, md: 6, lg: 8 }}
            borderRadius="md"
            boxShadow={{ base: "md", md: "lg" }}
            fontWeight={600}
          >
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
              mb={4}
            >
              KENYA SAFARIS BY ROAD
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }}>BRONZE & SILVER</Text>
          </Box>
        </Flex>
      </Box>

      {/* Description Section */}
      <Box py={12} px={{ base: 4, md: 6, lg: 8 }}>
        <Box maxW="4xl" mx="auto" textAlign="center">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            mb={8}
            color="primary.500"
          >
            SAFARIS BY ROAD
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Enabled by our 4 x 4 Jeeps and vans to take you through the rough
            terrains for your safari or vacation; Get up close to nature and
            experience the stunning savannahs and spectacular sunsets filled
            with lions, elephants, giraffes, leopards, wildebeests, and much
            more wildlife.
          </Text>
        </Box>
      </Box>

      {/* Packages Section */}
      <Box py={12} px={{ base: 4, md: 6, lg: 8 }} bg="gray.50">
        <Box maxW="7xl" mx="auto">
          <Heading
            as="h2"
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={12}
          >
            Our Safari Packages
          </Heading>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap="2rem"
            maxW="container.xl"
            mx="auto"
          >
            {miniSafariPackages.map((packageData) => (
              <PackageCard key={packageData.id} {...packageData} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

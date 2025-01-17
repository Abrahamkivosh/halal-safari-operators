// src/app/kenya-safaris/page.tsx
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { safariPackages } from "@/utilities/constants";
import PagesHeroSection from "@/components/common/PagesHeroSection";
import PackageCard from "@/components/common/PackageCard";

export default function KenyaSafaris() {
  return (
    <>
      <PagesHeroSection
        title="TANZANIA SAFARIS"
        path="tanzania-safaris"
        imgUrl="/images/tanzania.jpg"
      />

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
            {safariPackages.map((packageData) => (
              <PackageCard key={packageData.id} {...packageData} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

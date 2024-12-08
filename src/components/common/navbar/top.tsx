"use client";

import { contactsData, marginX, socials } from "@/utilities/constants";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { keyframes } from "@emotion/react";

// Keyframes for hover animations
const fadeIn = keyframes`
  from { opacity: 0.5; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const TopNav = () => {
  return (
    <Box
      bgGradient="to-bl"
      gradientFrom={"gray.700"}
      gradientTo={"gray.900"}
      py="1rem"
    >
      <Flex
        marginX={marginX}
        justify={{ base: "center", sm: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        color="brand.white"
        gap={{ base: 4, sm: 2 }}
      >
        {/* Contact Links */}
        <Flex
          gap={{ base: 2, sm: 4 }}
          flexDir={{ base: "column", sm: "row" }}
          align={{ base: "center", sm: "start" }}
        >
          {contactsData.map((item, i) => (
            <Link href={item.link} key={i}>
              <Flex
                display={i == 2 ? { base: "none", lg: "flex" } : "flex"}
                align="center"
                gap={2}
                transition="all 0.3s ease"
                _hover={{
                  color: "brand.secondary",
                  transform: "scale(1.1)",
                }}
              >
                <Box as={item.icon} fontSize="1.2rem" />
                <Text fontSize="lg" fontWeight="medium">
                  {item.label}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>

        {/* Social Icons */}
        <Flex align="center" gap={3}>
          {socials.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Stack
                p=".5rem"
                borderRadius="full"
                bg="brand.white"
                color={"brand.black"}
                boxShadow="lg"
                transition="all 0.3s ease"
                animation={`${fadeIn} 0.5s`}
                _hover={{
                  bg: "brand.secondary",
                  color: "brand.white",
                  transform: "translateY(-5px)",
                }}
              >
                <Box as={item.icon} fontSize="1.5rem" cursor="pointer" />
              </Stack>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;

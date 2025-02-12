"use client";

import { contactsData, marginX, socials } from "@/utilities/constants";
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { keyframes } from "@emotion/react";
import { useColorModeValue } from "@/components/ui/color-mode";

// Keyframes for hover animations
const fadeIn = keyframes`
  from { opacity: 0.5; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const TopNav = () => {
  // Dynamic colors for light and dark mode
  const bgColor = useColorModeValue("brand.primary", "brand.900");
  const textColor = useColorModeValue("brand.50", "brand.50");
  const iconColor = useColorModeValue("brand.50", "brand.50");
  const iconHoverBg = useColorModeValue("brand.100", "brand.500");
  const iconHoverColor = useColorModeValue("brand.primary", "brand.secondary");

  return (
    <Box bgColor={bgColor} py="1rem">
      <Flex
        mx={marginX}
        justify={{ base: "center", sm: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
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
                display={i === 2 ? { base: "none", lg: "flex" } : "flex"}
                align="center"
                gap={2}
                transition="all 0.3s ease"
                _hover={{
                  color: iconHoverColor,
                  transform: "scale(1.05)",
                  fontWeight: "bold",
                }}
                cursor="pointer"
              >
                <Icon fontSize="1.5rem" color={textColor}>
                  {<item.icon />}
                </Icon>
                <Text fontSize="lg" fontWeight="medium" color={textColor}>
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
                p="0.5rem"
                borderRadius="full"
                bg={useColorModeValue("brand.primary", "brand.100")}
                color={iconColor}
                boxShadow="lg"
                transition="all 0.3s ease"
                animation={`${fadeIn} 0.5s`}
                _hover={{
                  bg: iconHoverBg,
                  color: iconHoverColor,
                  transform: "translateY(-5px)",
                }}
                cursor="pointer"
              >
                <Icon
                  fontSize="1.5rem"
                  color={iconColor}
                  _hover={{ color: iconHoverColor }}
                >
                  {<item.icon />}
                </Icon>
              </Stack>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;

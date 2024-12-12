"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import React, { useState } from "react";

// Animation for dropdown
const fadeInSlideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

interface Props {
  item: {
    label: string;
    link?: string;
    subItems?: {
      label: string;
      link: string;
    }[];
  };
}

const MenuDropdown = ({ item }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") setIsOpen((prev) => !prev);
    if (event.key === "Escape") setIsOpen(false);
  };

  const linkColor = useColorModeValue("gray.500", "gray.800");
  const linkHoverColor = useColorModeValue("blue.800", "brand.primary");

  if (!item.subItems) {
    return (
      <Link href={item.link || "/"} passHref>
        <Box
          fontWeight="semibold"
          fontSize="lg"
          color={linkColor}
          _hover={{
            color: linkHoverColor,
            transform: "scale(1.1)",
            fontWeight: "bold",
          }}
          cursor="pointer"
          tabIndex={0}
          transition="all 0.3s ease"
        >
          {item.label}
        </Box>
      </Link>
    );
  }

  return (
    <Box
      position="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="menu"
    >
      <Flex
        alignItems="center"
        cursor="pointer"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        tabIndex={0}
        _hover={{
          color: "brand.primary",
          fontWeight: "bold",
        }}
        onKeyDown={handleKeyDown}
      >
        <Text fontWeight="semibold" fontSize="lg">
          {item.label}
        </Text>
      </Flex>

      {isOpen && (
        <Box
          position="absolute"
          mt={2}
          bg="white"
          boxShadow="xl"
          borderRadius="md"
          zIndex={10}
          minW="200px"
          animation={`${fadeInSlideDown} 0.3s ease`}
        >
          {item.subItems.map((subItem, index) => (
            <Link key={index} href={subItem.link || "/"} passHref>
              <Box
                px={4}
                py={3}
                fontWeight="medium"
                color={linkColor}
                _hover={{
                  bg: "gray.100",
                  color: linkHoverColor,
                  transform: "translateX(1px)",
                  fontWeight: "bold",
                }}
                cursor="pointer"
                transition="all 0.3s ease"
              >
                {subItem.label}
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuDropdown;

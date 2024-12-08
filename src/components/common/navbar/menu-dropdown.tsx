"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import React, { useState } from "react";

// Animation for dropdown
const fadeInSlideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

  if (!item.subItems) {
    return (
      <Link href={item.link || "/"} passHref>
        <Text
          fontWeight="semibold"
          fontSize="lg"
          color="gray.700"
          _hover={{ color: "brand.primary", transform: "scale(1.1)" }}
          cursor="pointer"
          tabIndex={0}
          transition="all 0.3s ease"
        >
          {item.label}
        </Text>
      </Link>
    );
  }

  return (
    <Box position="relative" onMouseEnter={handleMouseEnter} role="menu">
      <Flex
        alignItems="center"
        cursor="pointer"
        aria-haspopup="menu"
        _hover={{ color: "brand.primary" }}
      >
        <Text fontWeight="semibold" fontSize="lg">
          {item.label}
        </Text>
        <ChevronDownIcon ml={2} boxSize={5} />
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="menu"
        >
          {item.subItems.map((subItem, index) => (
            <Link key={index} href={subItem.link || "/"} passHref>
              <Text
                px={4}
                py={3}
                fontWeight="medium"
                color="gray.600"
                _hover={{
                  bg: "gray.100",
                  color: "brand.primary",
                  transform: "translateX(5px)",
                }}
                cursor="pointer"
                tabIndex={0}
                transition="all 0.3s ease"
              >
                {subItem.label}
              </Text>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuDropdown;

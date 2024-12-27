"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const pathname = usePathname();

  const linkColor = useColorModeValue("gray.500", "gray.800");
  const linkHoverColor = useColorModeValue("blue.800", "brand.primary");
  const dropdownBg = useColorModeValue("white", "gray.700");

  if (!item.subItems) {
    return (
      <Link href={item.link || "/"} passHref>
        <Box
          fontSize="lg"
          py={2}
          _hover={{
            color: linkHoverColor,
            transform: "scale(1.05)",
            fontWeight: "bold",
            borderTop: "2px solid",
            borderBottom: "2px solid",
            borderColor: "brand.primary",
          }}
          cursor="pointer"
          tabIndex={0}
          transition="all 0.3s ease"
          borderTop={pathname === item.link ? "2px solid" : "none"}
          borderBottom={pathname === item.link ? "2px solid" : "none"}
          borderColor={pathname === item.link ? "brand.primary" : "none"}
          color={pathname === item.link ? linkHoverColor : linkColor}
          fontWeight={pathname === item.link ? "bold" : "medium"}
        >
          {item.label}
        </Box>
      </Link>
    );
  }

  return (
    <Box position="relative" onMouseEnter={handleMouseEnter}>
      <HStack
        cursor="pointer"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        tabIndex={0}
        _hover={{
          color: "brand.primary",
          fontWeight: "bold",
        }}
        onKeyDown={handleKeyDown}
        fontWeight="semibold"
        fontSize="lg"
      >
        {item.label}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </HStack>

      {isOpen && (
        <Box
          position="absolute"
          mt={2}
          bg={dropdownBg}
          boxShadow="xl"
          borderRadius="md"
          zIndex={10}
          minW="200px"
          animation={`${fadeInSlideDown} 0.3s ease`}
          onMouseLeave={handleMouseLeave}
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
                tabIndex={0}
                transition="all 0.3s ease"
                role="menuitem"
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

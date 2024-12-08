"use client";
import { useRouter } from "@/utils/hooks/useRouter";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

interface Props {
  menuItem: {
    label: string;
    link?: string | undefined;
    subItems?: {
      label: string;
      link: string;
    }[];
  };
}

const MenuDropdown = ({ menuItem }: Props) => {
  const mDropdown = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const dropdownEl = mDropdown.current;
    if (dropdownEl) {
      dropdownEl.addEventListener("mouseover", onOpen);
      dropdownEl.addEventListener("mouseleave", onClose);
    }

    return () => {
      if (dropdownEl) {
        dropdownEl.removeEventListener("mouseover", onOpen);
        dropdownEl.removeEventListener("mouseleave", onClose);
      }
    };
  }, []);

  if (!menuItem.subItems) {
    return (
      <Link href={menuItem.link ? menuItem.link : "/"}>
        <Text
          fontWeight="semibold"
          _hover={{
            color: "brand.primary",
          }}
        >
          {menuItem.label}
        </Text>
      </Link>
    );
  }

  function navigateTo(link: string | undefined) {
    if (link) {
      return () => router.push(link);
    }
    return () => {};
  }
  return (
    <Box ref={mDropdown}>
      <Menu
        isOpen={isOpen}
        placement="bottom-start"
        closeOnSelect={true}
        gutter={0}
      >
        <MenuButton
          _active={{
            bg: "none",
            color: "brand.primary",
          }}
          _hover={{
            bg: "none",
            color: "red",
          }}
          height={73}
          onClick={navigateTo(menuItem.link)}
        >
          <Flex
            align="center"
            color="brand.black"
            gap={1}
            _hover={{
              color: "brand.primary",
            }}
          >
            <Text fontWeight="semibold">{menuItem.label}</Text>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Flex>
        </MenuButton>

        <MenuList
          mt="2"
          zIndex="9999"
          bg="brand.white"
          color="brand.black"
          border="1px solid var(--chakra-colors-brand-primary)"
          borderTopRadius={0}
          onMouseLeave={() => {
            isOpen && onClose();
          }}
        >
          {menuItem.subItems.map((s, i) => (
            <MenuItem
              key={i}
              minH="48px"
              bg="brand.blue"
              transition="all 0.2s ease-in-out"
              _hover={{
                bg: "brand.black",
                color: "brand.white",
              }}
            >
              <Link href={`${s.link}`}>
                <Box as="span" fontWeight="semibold">
                  {s.label}
                </Box>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuDropdown;

"use client";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Box,
  Button,
  Stack,
  StackSeparator,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
interface NavType {
  label: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

const MobileNav = ({ navData }: { navData: NavType[] }) => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const linkColor = useColorModeValue("gray.500", "gray.800");
  return (
    <Box>
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button
            zIndex={2}
            w="30px"
            h="30px"
            color={linkColor}
            bg="none"
            _hover={{ background: "none" }}
            aria-label="menu"
          >
            <RxHamburgerMenu size={25} />
          </Button>
        </DrawerTrigger>
        <DrawerContent bg={"brand.200"}>
          <DrawerBody>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color={linkColor}
              separator={<StackSeparator bg="blue" h="1px" />}
              width={"100%"}
            >
              {navData.map((nav) => (
                <MobileNavItem key={nav.label} {...nav} />
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Text fontSize="sm" color={linkColor}>
              © {currentYear} Halal Safari Operators. All rights reserved.
            </Text>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};

export default MobileNav;
const MobileNavItem = ({ label, subItems, link }: NavType) => {
  const { open, onToggle } = useDisclosure();
  const linkColor = useColorModeValue("gray.500", "gray.800");
  const linkHoverColor = useColorModeValue("blue.800", "brand.primary");
  return (
    <Box w="100%">
      <Link href={link ?? "#"} passHref>
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          w="100%"
          onClick={onToggle}
        >
          <Text
            color={linkColor}
            _hover={{
              bg: "brand.100",
              color: linkHoverColor,
            }}
          >
            {label}
          </Text>
          {subItems && <FaChevronDown />}
        </Stack>
      </Link>
      {subItems && (
        <Stack
          display={open ? "block" : "none"}
          w="100%"
          separator={<StackSeparator bg="green" h="1px" />}
        >
          {subItems.map((child) => (
            <Link key={child.label} href={child.link} passHref>
              <Text
                p={0}
                pl={4}
                color={linkColor}
                _hover={{
                  bg: "blue.900",
                  color: linkHoverColor,
                }}
              >
                {child.label}
              </Text>
            </Link>
          ))}
        </Stack>
      )}
    </Box>
  );
};

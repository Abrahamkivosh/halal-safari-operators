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
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useColorModeValue } from "@/components/ui/color-mode";
import { useRouter } from "next/navigation";
interface NavType {
  label: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

const MobileNav = ({ navData }: { navData: NavType[] }) => {
  const [openDraw, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const linkColor = useColorModeValue("gray.500", "gray.800");
  const { open, onToggle } = useDisclosure();
  const linkHoverColor = useColorModeValue("blue.800", "brand.primary");
  const router = useRouter();

  const navigate = (link?: string) => {
    if (!link) {
      onToggle();
      return;
    }
    router.push(link);
    setOpen(false);
  };

  return (
    <Box>
      <DrawerRoot open={openDraw} onOpenChange={(e) => setOpen(e.open)}>
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
              {navData.map((nav, index) => (
                <Box w="100%" key={index}>
                  <Stack
                    direction="row"
                    align="center"
                    justify="space-between"
                    w="100%"
                    color={linkColor}
                    _hover={{
                      bg: "brand.100",
                      color: linkHoverColor,
                    }}
                    onClick={() => navigate(nav.link)}
                  >
                    {nav.label}
                    {nav.subItems && <FaChevronDown />}
                  </Stack>

                  {nav.subItems && (
                    <Stack
                      display={open ? "block" : "none"}
                      w="100%"
                      separator={<StackSeparator bg="green" h="1px" />}
                    >
                      {nav.subItems.map((child) => (
                        <Text
                          key={child.label}
                          p={0}
                          pl={4}
                          color={linkColor}
                          _hover={{
                            bg: "blue.900",
                            color: linkHoverColor,
                          }}
                          onClick={() => navigate(child.link)}
                        >
                          {child.label}
                        </Text>
                      ))}
                    </Stack>
                  )}
                </Box>
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

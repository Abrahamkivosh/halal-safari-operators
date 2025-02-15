"use client";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { marginX, navData } from "@/utilities/constants";
// import MenuDropdown from "./menu-dropdown";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import MobileNav from "./mobile-nav";
import MenuDropdown from "./menu-dropdown";
import { FaMoon, FaSun } from "react-icons/fa";

const MainNav = () => {
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");
  const { colorMode } = useColorMode();
  const { toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue("white", "brand.200")}>
      <Flex justify="space-between" align="center" marginX={marginX}>
        <Box>
          <Link href="/" passHref>
            <Image
              src={
                colorMode === "light"
                  ? "/halal-safari-operator-logo-dark.svg"
                  : "/halal-safari-operator-logo-light.svg"
              }
              alt="Halal Safari Operators"
              width={210}
              height={150}
              blurDataURL={
                colorMode === "light"
                  ? "/halal-safari-operator-logo-dark.svg"
                  : "/halal-safari-operator-logo-light.svg"
              }
            />
          </Link>
        </Box>

        <Flex align="center" gap={5} display={{ base: "none", xl: "flex" }}>
          {navData.map((item, i) => (
            <MenuDropdown key={i} item={item} />
          ))}
        </Flex>
        <Flex display={{ base: "none", xl: "flex" }} gap={6}>
          <Link href="/contact-us" passHref>
            <Button
              borderRadius="xl"
              bg={buttonBg}
              color="brand.white"
              _hover={{
                bg: buttonHoverBg,
              }}
              p={2}
            >
              B2B/Work With Us <MdArrowOutward />
            </Button>
          </Link>
          <Box>
            <Icon
              as={colorMode === "light" ? FaMoon : FaSun}
              boxSize="6"
              cursor="pointer"
              onClick={toggleColorMode}
              _hover={{ color: "blue.500" }}
              color={useColorModeValue("brand.900", "brand.50")}
            />
          </Box>
        </Flex>
        <Box display={{ base: "block", xl: "none" }}>
          <MobileNav navData={navData} />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNav;

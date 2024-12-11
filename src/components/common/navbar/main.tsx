"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { marginX, navData } from "@/utilities/constants";
import MenuDropdown from "./menu-dropdown";
import { useColorModeValue } from "@/components/ui/color-mode";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  return (
    <Box bg={useColorModeValue("white", "brand.200")}>
      <Flex justify="space-between" py="2" align="center" marginX={marginX}>
        <Box>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Halal Safari Operators"
              width={210}
              height={150}
              blurDataURL="/logo.png"
            />
          </Link>
        </Box>

        <Flex align="center" gap={3} display={{ base: "none", xl: "flex" }}>
          {navData.map((item, i) => (
            <MenuDropdown key={i} item={item} />
          ))}
        </Flex>
        <Flex display={{ base: "none", xl: "flex" }} gap={2}>
          <Link href="/get-a-quote" target="_blank">
            <Button
              borderRadius="xl"
              bg="brand.black"
              color="brand.white"
              _hover={{
                bg: "brand.primary",
              }}
            >
              Get A Quote <MdArrowOutward />
            </Button>
          </Link>
        </Flex>
        <Box display={{ base: "block", xl: "none" }}>
          <MobileNav navData={navData} />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNav;

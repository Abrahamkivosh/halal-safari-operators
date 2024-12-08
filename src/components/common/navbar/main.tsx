import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { marginX, navData } from "@/utilities/constants";
import MenuDropdown from "./menu-dropdown";

const MainNav = () => {
  return (
    <Box bg="brand.200">
      <Flex justify="space-between" py="2" align="center" marginX={marginX}>
        <Box>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Halal Safari Operators"
              width={110}
              height={110}
              blurDataURL="/logo.svg"
            />
          </Link>
        </Box>

        <Flex align="center" gap={3} display={{ base: "none", xl: "flex" }}>
          {navData.map((item, i) => (
            <MenuDropdown key={i} item={item} />
          ))}
        </Flex>
        <Flex display={{ base: "none", xl: "flex" }} gap={2}>
          <Link href="" target="_blank">
            <Button
              borderRadius="xl"
              bg="brand.black"
              color="brand.white"
              _hover={{
                bg: "brand.primary",
              }}
            >
              Book Now <MdArrowOutward />
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainNav;

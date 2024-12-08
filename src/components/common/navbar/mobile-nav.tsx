"use client";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxHamburgerMenu } from "react-icons/rx";

import { Box, IconButton, Stack, StackSeparator, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { navData } from "@/utilities/constants";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const navigate = (link: string) => {
    router.push(link);
  };
  return (
    <Box>
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton
            as={RxHamburgerMenu}
            zIndex={2}
            w="30px"
            h="30px"
            color="black"
            bg="none"
            _hover={{ background: "none" }}
            aria-label="menu"
          />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerBody>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="white"
              separator={<StackSeparator bg="primary" h="1px" />}
            >
              {navData.map((nav) => (
                <Text
                  key={nav.label}
                  onClick={() => navigate(nav.href)}
                  color="white"
                  fontWeight="600"
                  fontSize="xl"
                  _hover={{
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {nav.label}
                </Text>
              ))}
              <Link href="/donate">
                <Button hideBelow="md" colorPalette="primary">
                  Apply Now <FaPaperPlane />
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};

export default MobileNav;

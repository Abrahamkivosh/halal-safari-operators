"use client";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/configs";
import { Box, Flex, Text, Stack, HStack, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

// Reusable Section Component
const Section = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <Box>
    {title && (
      <Text fontSize="lg" fontWeight="bold" mb="4">
        {title}
      </Text>
    )}
    {children}
  </Box>
);

const FooterIndex: React.FC = () => {
  const socialMediaLinks = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      icon: FaFacebook,
      hoverColor: "blue.400",
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: FaTwitter,
      hoverColor: "cyan.400",
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: FaInstagram,
      hoverColor: "pink.400",
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: FaLinkedin,
      hoverColor: "blue.400",
    },
  ];

  const bgColor = useColorModeValue("brand.primary", "brand.900");
  const textColor = useColorModeValue("brand.50", "brand.50");

  const quickLinks = [
    { href: "/who-we-are", label: "About Us" },
    { href: "/blogs", label: "Our Blogs" },
    { href: "/get-a-qote", label: "Group Tours" },
    { href: "/contact-us", label: "B2B Work With Us" },
  ];
  const { colorMode } = useColorMode();

  const toggleColorMode = useColorMode().toggleColorMode;

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      py="8"
      px={{ base: "6", md: "16" }}
    >
      {/* Main Content */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        gap="8"
      >
        {/* Branding Section */}
        <Section>
          <Image
            src={"/halal-safari-operator-logo-light.svg"}
            alt="Halal Safari Operators"
            mb="4"
            w="auto"
            h="150px"
          />
          <Text fontSize="sm" color={textColor}>
            Giving you the best safari experience in Africa and the Middle East.
          </Text>
          <HStack gap="4" mt="4">
            {socialMediaLinks.map((link) => (
              <Link href={link.href} key={link.label} passHref>
                <Icon
                  boxSize="6"
                  transition="color 0.2s"
                  _hover={{ color: link.hoverColor }}
                >
                  <link.icon />
                </Icon>
              </Link>
            ))}
          </HStack>
        </Section>

        {/* Quick Links */}
        <Section title="Quick Links">
          <Stack gap="2">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} passHref>
                <Text cursor="pointer" _hover={{ color: "blue.500" }}>
                  {link.label}
                </Text>
              </Link>
            ))}
          </Stack>
        </Section>

        {/* Contact Details */}
        <Section title="Contact Us">
          <Stack gap="2">
            <Box>
              Email:{" "}
              <Link href={`mailto:${CONTACT_EMAIL}`} passHref>
                <Text
                  fontSize={"lg"}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                >
                  {CONTACT_EMAIL}
                </Text>
              </Link>
            </Box>
            <Box>
              Phone:{" "}
              <Link href={`tail:${CONTACT_PHONE}`} passHref>
                <Text
                  fontSize={"lg"}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                >
                  {CONTACT_PHONE}
                </Text>
              </Link>
            </Box>
            <Box>
              Address:{" "}
              <Text
                fontSize={"lg"}
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              >
                {CONTACT_ADDRESS}
              </Text>
            </Box>
          </Stack>
        </Section>
      </Flex>

      {/* Divider */}
      <Box
        my="8"
        mx="auto"
        width={{ base: "100%", md: "80%" }}
        height="1px"
        bg={useColorModeValue("brand.100", "brand.500")}
      />

      {/* Copyright Section */}
      <Flex
        justify="center"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        textAlign="center"
        gap="4"
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} halalsafarioperator. All rights reserved.
        </Text>
        {/* <HStack gap="4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </HStack> */}
      </Flex>
    </Box>
  );
};

export default FooterIndex;

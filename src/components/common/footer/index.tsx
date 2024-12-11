"use client";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Flex, Text, Stack, HStack, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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

  const quickLinks = [
    { href: "/about-us", label: "About Us" },
    { href: "/blogs", label: "Our Blogs" },
    { href: "/join-our-group-tour", label: "Group Tours" },
    { href: "/b2b", label: "B2B Work With Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.200", "gray.800")}
      color={useColorModeValue("gray.700", "gray.300")}
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
            src="/logo.png"
            alt="Halal Safari Operators"
            mb="4"
            w="150px"
            h="auto"
          />
          <Text fontSize="sm" lineHeight="tall">
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
            <Text>Email: info@halalsafarioperator.com</Text>
            <Text>Phone: +123 456 7890</Text>
            <Text>Address: 123 Street, City, Country</Text>
          </Stack>
        </Section>
      </Flex>

      {/* Divider */}
      <Box
        my="8"
        mx="auto"
        width={{ base: "100%", md: "80%" }}
        height="1px"
        bg={useColorModeValue("gray.300", "gray.700")}
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
          © {new Date().getFullYear()} halalsafarioperator. All rights
          reserved.
        </Text>
        <HStack gap="4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default FooterIndex;

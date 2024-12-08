"use client";
import { Box, Flex, Text, Stack, Link, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterIndex: React.FC = () => {
  return (
    <Box
      as="footer"
      bgGradient="to-r"
      gradientFrom="gray.700"
      gradientTo="gray.900"
      color="white"
      py="6"
      px="8"
    >
      {/* Main Content */}
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
        align="start"
        gap="6"
      >
        {/* Branding Section */}
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            YourBrand
          </Text>
          <Text fontSize="md" lineHeight="tall">
            Creating solutions that transform the way you work and live. Join us
            in shaping the future.
          </Text>
        </Box>

        {/* Quick Links */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb="4">
            Quick Links
          </Text>
          <Stack gap="2">
            <Link href="/about" _hover={{ color: "gray.200" }}>
              About Us
            </Link>
            <Link href="/services" _hover={{ color: "gray.200" }}>
              Our Services
            </Link>
            <Link href="/careers" _hover={{ color: "gray.200" }}>
              Careers
            </Link>
            <Link href="/contact" _hover={{ color: "gray.200" }}>
              Contact Us
            </Link>
          </Stack>
        </Box>

        {/* Contact Details */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb="4">
            Contact Us
          </Text>
          <Stack gap="2">
            <Text>Email: info@yourbrand.com</Text>
            <Text>Phone: +123 456 7890</Text>
            <Text>Address: 123 Street, City, Country</Text>
          </Stack>
        </Box>

        {/* Social Media Links */}
        <Box>
          <Text fontSize="lg" fontWeight="semibold" mb="4">
            Follow Us
          </Text>
          <HStack gap="4">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Icon
                boxSize="6"
                color={"gray.200"}
                _hover={{ color: "blue.200" }}
              >
                <FaFacebook />
              </Icon>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <Icon
                boxSize="6"
                color={"gray.200"}
                _hover={{ color: "green.200" }}
              >
                <FaTwitter />
              </Icon>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Icon
                boxSize="6"
                color={"gray.200"}
                _hover={{ color: "pink.200" }}
              >
                <FaInstagram />
              </Icon>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Icon
                boxSize="6"
                color={"gray.200"}
                _hover={{ color: "blue.200" }}
              >
                <FaLinkedin />
              </Icon>
            </Link>
          </HStack>
        </Box>
      </Flex>

      {/* Divider */}
      {/* custom divider */}
      <Box bg="gray.200" h="1px" my="6" />

      {/* Copyright Section */}
      <Flex
        justify="center"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        textAlign="center"
      >
        <Text fontSize="sm" mb={{ base: "2", md: "0" }}>
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </Text>
        <HStack ml={{ md: "4" }} gap="4">
          <Link
            href="/privacy-policy"
            fontSize="sm"
            _hover={{ color: "gray.200" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            fontSize="sm"
            _hover={{ color: "gray.200" }}
          >
            Terms of Service
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default FooterIndex;

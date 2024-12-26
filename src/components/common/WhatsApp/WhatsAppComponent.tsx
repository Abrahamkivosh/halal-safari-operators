"use client";
import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { CONTACT_PHONE } from "@/configs";

// Keyframe animation for bounce effect
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Keyframe animation for glowing light effect
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(72, 187, 120, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
  }
`;

const WhatsAppComponent = () => {
  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      zIndex="1000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="60px"
      h="60px"
      bg="green.500"
      borderRadius="50%"
      animation={`${bounceAnimation} 2s infinite, ${pulseAnimation} 2s infinite`} // Add bounce and pulse animations
      transition="all 0.3s ease-in-out"
      _hover={{
        bg: "green.600",
        transform: "scale(1.1)",
      }}
    >
      <Link
        href={{
          pathname: `https://wa.me/${CONTACT_PHONE}`,
          query: { text: "Hello! I would like to make an inquiry." },
        }}
        passHref
      >
        <Icon
          color="white"
          w="40px"
          h="40px"
          cursor="pointer"
          aria-label="WhatsApp Icon"
        >
          <FaWhatsapp />
        </Icon>
      </Link>
    </Box>
  );
};

export default WhatsAppComponent;

import React from "react";
import { Stack, Text, Heading, Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Stack
      direction="column"
      align="center"
      justify="center"
      gap={6}
      bgGradient="linear(to-r, blue.50, teal.50)"
      p={4}
    >
      {/* Add a decorative image */}
      <Image
        src="/404.svg"
        alt="404 Error"
        w="500px"
        objectFit="cover"
        borderRadius="lg"
        shadow="none"
      />

      {/* Main heading */}
      <Heading size="2xl" color="blue.700" textAlign="center">
        Oops! Page Not Found
      </Heading>

      {/* Subtext */}
      <Text fontSize="lg" color="gray.600" textAlign="center">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>

      {/* Call-to-action button */}
      <Link href="/" passHref>
        <Button
          size="lg"
          colorScheme="teal"
          shadow="md"
          _hover={{
            bg: "teal.600",
          }}
        >
          Go Back to Homepage
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFound;

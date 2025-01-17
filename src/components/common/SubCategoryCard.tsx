"use client";

import React from "react";
import { Text, Image, VStack, Link } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface SubCategoryCardInterface {
  id: string | number;
  image: string;
  title: string;
}

const SubCategoryCard: React.FC<SubCategoryCardInterface> = ({
  id,
  image,
  title,
}) => {
  const textColor = useColorModeValue("gray.100", "white");
  const shadowColor = useColorModeValue("lg", "dark-lg");

  return (
    <Link
      href={`/kenya-safaris/${id}`}
      position="relative"
      borderRadius="20px"
      overflow="hidden"
      boxShadow={shadowColor}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      backdropFilter="blur(10px)"
      p={0}
      border="2px solid transparent"
      pos={{ base: "relative", md: "relative" }}
      bgClip="padding-box"
    >
      <Image
        src={image}
        alt={title}
        borderRadius="15px"
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <VStack
        align="center"
        gap={4}
        mt={4}
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="rgba(0, 0, 0, 0.5)"
        p={4}
        borderRadius="15px"
        backdropFilter="blur(10px)"
      >
        <Text fontSize="lg" fontWeight="bold" color={textColor}>
          {title}
        </Text>
      </VStack>
    </Link>
  );
};

export default SubCategoryCard;

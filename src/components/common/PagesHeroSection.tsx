import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import ScrollToBottom from "./scrollBottom";
import { marginX } from "@/utilities/constants";

interface Props {
  path: string;
  imgUrl?: string;
  title?: string;
  h?: string;
}

const PagesHeroSection = ({ path, imgUrl, title, h }: Props) => {
  const imagwUrl = imgUrl ? imgUrl : "/images/lion.jpg";
  return (
    <Box position="relative">
      <Flex
        minH={h || "55vh"}
        bgImage={`url(${imagwUrl})`}
        bgSize="cover"
        bgBlendMode="overlay"
        bgPos="center"
        bgRepeat="no-repeat"
        align="center"
        justify="center"
        backgroundAttachment="fixed"
      >
        <Stack marginX={marginX} align="center" color="brand.white">
          <Heading
            textAlign="center"
            fontSize={{ base: "3rem", md: "5rem" }}
            fontWeight="700"
            color="brand.white"
            textShadow={{ base: "1px 1px 2px #000", md: "2px 2px 4px #000" }}
            textWrap={{ base: "wrap", md: "nowrap" }}
            lineHeight={{ base: "1.2", md: "1.1" }}
          >
            {title || path}
          </Heading>
        </Stack>
      </Flex>

      <ScrollToBottom />
    </Box>
  );
};

export default PagesHeroSection;

"use client";
import { BASE_URL } from "@/configs";
import { getVideoId, marginX } from "@/utilities/constants";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import { Box, For, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ErrorComponent from "../common/ErrorComponent";
import LoadingComponent from "../common/LoadingComponent";

const VideoSection: React.FC = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("videos");

  // check if loading
  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <Stack marginX={marginX} my="2rem" align="center">
      <Heading
        color="brand.primary"
        fontSize={{ base: "1.8rem", md: "2rem" }}
        py={{ base: "1rem", sm: "3rem" }}
      >
        Relax and Enjoy Our Videos
      </Heading>

      <SimpleGrid
        py={{ base: "1rem", sm: "3rem" }}
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={6} // Increased spacing
        px={{ base: "10px", sm: "20px" }}
        width={"100%"}
      >
        <For each={sectionArray} fallback={<LoadingComponent />}>
          {(video, index) => <VideoCard key={index} video={video} />}
        </For>
      </SimpleGrid>
    </Stack>
  );
};

export default VideoSection;

const VideoCard = ({ video }: { video: DefaultSectionInterface }) => {
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    playerVars: {
      autoplay: 0,
      origin: BASE_URL,
    },
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  return (
    <Box
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      _hover={{ transform: "scale(1.02)", transition: "0.3s ease-in-out" }} // Added hover effect
    >
      {/* Responsive YouTube Video */}
      <Box aspectRatio={16 / 9}>
        <YouTube
          videoId={video.link ? getVideoId(video.link) : ""}
          opts={opts}
          onReady={onPlayerReady}
        />
      </Box>

      {/* Video Title */}
      <Text fontSize="md" fontWeight="semibold" textAlign="center" p="10px">
        {video.title}
      </Text>
    </Box>
  );
};

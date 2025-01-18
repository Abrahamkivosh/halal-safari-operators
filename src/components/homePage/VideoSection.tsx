"use client";
import { BASE_URL } from "@/configs";
import { getVideoId, marginX, videos } from "@/utilities/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideosGalleryInterface {
  id: number;
  title: string;
  video: string;
}

const VideoSection: React.FC = () => {
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
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default VideoSection;

const VideoCard = ({ video }: { video: VideosGalleryInterface }) => {
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
          videoId={getVideoId(video.video)}
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

// src/components/common/Loading.tsx
import { Box, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Stack gap={4}>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Box>
  );
};

export default LoadingComponent;

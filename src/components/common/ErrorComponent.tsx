import { Box } from "@chakra-ui/react";
import React, { Context } from "react";
import { Alert } from "../ui/alert";

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  return (
    <Box width={{ base: "100%", md: "50%" }} zIndex={100} position="fixed">
      <Alert status="error" title="Error Occurred" width={"100%"}>
        {error}
      </Alert>
    </Box>
  );
};

export default ErrorComponent;

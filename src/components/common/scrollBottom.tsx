"use client";
import { Icon, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";

const ScrollToBottom = () => {
  return (
    <motion.div
      animate={{
        y: [0, 20, 0],
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Stack bg="brand.primary" p={2} borderRadius="full">
        <Icon color="brand.white" boxSize={6}>
          <FaArrowDownLong />
        </Icon>
      </Stack>
    </motion.div>
  );
};

export default ScrollToBottom;

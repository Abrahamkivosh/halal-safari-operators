import { Box, Heading, Text } from "@chakra-ui/react";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <Box textAlign="center" py={{ base: "1rem", sm: "3rem" }}>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="gray.700"
        mb={2}
      >
        {title}
      </Heading>
      {description && (
        <Text
          color="gray.500"
          fontSize={{ base: "md", md: "lg" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Box>
  );
};

export default SectionHeader;

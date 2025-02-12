import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { marginX } from "@/utilities/constants";
import TeamCard from "./TeamCard";
import { useDefaultSectionArray } from "@/utilities/hooks/useDefaultSectionArray";
import LoadingComponent from "@/components/common/LoadingComponent";
import ErrorComponent from "@/components/common/ErrorComponent";

const OurTeam = () => {
  const { sectionArray, error, loading } = useDefaultSectionArray("staff");

  // Check if loading
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
        fontSize={"2rem"}
        py={{ base: "1rem", sm: "3rem" }}
      >
        Our Staff
      </Heading>

      <SimpleGrid
        py={{ base: "1rem", sm: "3rem" }}
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={8}
        padding="20px"
        width={"100%"}
      >
        {sectionArray.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default OurTeam;

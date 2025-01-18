import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { marginX, teams } from "@/utilities/constants";
import TeamCard from "./TeamCard";

const OurTeam = () => {
  const team = teams;
  const boardMembers = team.filter((m) => m.is_board_member);
  const employees = team.filter((m) => !m.is_board_member);

  return (
    <Stack marginX={marginX} my="2rem" align="center">
      <Heading
        color="brand.primary"
        fontSize={"2rem"}
        py={{ base: "1rem", sm: "3rem" }}
      >
        Board of Directors
      </Heading>

      <SimpleGrid
        py={{ base: "1rem", sm: "3rem" }}
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={4}
        padding={{ base: "5px", sm: "20px" }}
        width={"100%"}
      >
        {boardMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </SimpleGrid>
      <Heading
        color="brand.primary"
        fontSize={"2rem"}
        py={{ base: "1rem", sm: "3rem" }}
      >
        The Staff
      </Heading>

      <SimpleGrid
        py={{ base: "1rem", sm: "3rem" }}
        columns={{ base: 1, md: 2, xl: 3 }}
        gap={8}
        padding="20px"
        width={"100%"}
      >
        {employees.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default OurTeam;

import { Tooltip } from "@/components/ui/tooltip";
import { Box, Stack, Text, Image, Link, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Member {
  name: string;
  profile_pic: string;
  position: string;
  is_board_member: boolean;
  email?: string;
  facebook_link?: string;
  linkedin_link?: string;
}

const TeamCard = ({ member }: { member: Member }) => {
  return (
    <Box
      borderRadius="20px"
      bg="white"
      padding="24px"
      boxShadow="0px 15px 30px rgba(0, 0, 0, 0.2)"
      zIndex={2}
      position="relative"
      _hover={{
        transform: "translateY(-10px)",
        boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.3)",
      }}
      transition="all 0.4s ease-in-out"
      width="100%"
      textAlign="center"
    >
      {/* Profile Picture */}
      <Box
        position="absolute"
        top="-50px"
        left="50%"
        transform="translateX(-50%)"
        borderRadius="full"
        overflow="hidden"
        boxShadow="0px 5px 15px rgba(0, 0, 0, 0.2)"
        width="100px"
        height="100px"
      >
        <Image
          src={member.profile_pic}
          alt={`${member.name}'s profile`}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      {/* Card Content */}
      <Stack gap={4} marginTop="60px" alignItems="center">
        <Text fontSize="lg" fontWeight="bold" color="gray.700">
          {member.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {member.position}
        </Text>

        {/* Social Links */}
        <Flex gap={4} justify="center" align="center">
          {member.email && (
            <Tooltip content="Email" showArrow>
              <Link href={`mailto:${member.email}`}>
                <Icon color="blue.500" boxSize={6}>
                  <FaEnvelope />
                </Icon>
              </Link>
            </Tooltip>
          )}
          {member.facebook_link && (
            <Tooltip content="Facebook" showArrow>
              <Link href={member.facebook_link}>
                <Icon color="blue.600" boxSize={6}>
                  <FaFacebook />
                </Icon>
              </Link>
            </Tooltip>
          )}
          {member.linkedin_link && (
            <Tooltip content="LinkedIn" showArrow>
              <Link href={member.linkedin_link}>
                <Icon color="blue.700" boxSize={6}>
                  <FaLinkedin />
                </Icon>
              </Link>
            </Tooltip>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

export default TeamCard;

"use client";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Field } from "@/components/ui/field";
import { useForm } from "react-hook-form";

import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { InputGroup } from "../ui/input-group";
import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { Alert } from "../ui/alert";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { RiArrowRightLine } from "react-icons/ri";
import { handleFormSubmissionAction } from "@/actions/contactUs";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from "@/configs";
import { useColorModeValue } from "../ui/color-mode";

const ContactUsComponent = () => {
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");

  const [response, setResponse] = useState<ContactUsActionResponseInterface>();
  const [isLoading, setIsLoading] = useState(false);
  // Use react-hook-form to handle form state and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUSInterface>();
  // Handle form submission to async function handleFormSubmissionAction in src/actions/contactUs.ts
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const response = await handleFormSubmissionAction(data);
    setResponse(response);
    setIsLoading(false);
    // clear form fields on successful submission
    if (response.status === 200) {
      // reset form fields
      document.querySelectorAll("input, textarea").forEach((field) => {
        if (
          field instanceof HTMLInputElement ||
          field instanceof HTMLTextAreaElement
        ) {
          field.value = "";
        }
      });
    }
  });

  return (
    <>
      {/* Hero Section */}
      <Box
        bgImage={"url('/images/contact-bg.jpg')"}
        bgSize={"cover"}
        bgAttachment={"fixed"}
        position={"relative"}
        h={"50vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        overflow={"hidden"}
      >
        {/* Gradient Overlay */}
        <Box
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          // bgGradient={"linear(to-r, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))"}
          bgGradient={"to-r"}
          gradientFrom={"rgba(0, 0, 0, 0.7)"}
          gradientTo={"rgba(0, 0, 0, 0.4)"}
          zIndex={1}
        />
        <Box zIndex={2} color={"white"} px={6}>
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight={"bold"}
            mb={3}
            textShadow={"0 4px 6px rgba(0, 0, 0, 0.4)"}
          >
            Contact Us
          </Heading>
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            textShadow={"0 2px 4px rgba(0, 0, 0, 0.4)"}
          >
            We are here to help you. Reach out to us anytime for support.
          </Text>
        </Box>
      </Box>
      <Stack gap={0}>
        {/* Contact Form and Info Section */}
        <Stack
          direction={{ base: "column", lg: "row" }}
          gap={8}
          px={{ base: 6, md: 20 }}
          py={12}
          bg={"gray.50"}
          align={"center"}
        >
          {/* Contact Form */}
          <Box flex={1} w={"100%"}>
            <Heading fontSize={"2xl"} mb={4} color={"gray.700"}>
              Send Us a Message
            </Heading>
            <VStack gap={4} align={"stretch"} as={"form"} onSubmit={onSubmit}>
              <Field
                label="Your Name"
                invalid={!!errors.name}
                errorText={errors.name?.message}
                width={"100%"}
              >
                <InputGroup flex="1" startElement={<LuUser />} width={"100%"}>
                  <Input
                    placeholder="Your Name"
                    size={"lg"}
                    bg={"white"}
                    borderColor={"gray.300"}
                    _hover={{ borderColor: "green.400" }}
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                </InputGroup>
              </Field>
              <Field
                label="Your Phone Number"
                invalid={!!errors.phone}
                errorText={errors.phone?.message}
              >
                <InputGroup flex="1" startElement={<FaPhone />} width={"100%"}>
                  <Input
                    placeholder="Your Phone Number"
                    size={"lg"}
                    bg={"white"}
                    borderColor={"gray.300"}
                    _hover={{ borderColor: "green.400" }}
                    type="tel"
                    {...register("phone", {
                      required: "Phone is required",
                    })}
                  />
                </InputGroup>
              </Field>
              <Field
                label="Your Email"
                invalid={!!errors.email}
                errorText={errors.email?.message}
              >
                <InputGroup
                  flex="1"
                  startElement={<FaEnvelope />}
                  width={"100%"}
                >
                  <Input
                    placeholder="Your Email"
                    size={"lg"}
                    bg={"white"}
                    borderColor={"gray.300"}
                    _hover={{ borderColor: "green.400" }}
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                </InputGroup>
              </Field>
              <Field
                label="Your Message"
                invalid={!!errors.message}
                errorText={errors.message?.message}
              >
                <Textarea
                  placeholder="Your Message"
                  size={"lg"}
                  bg={"white"}
                  borderColor={"gray.300"}
                  _hover={{ borderColor: "green.400" }}
                  rows={6}
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
              </Field>

              <Button
                size={"lg"}
                alignSelf={"flex-start"}
                px={8}
                type="submit"
                loading={isLoading}
                loadingText="Submitting"
                borderRadius="xl"
                bg={buttonBg}
                color="brand.white"
                _hover={{
                  bg: buttonHoverBg,
                }}
                p={2}
              >
                Send Message <RiArrowRightLine />
              </Button>
              <Stack>
                {response && (
                  <Alert
                    p={4}
                    fontSize={"lg"}
                    title={response.body.message}
                    status={response.status === 200 ? "success" : "error"}
                    icon={
                      response.status === 200 ? <IoCheckmark /> : <RxCross2 />
                    }
                    closable
                  ></Alert>
                )}
              </Stack>
            </VStack>
          </Box>

          {/* Contact Information */}
          <Box flex={1} w={"100%"}>
            <Heading fontSize={"2xl"} mb={4} color={"gray.700"}>
              Contact Information
            </Heading>
            <VStack align={"start"} gap={4}>
              <HStack>
                <Icon color={"green.500"} boxSize={6}>
                  <FaPhone />
                </Icon>
                <Link href={`tail:${CONTACT_PHONE}`} passHref>
                  <Text
                    fontSize={"lg"}
                    color={"brand.primary"}
                    _hover={{
                      color: "black",
                    }}
                  >
                    {CONTACT_PHONE}
                  </Text>
                </Link>
              </HStack>
              <HStack>
                <Icon color={"green.500"} boxSize={6}>
                  <FaEnvelope />
                </Icon>
                <Link href={`tail:${CONTACT_EMAIL}`} passHref>
                  <Text
                    fontSize={"lg"}
                    color={"brand.primary"}
                    _hover={{
                      color: "black",
                    }}
                  >
                    {CONTACT_EMAIL}
                  </Text>
                </Link>
              </HStack>
              <HStack>
                <Icon color={"green.500"} boxSize={6}>
                  <FaMapMarkerAlt />
                </Icon>
                <Link href={`tail:${CONTACT_ADDRESS}`} passHref>
                  <Text
                    fontSize={"lg"}
                    color={"brand.primary"}
                    _hover={{
                      color: "black",
                    }}
                  >
                    {CONTACT_ADDRESS}
                  </Text>
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default ContactUsComponent;

// src/components/getAQuote/index.tsx
"use client";
import {
  Box,
  Stack,
  Textarea,
  Heading,
  Text,
  SimpleGrid,
  Input,
  CheckboxGroup,
  Flex,
  Fieldset,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../ui/color-mode";
import { Field } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

// Motion component for animations
const MotionBox = motion(Box);

const GetAQuoteComponent = () => {
  const mainBgColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");
  const formBg = useColorModeValue("white", "gray.700");

  const ageOfChildren = [
    {
      title: "0 - 3 years",
      value: "0 - 3 years",
    },
    {
      title: "4 - 7 years",
      value: "4 - 7 years",
    },
    {
      title: "8 - 12 years",
      value: "8 - 12 years",
    },
    {
      title: "13 - 18 years",
      value: "13 - 18 years",
    },
  ];

  const typeOfSafari = [
    {
      title: "Bush Only",
      value: "Bush Only",
    },
    {
      title: "Beach Only",
      value: "Beach Only",
    },
    {
      title: "Bush & Beach",
      value: "Bush & Beach",
    },
    {
      title: "Mountain Climbing",
      value: "Mountain Climbing",
    },
    {
      title: "Cultural",
      value: "Cultural",
    },
    {
      title: "Bird Watching",
      value: "Bird Watching",
    },
    {
      title: "Fishing",
      value: "Fishing",
    },
    {
      title: "Zip Lining",
      value: "Zip Lining",
    },
  ];

  const notificationPreference = [
    {
      title: "Email",
      value: "email",
    },
    {
      title: "Phone",
      value: "phone",
    },
    {
      title: "Whatsapp",
      value: "whatsapp",
    },
  ];

  return (
    <Box bgSize="cover" py={12} px={6} position="relative" bg={mainBgColor}>
      {/* Overlay for background image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={0}
      />

      {/* Content */}
      <Stack
        zIndex={1}
        position="relative"
        gap={6}
        textAlign="center"
        color={textColor}
      >
        <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          Request a Quote for Your Dream Adventure
        </Heading>
        <Text fontSize="lg" maxW="600px" mx="auto">
          Fill in the form below to get personalized travel offers and explore
          the world like never before.
        </Text>
      </Stack>

      {/* Form Section */}
      <MotionBox
        bg={formBg}
        borderRadius="md"
        boxShadow="lg"
        mt={8}
        p={8}
        mx="auto"
        maxW={{ base: "100%", md: "80%" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        as="form"
      >
        <Stack gap={6}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {/* Name Field */}
            <Field
              required
              label="Your Name"
              helperText="Enter your full name"
              errorText="This field is required"
            >
              <Input
                placeholder="Enter your full name"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Field>

            {/* Email Field */}
            <Field
              required
              label="Email Address"
              helperText="Enter your email address"
              errorText="This field is required"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
              />
            </Field>

            {/* Phone Field */}
            <Field
              required
              label="Phone Number"
              helperText="Enter your phone number"
              errorText="This field is required"
            >
              <Input
                type="tel"
                placeholder="Enter your phone number"
                bg="gray.100"
              />
            </Field>
            {/* Country */}
            <Field
              required
              label="Country"
              helperText="Enter your country"
              errorText="This field is required"
            >
              <Input placeholder="Enter your country" bg="gray.100" />
            </Field>
            {/* Duration Of Travel */}
            <Field
              required
              label="Duration of Travel"
              helperText="Enter the duration of your travel"
              errorText="This field is required"
            >
              <Input
                placeholder="Enter the duration of your travel"
                bg="gray.100"
              />
            </Field>
            {/* Safari Start Date */}
            <Field
              required
              label="Safari Start Date"
              helperText="Enter the start date of your safari"
              errorText="This field is required"
            >
              <Input
                type="date"
                placeholder="Enter the start date of your safari"
                bg="gray.100"
              />
            </Field>
            {/* Safari End Date */}
            <Field
              required
              label="Safari End Date"
              helperText="Enter the end date of your safari"
              errorText="This field is required"
            >
              <Input
                type="date"
                placeholder="Enter the end date of your safari"
                bg="gray.100"
              />
            </Field>
            {/* Number Of Adults */}
            <Field
              required
              label="Number of Adults"
              helperText="Enter the number of adults"
              errorText="This field is required"
            >
              <Input
                type="number"
                placeholder="Enter the number of adults"
                bg="gray.100"
              />
            </Field>
            {/* Number Of Children */}
            <Field
              required
              label="Number of Children"
              helperText="Enter the number of children"
              errorText="This field is required"
            >
              <Input
                type="number"
                placeholder="Enter the number of children"
                bg="gray.100"
              />
            </Field>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={6}>
            {/* Age of Children */}
            <Fieldset.Root>
              <CheckboxGroup name="ageOfChildren" colorPalette="teal">
                <Fieldset.Legend mb={2}>Age of Children</Fieldset.Legend>

                <Fieldset.Content
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  flexDir={{ base: "column", md: "row" }}
                >
                  {ageOfChildren.map((age) => (
                    <Checkbox
                      key={age.value}
                      value={age.value}
                      variant={"outline"}
                      mx={1}
                      p={2}
                      colorPalette={"green"}
                      size={"lg"}
                      _focus={{ bg: "white", borderColor: "blue.400" }}
                      _hover={{
                        bg: "blue.50",
                        color: "blue.800",
                      }}
                    >
                      {age.title}
                    </Checkbox>
                  ))}
                </Fieldset.Content>
              </CheckboxGroup>
            </Fieldset.Root>
            {/* Estimated Budget */}
            <Field
              required
              label="Estimated Budget"
              helperText="Enter your estimated budget"
              errorText="This field is required"
            >
              <Input
                type="number"
                placeholder="Enter your estimated budget"
                bg="gray.100"
              />
            </Field>
          </SimpleGrid>
          {/* Type Of Safari : Select from list */}
          <Fieldset.Root>
            <CheckboxGroup name="typeOfSafari" colorPalette="teal">
              <Fieldset.Legend mb={2}>Type Of Safari</Fieldset.Legend>

              <Fieldset.Content
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                flexDir={{ base: "column", md: "row" }}
              >
                {typeOfSafari.map((safari) => (
                  <Checkbox
                    key={safari.value}
                    value={safari.value}
                    variant={"outline"}
                    mx={1}
                    p={2}
                    colorPalette={"green"}
                    size={"lg"}
                    _focus={{ bg: "white", borderColor: "blue.400" }}
                    _hover={{
                      bg: "blue.50",
                      color: "blue.800",
                    }}
                  >
                    {safari.title}
                  </Checkbox>
                ))}
              </Fieldset.Content>
            </CheckboxGroup>
          </Fieldset.Root>

          {/* Message Field */}
          <Field
            required
            label="Message"
            helperText="Tell us more about your trip requirements"
            errorText="This field is required"
          >
            <Textarea
              placeholder="Tell us more about your trip requirements..."
              rows={4}
              bg="gray.100"
            />
          </Field>

          {/* Notification Preference */}
          <Fieldset.Root
            name="notification_preference"
            _required={{ color: "red" }}
          >
            <CheckboxGroup
              name="notification_preference"
              colorPalette="teal"
              _required={{ color: "red" }}
            >
              <Fieldset.Legend mb={2}>
                How would you like to be notified?
              </Fieldset.Legend>

              <Fieldset.Content
                display="flex"
                flexWrap="wrap"
                justifyContent="left"
                flexDir={{ base: "column", md: "row" }}
              >
                {notificationPreference.map((notify) => (
                  <Checkbox
                    key={notify.value}
                    value={notify.value}
                    variant={"outline"}
                    mx={1}
                    p={2}
                    colorPalette={"green"}
                    size={"lg"}
                    _focus={{ bg: "white", borderColor: "blue.400" }}
                    _hover={{
                      bg: "blue.50",
                      color: "blue.800",
                    }}
                  >
                    {notify.title}
                  </Checkbox>
                ))}
              </Fieldset.Content>
            </CheckboxGroup>
          </Fieldset.Root>

          {/* Submit Button */}
          <Button
            size="xl"
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s"
            width={{ base: "100%", md: "50%" }}
            mx="auto"
            borderRadius={10}
            type="submit"
          >
            Request Quote
          </Button>
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default GetAQuoteComponent;

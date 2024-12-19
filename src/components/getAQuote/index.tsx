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
  Fieldset,
  Code,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useColorModeValue } from "../ui/color-mode";
import { Field } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useController } from "react-hook-form";
import {
  RequestQuotationFormData,
  requestQuotationFormSchema,
} from "./validations";
import getQuotationAction from "@/actions/getQuotation";

// Motion component for animations
const MotionBox = motion(Box);

const GetAQuoteComponent = () => {
  const mainBgColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");
  const formBg = useColorModeValue("white", "gray.700");

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<RequestQuotationFormData>({
    resolver: zodResolver(requestQuotationFormSchema),
  });
  const [is_loading, setLoading] = useState(false);

  const onSubmit = async (data: RequestQuotationFormData) => {
    setLoading(true);
    try {
      const response = await getQuotationAction(data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const ageOfChildrenControl = useController({
    name: "ageOfChildren",
    control,
    defaultValue: [],
  });

  const typeOfSafariControl = useController({
    name: "typeOfSafari",
    control,
    defaultValue: [],
  });

  const notifyControl = useController({
    name: "notificationPreference",
    control,
    defaultValue: [],
  });

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

  const typeOfSafaris = [
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
  const ageOfChildrenInvalid = !!errors.ageOfChildren;
  const typeOfSafariInvalid = !!errors.typeOfSafari;
  const notifyInvalid = !!errors.notificationPreference;

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
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack gap={6}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Field
              required
              label="Your Name"
              helperText="Enter your full name"
              invalid={errors.name === undefined ? false : true}
              errorText={errors.name?.message?.toString()}
            >
              <Input
                placeholder="Enter your full name"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("name")}
                autoCapitalize="words"
                autoComplete="name"
                autoFocus
              />
            </Field>

            <Field
              required
              label="Email Address"
              helperText="Enter your email address"
              invalid={errors.email === undefined ? false : true}
              errorText={errors.email?.message?.toString()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("email")}
                autoComplete="email"
              />
            </Field>

            <Field
              required
              label="Phone Number"
              helperText="Enter your phone number"
              invalid={errors.phone === undefined ? false : true}
              errorText={errors.phone?.message?.toString()}
            >
              <Input
                type="tel"
                placeholder="Enter your phone number"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("phone")}
              />
            </Field>
            <Field
              required
              label="Country"
              helperText="Enter your country"
              invalid={errors.country === undefined ? false : true}
              errorText={errors.country?.message?.toString()}
            >
              <Input
                placeholder="Enter your country"
                bg="gray.100"
                {...register("country")}
                autoComplete="country"
              />
            </Field>
            <Field
              required
              label="Duration of Travel"
              helperText="Enter the duration of your travel"
              invalid={errors.duration === undefined ? false : true}
              errorText={errors.duration?.message?.toString()}
            >
              <Input
                placeholder="Enter the duration of your travel"
                bg="gray.100"
                {...register("duration")}
              />
            </Field>
            <Field
              required
              label="Safari Start Date"
              helperText="Enter the start date of your safari"
              invalid={errors.safariStartDate === undefined ? false : true}
              errorText={errors.safariStartDate?.message?.toString()}
            >
              <Input
                type="date"
                placeholder="Enter the start date of your safari"
                bg="gray.100"
                {...register("safariStartDate")}
              />
            </Field>
            <Field
              required
              label="Safari End Date"
              helperText="Enter the end date of your safari"
              invalid={errors.safariEndDate === undefined ? false : true}
              errorText={errors.safariEndDate?.message?.toString()}
            >
              <Input
                type="date"
                placeholder="Enter the end date of your safari"
                bg="gray.100"
                {...register("safariEndDate")}
              />
            </Field>
            <Field
              required
              label="Number of Adults"
              helperText="Enter the number of adults"
              invalid={errors.adults === undefined ? false : true}
              errorText={errors.adults?.message?.toString()}
            >
              <Input
                type="number"
                placeholder="Enter the number of adults"
                bg="gray.100"
                {...register("adults", { valueAsNumber: true })}
              />
            </Field>
            <Field
              required
              label="Number of Children"
              helperText="Enter the number of children"
              invalid={errors.children === undefined ? false : true}
              errorText={errors.children?.message?.toString()}
            >
              <Input
                type="number"
                placeholder="Enter the number of children"
                bg="gray.100"
                {...register("children", { valueAsNumber: true })}
              />
            </Field>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={6}>
            <Fieldset.Root invalid={ageOfChildrenInvalid}>
              <CheckboxGroup
                colorPalette="teal"
                invalid={ageOfChildrenInvalid}
                onValueChange={ageOfChildrenControl.field.onChange}
                name={ageOfChildrenControl.field.name}
              >
                <Fieldset.Legend mb={2}>Age Of Children</Fieldset.Legend>

                <Fieldset.Content
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="left"
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
              {errors.notificationPreference && (
                <Fieldset.ErrorText>
                  {errors.notificationPreference.message?.toString()}
                </Fieldset.ErrorText>
              )}
            </Fieldset.Root>

            <Field
              required
              label="Estimated Budget"
              helperText="Enter your estimated budget"
              invalid={errors.budget === undefined ? false : true}
              errorText={errors.budget?.message?.toString()}
            >
              <Input
                type="number"
                placeholder="Enter your estimated budget"
                bg="gray.100"
                {...register("budget", { valueAsNumber: true })}
              />
            </Field>
          </SimpleGrid>

          <Fieldset.Root invalid={typeOfSafariInvalid}>
            <CheckboxGroup
              colorPalette="teal"
              invalid={typeOfSafariInvalid}
              onValueChange={typeOfSafariControl.field.onChange}
              name={typeOfSafariControl.field.name}
            >
              <Fieldset.Legend mb={2}>type Of Safari</Fieldset.Legend>

              <Fieldset.Content
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                flexDir={{ base: "column", md: "row" }}
              >
                {typeOfSafaris.map((safari) => (
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
            {errors.notificationPreference && (
              <Fieldset.ErrorText>
                {errors.notificationPreference.message?.toString()}
              </Fieldset.ErrorText>
            )}
          </Fieldset.Root>

          <Field
            required
            label="Message"
            helperText="Tell us more about your trip requirements"
            invalid={errors.message === undefined ? false : true}
            errorText={errors.message?.message?.toString()}
          >
            <Textarea
              placeholder="Tell us more about your trip requirements..."
              rows={4}
              bg="gray.100"
              {...register("message")}
            />
          </Field>

          <Fieldset.Root invalid={notifyInvalid}>
            <CheckboxGroup
              colorPalette="teal"
              invalid={notifyInvalid}
              onValueChange={notifyControl.field.onChange}
              name={notifyControl.field.name}
            >
              <Fieldset.Legend mb={2}>Notification Preference</Fieldset.Legend>

              <Fieldset.Content
                display="flex"
                flexWrap="wrap"
                justifyContent="left"
                flexDir={{ base: "column", md: "row" }}
              >
                {notificationPreference.map((age) => (
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
            {errors.notificationPreference && (
              <Fieldset.ErrorText>
                {errors.notificationPreference.message?.toString()}
              </Fieldset.ErrorText>
            )}
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
            loading={is_loading}
            loadingText="Submitting"
          >
            Request Quote
          </Button>
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default GetAQuoteComponent;

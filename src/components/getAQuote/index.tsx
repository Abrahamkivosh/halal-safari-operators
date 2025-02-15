// src/components/getAQuote/index.tsx 0741073940
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
} from "@chakra-ui/react";
import React, { useState } from "react";
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

const GetAQuoteComponent = () => {
  const mainBgColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");
  const formBg = useColorModeValue("white", "gray.700");

  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");

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
      title: "4 - 12 years",
      value: "4 - 12 years",
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
      title: "Bush & Beach Combined",
      value: "Bush & Beach Combined",
    },
    {
      title: "Beach Only",
      value: "Beach Only",
    },
  ];

  const notificationPreference = [
    {
      title: "Email",
      value: "email",
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
      <Box
        bg={formBg}
        borderRadius="md"
        boxShadow="lg"
        mt={8}
        p={8}
        mx="auto"
        maxW={{ base: "100%", md: "80%" }}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack gap={6}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            <Field
              required
              label="Your Name"
              color={textColor}
              invalid={errors.name === undefined ? false : true}
              errorText={errors.name?.message?.toString()}
            >
              <Input
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("name")}
                autoCapitalize="words"
                autoComplete="name"
                autoFocus
              />
            </Field>

            <Field
              color={textColor}
              required
              label="Email Address"
              invalid={errors.email === undefined ? false : true}
              errorText={errors.email?.message?.toString()}
            >
              <Input
                type="email"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("email")}
                autoComplete="email"
              />
            </Field>

            <Field
              color={textColor}
              required
              label="Phone Number"
              invalid={errors.phone === undefined ? false : true}
              errorText={errors.phone?.message?.toString()}
            >
              <Input
                type="tel"
                bg="gray.100"
                _focus={{ bg: "white", borderColor: "blue.400" }}
                {...register("phone")}
              />
            </Field>
            <Field
              color={textColor}
              required
              label="Country"
              invalid={errors.country === undefined ? false : true}
              errorText={errors.country?.message?.toString()}
            >
              <Input
                bg="gray.100"
                {...register("country")}
                autoComplete="country"
              />
            </Field>
            <Field
              color={textColor}
              required
              label="Duration of Travel"
              invalid={errors.duration === undefined ? false : true}
              errorText={errors.duration?.message?.toString()}
            >
              <Input bg="gray.100" {...register("duration")} />
            </Field>
            <Field
              color={textColor}
              required
              label="Safari Start Date"
              invalid={errors.safariStartDate === undefined ? false : true}
              errorText={errors.safariStartDate?.message?.toString()}
            >
              <Input
                type="date"
                bg="gray.100"
                {...register("safariStartDate")}
              />
            </Field>
            <Field
              required
              label="Safari End Date"
              invalid={errors.safariEndDate === undefined ? false : true}
              errorText={errors.safariEndDate?.message?.toString()}
            >
              <Input type="date" bg="gray.100" {...register("safariEndDate")} />
            </Field>
            <Field
              color={textColor}
              required
              label="Number of Adults"
              invalid={errors.adults === undefined ? false : true}
              errorText={errors.adults?.message?.toString()}
            >
              <Input
                type="number"
                bg="gray.100"
                {...register("adults", { valueAsNumber: true })}
              />
            </Field>
            <Field
              color={textColor}
              required
              label="Number of Children"
              invalid={errors.children === undefined ? false : true}
              errorText={errors.children?.message?.toString()}
            >
              <Input
                type="number"
                bg="gray.100"
                {...register("children", { valueAsNumber: true })}
              />
            </Field>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={6}>
            <Fieldset.Root invalid={ageOfChildrenInvalid}>
              <CheckboxGroup
                colorPalette="teal"
                color={textColor}
                invalid={ageOfChildrenInvalid}
                onValueChange={ageOfChildrenControl.field.onChange}
                name={ageOfChildrenControl.field.name}
              >
                <Fieldset.Legend mb={2} color={textColor}>
                  Age Of Children
                </Fieldset.Legend>

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
                      color={textColor}
                      size={"lg"}
                      _focus={{ bg: "white", borderColor: "blue.400" }}
                      _hover={{
                        bg: "blue.50",
                        color: "blue.800",
                      }}
                      {...register("ageOfChildren")}
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
              color={textColor}
              required
              label="Estimated Budget"
              invalid={errors.budget === undefined ? false : true}
              errorText={errors.budget?.message?.toString()}
            >
              <Input
                type="number"
                bg="gray.100"
                {...register("budget", { valueAsNumber: true })}
              />
            </Field>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={6}>
            <Fieldset.Root invalid={typeOfSafariInvalid}>
              <CheckboxGroup
                color={textColor}
                colorPalette="teal"
                invalid={typeOfSafariInvalid}
                onValueChange={typeOfSafariControl.field.onChange}
                name={typeOfSafariControl.field.name}
              >
                <Fieldset.Legend mb={2} color={textColor}>
                  Type Of Safari
                </Fieldset.Legend>

                <Fieldset.Content
                  display="flex"
                  flexDir={{ base: "column", md: "column" }}
                >
                  {typeOfSafaris.map((safari) => (
                    <Checkbox
                      color={textColor}
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
                      {...register("typeOfSafari")}
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
            <Fieldset.Root invalid={notifyInvalid}>
              <CheckboxGroup
                color={textColor}
                colorPalette="teal"
                invalid={notifyInvalid}
                onValueChange={notifyControl.field.onChange}
                name={notifyControl.field.name}
              >
                <Fieldset.Legend mb={2} color={textColor}>
                  Notification Preference
                </Fieldset.Legend>

                <Fieldset.Content
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="left"
                  flexDir={{ base: "column", md: "column" }}
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
                      {...register("notificationPreference")}
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
          </SimpleGrid>

          <Field
            color={textColor}
            required
            label="Message"
            helperText="Tell us more about your trip requirements"
            invalid={errors.message === undefined ? false : true}
            errorText={errors.message?.message?.toString()}
          >
            <Textarea rows={4} bg="gray.100" {...register("message")} />
          </Field>

          {/* Submit Button */}
          <Button
            size="xl"
            transition="all 0.3s"
            width={{ base: "100%", md: "50%" }}
            mx="auto"
            borderRadius={10}
            type="submit"
            loading={is_loading}
            loadingText="Submitting"
            bg={buttonBg}
            _hover={{
              bg: buttonHoverBg,
              transform: "scale(1.05)",
            }}
            color={"white"}
          >
            Request Quote
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default GetAQuoteComponent;

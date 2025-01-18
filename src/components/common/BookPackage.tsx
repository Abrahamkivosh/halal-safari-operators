"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useRef, useState } from "react";
import { useColorModeValue } from "../ui/color-mode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { handleBookPackageNotificationAction } from "@/actions/contactUs";
import { Input, SimpleGrid, Stack, Textarea } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { toaster } from "@/components/ui/toaster";

const schema = z.object({
  name: z.string().nonempty().min(3).max(255),
  email: z.string().email({ message: "Invalid email address" }).nullable(),
  phone: z.string().nonempty().min(10).max(255),
  date_of_travel: z.string().nonempty().max(255),
  number_of_aldults: z.number().int().min(0).default(0),
  number_of_children: z.number().int().min(0).default(0),
  message: z.string().nonempty().min(3).max(2055),
});

export type BookPackageFormInputs = z.infer<typeof schema>;

const BookPackage: React.FC<SafariPackageInterface> = (safari) => {
  const ref = useRef<HTMLInputElement>(null);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const headingColor = useColorModeValue("teal.600", "brand.100");
  const textColor = useColorModeValue("gray.900", "gray.100");
  const buttonBg = useColorModeValue("brand.primary", "brand.900");
  const buttonHoverBg = useColorModeValue("brand.black", "brand.primary");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BooksSafariFormInterface>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data: BooksSafariFormInterface) => {
    setLoading(true);
    const res = await handleBookPackageNotificationAction(data);

    if (res.status === 200) {
      toaster.success({
        title: "Success",
        description: res.message,
      });
    } else {
      toaster.error({
        title: "Error",
        description: res.message,
      });
    }

    setLoading(false);
  };

  return (
    <DrawerRoot
      initialFocusEl={() => ref.current}
      size={{ base: "xs", md: "md" }}
    >
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          w="full"
          bg={buttonBg}
          color="white"
          _hover={{ bg: buttonHoverBg }}
          borderRadius="full"
          fontSize="md"
          py={6}
        >
          Book Now
        </Button>
      </DrawerTrigger>
      <DrawerContent
        bg={bgColor}
        color={textColor}
        borderRadius="xl"
        p={6}
        w="100%"
      >
        <DrawerHeader>
          <DrawerTitle>
            Book <span style={{ color: headingColor }}>{safari.title}</span>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Stack
            gap={4}
            as={"form"}
            onSubmit={handleSubmit(onSubmit)}
            w="100%"
            id="book-package-form"
          >
            <Field label="Full Name" required>
              <Input
                type="text"
                {...register("name")}
                className="custom-input"
                autoComplete="name"
                autoFocus
              />
            </Field>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Field label="Email">
                <Input
                  type="email"
                  {...register("email")}
                  className="custom-input"
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone" required>
                <Input
                  type="tel"
                  {...register("phone")}
                  className="custom-input"
                  autoComplete="tel"
                />
              </Field>
            </SimpleGrid>
            <Field label="Date of Travel" required>
              <Input
                type="date"
                {...register("date_of_travel")}
                className="custom-input"
              />
            </Field>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Field label="Number of Adults" required>
                <Input
                  type="number"
                  {...register("number_of_aldults", { valueAsNumber: true })}
                  className="custom-input"
                  defaultValue={0}
                />
              </Field>
              <Field label="Number of Children" required>
                <Input
                  type="number"
                  {...register("number_of_children", { valueAsNumber: true })}
                  className="custom-input"
                  defaultValue={0}
                />
              </Field>
            </SimpleGrid>
            <Field label="Message" required>
              <Textarea {...register("message")} className="custom-input" />
            </Field>

            <Button
              type="submit"
              loading={loading}
              loadingText="Submitting"
              w="full"
              borderRadius="full"
              color={"white"}
              bg={buttonBg}
              _hover={{ bg: buttonHoverBg }}
            >
              Submit
            </Button>
          </Stack>
        </DrawerBody>

        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default BookPackage;

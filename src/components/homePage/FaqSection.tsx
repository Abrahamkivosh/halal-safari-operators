"use client";
import React from "react";
import {
  Box,
  Heading,
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  Stack,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useState } from "react";
import { marginX } from "@/utilities/constants";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of services, including personalized tours, travel planning, and adventure packages tailored to your preferences.",
  },
  {
    question: "How can I book a tour?",
    answer:
      "You can book a tour directly through our website or by contacting our customer support team. We’re here to assist you every step of the way.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer discounts for group bookings. Please reach out to us for more details and specific pricing.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy allows for refunds or rescheduling based on the notice period provided. Check our terms for detailed information.",
  },
  {
    question: "Are your tours safe?",
    answer:
      "Absolutely! Safety is our top priority. We ensure all tours are conducted with the highest safety standards in mind.",
  },
];

const FaqSection = () => {
  const [value, setValue] = useState(["second-item"]);

  return (
    <Box
      py={{ base: "1rem", md: "1rem" }}
      px={{ base: "1rem", md: "4rem" }}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Stack gap={{ base: "1rem", md: "1rem" }} mx={marginX} textAlign="center">
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl" }}
          textAlign="center"
          color={useColorModeValue("gray.700", "white")}
          mb={{ base: "1rem", md: "1rem" }}
          textDecoration={"underline"}
          textDecorationColor={useColorModeValue("brand.500", "brand.300")}
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </Heading>
        <AccordionRoot
          value={value}
          onValueChange={(e) => setValue(e.value)}
          padding={0}
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={faq.question}
              border="none"
              borderRadius="md"
              mb="0.5rem"
              bg={useColorModeValue("white", "gray.700")}
              padding={0}
              boxShadow="md"
              _hover={{
                boxShadow: "lg",
              }}
              data-aos="fade-up"
            >
              <AccordionItemTrigger
                _focus={{ boxShadow: "outline" }}
                _hover={{
                  bg: useColorModeValue("gray.100", "gray.600"),
                }}
                px="1.5rem"
                py="1rem"
                fontWeight="bold"
                fontSize="lg"
                color={useColorModeValue("gray.700", "white")}
                bg={useColorModeValue("gray.200", "gray.600")}
              >
                {faq.question}
              </AccordionItemTrigger>
              <AccordionItemContent
                py="1rem"
                px="1.5rem"
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize="md"
                textAlign={"left"}
              >
                {faq.answer}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Stack>
    </Box>
  );
};

export default FaqSection;

"use client";
import { Box, Grid, Heading, List, Table, Tabs, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";

//
const SafariDetails = (safariPackage: SafariPackageInterface) => {
  return (
    <Box maxW="6xl" mx="auto">
      <Heading
        as="h1"
        fontSize={"3xl"}
        mb="8"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {safariPackage.title}
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap="8" mb="12">
        <Box>
          <Image
            src={safariPackage.images[0]}
            alt={safariPackage.title}
            width={800}
            height={450}
            style={{ borderRadius: "8px" }}
          />
        </Box>
        <Box border="1px solid" borderColor="gray.200" borderRadius="md" p="4">
          <Heading as="h3" size="md" mb="4">
            Quick Info
          </Heading>
          <Text fontSize="2xl" fontWeight="bold" mb="2">
            {safariPackage.price}
          </Text>
          <Text color="gray.600" mb="4">
            {safariPackage.duration}
          </Text>
          <List.Root gap="2">
            {safariPackage.highlights.slice(0, 3).map((highlight, index) => (
              <List.Item key={index} display="flex" alignItems="center">
                <IoMdCheckmark color="green.500" />

                {highlight}
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Grid>

      <Box mb="12">
        <Text color="gray.600">{safariPackage.tourDetails}</Text>
      </Box>

      <Tabs.Root variant="plain" mb="12" defaultValue="Highlights">
        <Tabs.List
          mb="4"
          defaultValue="Highlights"
          bg="bg.muted"
          rounded="lg"
          p="1"
          gap={2}
        >
          <Tabs.Trigger value="Highlights" fontWeight={600} p={2}>
            Highlights
          </Tabs.Trigger>
          <Tabs.Trigger value="Itinerary" fontWeight={600} p={2}>
            Itinerary
          </Tabs.Trigger>
          <Tabs.Trigger value="Inclusions" fontWeight={600} p={2}>
            Inclusions
          </Tabs.Trigger>
          <Tabs.Trigger value="Exclusions" fontWeight={600} p={2}>
            Exclusions
          </Tabs.Trigger>
          <Tabs.Indicator rounded={"l2"} />
        </Tabs.List>
        <Tabs.Content value="Highlights">
          <List.Root gap="2">
            {safariPackage.highlights.map((highlight, index) => (
              <List.Item key={index} display="flex" alignItems="center" gap={2}>
                <IoMdCheckmark color="green.500" />
                {highlight}
              </List.Item>
            ))}
          </List.Root>
        </Tabs.Content>
        <Tabs.Content value="Itinerary">
          {safariPackage.itinerary.map((day, index) => (
            <Box key={index} mb="4">
              <Heading as="h3" size="md">
                Day {day.day}: {day.title}
              </Heading>
              <Text color="gray.600">{day.description}</Text>
            </Box>
          ))}
        </Tabs.Content>
        <Tabs.Content value="Inclusions">
          <List.Root gap="2">
            {safariPackage.inclusions.map((item, index) => (
              <List.Item key={index} display="flex" alignItems="center" gap={2}>
                <IoMdCheckmark color="green.500" />
                {item}
              </List.Item>
            ))}
          </List.Root>
        </Tabs.Content>
        <Tabs.Content value="Exclusions">
          <List.Root gap="2">
            {safariPackage.exclusions.map((item, index) => (
              <List.Item key={index} display="flex" alignItems="center">
                <RxCross2 color="red.500" />
                {item}
              </List.Item>
            ))}
          </List.Root>
        </Tabs.Content>
      </Tabs.Root>

      <Box mb="12">
        <Heading as="h2" size="lg" mb="4">
          Prices
        </Heading>
        <Table.Root
          variant="outline"
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Season</Table.ColumnHeader>
              <Table.ColumnHeader>Price for 2 People</Table.ColumnHeader>
              <Table.ColumnHeader>Price Per Person</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>High Season</Table.Cell>
              <Table.Cell>{safariPackage.prices.highSeason.forTwo}</Table.Cell>
              <Table.Cell>
                {safariPackage.prices.highSeason.perPerson}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Mid Season</Table.Cell>
              <Table.Cell>{safariPackage.prices.midSeason.forTwo}</Table.Cell>
              <Table.Cell>
                {safariPackage.prices.midSeason.perPerson}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Low Season</Table.Cell>
              <Table.Cell>{safariPackage.prices.lowSeason.forTwo}</Table.Cell>
              <Table.Cell>
                {safariPackage.prices.lowSeason.perPerson}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb="4">
          Seasons
        </Heading>
        <List.Root gap="2">
          <List.Item>
            <Text as="strong">High Season:</Text> {safariPackage.seasons.high}
          </List.Item>
          <List.Item>
            <Text as="strong">Mid Season:</Text> {safariPackage.seasons.mid}
          </List.Item>
          <List.Item>
            <Text as="strong">Low Season:</Text> {safariPackage.seasons.low}
          </List.Item>
        </List.Root>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap="4" mt="8">
        {safariPackage.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={safariPackage.title}
            width={500}
            height={300}
            style={{ borderRadius: "8px" }}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default SafariDetails;

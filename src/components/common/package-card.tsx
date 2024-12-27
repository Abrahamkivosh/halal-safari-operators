"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Check, X, Clock, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

export function PackageCard({
  id,
  title,
  description,
  price,
  duration,
  highlights,
  schedule,
  inclusions,
  exclusions,
  images,
}: SafariPackageInterface) {
  const router = useRouter();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Carousel
          className="w-full"
          opts={{
            loop: true, // Ensure the carousel loops for seamless autoplay
          }}
          plugins={[Autoplay({ delay: 3000 })]} // Autoplay with a 3-second delay
        >
          <CarouselContent
            className="relative"
            style={{ scrollBehavior: "smooth" }}
          >
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Box className="relative aspect-[16/9]">
                  <Image
                    src={image}
                    alt={`Safari image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </Box>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardHeader>
      <CardContent className="p-8">
        <CardTitle className="mb-2">{title}</CardTitle>
        <Text
          className="text-muted-foreground mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <HStack className="flex justify-between items-center mb-8">
          <Text className="text-xl font-bold">{price}</Text>
          <Text className="text-sm text-muted-foreground">{duration}</Text>
        </HStack>

        <HStack className="py-4">
          <Tabs defaultValue="highlights" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
              <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
            </TabsList>
            <TabsContent value="highlights" className="pt-4">
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="schedule" className="pt-4">
              <ul className="space-y-3">
                {schedule.map((time, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="inclusions" className="pt-4">
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="exclusions" className="pt-4">
              <ul className="space-y-3">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </HStack>

        <VStack className="mt-8 space-y-4">
          <Button className="w-full">Book Now</Button>
          <Link className="w-full" href={`/kenya-safaris/${id}`} passHref>
            <Button variant="outline" className="w-full">
              <Info className="mr-2 h-4 w-4" />
              View more details
            </Button>
          </Link>
        </VStack>
      </CardContent>
    </Card>
  );
}

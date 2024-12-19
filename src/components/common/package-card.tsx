'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Check, X, Clock, Info } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from 'next/navigation'

interface PackageCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  highlights: string[];
  schedule: string[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
}

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
  images
}: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image}
                    alt={`Safari image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardHeader>
      <CardContent className="p-8">
        <CardTitle className="mb-2">{title}</CardTitle>
        <div className="h-2" />
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex justify-between items-center mb-8">
          <p className="text-xl font-bold">{price}</p>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        
        <div className="py-4">
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
        </div>

        <div className="mt-8 space-y-4">
          <Button className="w-full" >Book Now</Button>
          <Button variant="outline" className="w-full" onClick={() => router.push(`/kenya-safaris/${title.toLowerCase().replace(/\s+/g, '-')}`)}>
            <Info className="mr-2 h-4 w-4" />
            View more details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}


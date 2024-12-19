import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, X, Clock } from 'lucide-react'
import { getPackageBySlug } from '@/utilities/constants'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const safariPackage = getPackageBySlug(params.slug)
  if (!safariPackage) {
    return {
      title: 'Package Not Found',
    }
  }
  return {
    title: `${safariPackage.title} | Tanzania Safaris`,
    description: safariPackage.description,
  }
}

export default function PackageDetails({ params }: { params: { slug: string } }) {
  const safariPackage = getPackageBySlug(params.slug)

  if (!safariPackage) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{safariPackage.title}</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image
              src={safariPackage.images[0]}
              alt={safariPackage.title}
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-2">{safariPackage.price}</p>
              <p className="text-muted-foreground mb-4">{safariPackage.duration}</p>
              <ul className="space-y-2">
                {safariPackage.highlights.slice(0, 3).map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tour Details</h2>
          <p className="text-muted-foreground">{safariPackage.tourDetails}</p>
        </div>

        <Tabs defaultValue="highlights" className="mb-12">
          <TabsList>
            <TabsTrigger value="highlights">Highlights</TabsTrigger>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
            <TabsTrigger value="exclusions">Exclusions</TabsTrigger>
          </TabsList>
          <TabsContent value="highlights">
            <ul className="space-y-2">
              {safariPackage.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="itinerary">
            {safariPackage.itinerary.map((day, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">Day {day.day}: {day.title}</h3>
                <p className="text-muted-foreground">{day.description}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="inclusions">
            <ul className="space-y-2">
              {safariPackage.inclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="exclusions">
            <ul className="space-y-2">
              {safariPackage.exclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <X className="h-5 w-5 text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Prices</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Season</th>
                <th className="border p-2">Price for 2 People</th>
                <th className="border p-2">Price Per Person</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">High Season</td>
                <td className="border p-2">{safariPackage.prices.highSeason.forTwo}</td>
                <td className="border p-2">{safariPackage.prices.highSeason.perPerson}</td>
              </tr>
              <tr>
                <td className="border p-2">Mid Season</td>
                <td className="border p-2">{safariPackage.prices.midSeason.forTwo}</td>
                <td className="border p-2">{safariPackage.prices.midSeason.perPerson}</td>
              </tr>
              <tr>
                <td className="border p-2">Low Season</td>
                <td className="border p-2">{safariPackage.prices.lowSeason.forTwo}</td>
                <td className="border p-2">{safariPackage.prices.lowSeason.perPerson}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Seasons</h2>
          <ul className="space-y-2">
            <li><strong>High Season:</strong> {safariPackage.seasons.high}</li>
            <li><strong>Mid Season:</strong> {safariPackage.seasons.mid}</li>
            <li><strong>Low Season:</strong> {safariPackage.seasons.low}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}


import { Metadata } from 'next'
import Image from 'next/image'
import { PackageCard } from './components/package-card'

export const metadata: Metadata = {
  title: 'Kenya Safaris By Road | Bronze & Silver Packages',
  description: 'Experience the stunning savannahs and spectacular sunsets of Kenya with our road safaris. Get up close to nature and witness lions, elephants, giraffes, leopards, and more.',
}

export default function KenyaSafaris() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/safari-hero.jpg"
          alt="Lions in the savannah"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            KENYA SAFARIS BY ROAD
          </h1>
          <p className="text-xl md:text-2xl">BRONZE & SILVER</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            SAFARIS BY ROAD
          </h2>
          <p className="text-lg text-muted-foreground">
            Enabled by our 4 x 4 Jeeps and vans to take you through the rough terrains for your safari or vacation; Get up close to nature and experience the stunning savannahs and spectacular sunsets filled with lions, elephants, giraffes, leopards, wildebeests, and much more wildlife.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Safari Packages</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PackageCard
            id="1"
              title="7 Days Masai Mara  Amboseli Safari"
              description="Experience the magic of Kenya's most iconic national parks with our comprehensive 7-day safari package."
              price="From $3,100 per person"
              duration="7 Days / 6 Nights"
              highlights={[
                "Daily game drives in 4x4 vehicles",
                "Witness the Great Migration (seasonal)",
                "View of Mt. Kilimanjaro from Amboseli",
                "Luxury lodge accommodation",
                "Professional English/Spanish speaking guide"
              ]}
              schedule={[
                "5:30 AM - Wake up call",
                "6:00 AM - Morning game drive",
                "12:00 PM - Lunch at camp/lodge",
                "3:30 PM - Afternoon game drive",
                "7:00 PM - Dinner and evening relaxation"
              ]}
              inclusions={[
                "All park entrance fees",
                "Full board accommodation",
                "Airport transfers",
                "Professional driver-guide",
                "Bottled water during game drives"
              ]}
              exclusions={[
                "International flights",
                "Visa fees",
                "Travel insurance",
                "Personal expenses",
                "Tips and gratuities"
              ]}
              images={[
                "/safari-1.jpg",
                "/safari-2.jpg",
                "/safari-3.jpg"
              ]}
            />

            <PackageCard
            id="2"
              title="10 Days Ultimate Kenya Safari"
              description="A comprehensive journey through Kenya's finest wildlife destinations including Masai Mara, Amboseli, and Tsavo."
              price="From $4,000 per person"
              duration="10 Days / 9 Nights"
              highlights={[
                "Big Five viewing opportunities",
                "Visit to Nairobi National Park",
                "David Sheldrick Elephant Orphanage visit",
                "Luxury tented camps experience",
                "Cultural visit to Maasai village"
              ]}
              schedule={[
                "5:00 AM - Early morning game drive",
                "11:00 AM - Brunch at camp",
                "1:00 PM - Relaxation/Optional activities",
                "3:30 PM - Evening game drive",
                "7:30 PM - Dinner under the stars"
              ]}
              inclusions={[
                "Nairobi National Park entrance fee",
                "David Sheldrick Elephant Orphanage visit",
                "All park and reserve entrance fees",
                "Full board accommodation",
                "English or Spanish speaking driver-guide"
              ]}
              exclusions={[
                "Lunch on day 1 and last day",
                "Optional activities",
                "Alcoholic beverages",
                "Laundry services",
                "International/domestic flights"
              ]}
              images={[
                "/safari-4.jpg",
                "/safari-5.jpg",
                "/safari-6.jpg"
              ]}
            />

            <PackageCard
            id="3"
              title="5 Days Express Safari"
              description="Perfect for those short on time but seeking an authentic Kenyan safari experience."
              price="From $2,500 per person"
              duration="5 Days / 4 Nights"
              highlights={[
                "Visit to Masai Mara National Reserve",
                "Chance to see the Big Five",
                "Comfortable lodge accommodation",
                "Expert guides and trackers",
                "Scenic flight options available"
              ]}
              schedule={[
                "6:00 AM - Sunrise game drive",
                "11:00 AM - Brunch at lodge",
                "2:00 PM - Afternoon wildlife viewing",
                "6:00 PM - Sundowner experience",
                "8:00 PM - Dinner and stargazing"
              ]}
              inclusions={[
                "All game drives in 4x4 vehicle",
                "Park entrance fees",
                "Full board accommodation",
                "Airport/hotel pickup and drop-off",
                "Flying doctors emergency evacuation cover"
              ]}
              exclusions={[
                "Visa fees (if applicable)",
                "Travel insurance",
                "Balloon safari (optional extra)",
                "Souvenirs and curios",
                "Tips for driver-guide and camp staff"
              ]}
              images={[
                "/safari-7.jpg",
                "/safari-8.jpg",
                "/safari-9.jpg"
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  )
}


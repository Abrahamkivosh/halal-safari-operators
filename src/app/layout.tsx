import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import NavbarIndex from "@/components/common/navbar";
import FooterIndex from "@/components/common/footer";
// import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Halal Safari operators",
  description:
    "Halal Safari operators, the best safari tours in Africa and the Middle East",
  keywords: "safari, tours, africa, middle east, halal, muslim, travel",
  authors: [{ name: "Abraham kivosh" }],
  creator: "Abraham kivosh",
  applicationName: "Halal Safari operators",
  referrer: "origin",
  robots: "follow, index",
  themeColor: "#000000",
  colorScheme: "light dark",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#000000",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
    },
  ],
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  openGraph: {
    determiner: "auto",
    title: "Halal Safari operators",
    description:
      "Halal Safari operators, the best safari tours in Africa and the Middle East",
    emails: ["info@halalsafarioperators.com"],
    phoneNumbers: ["+254 712 345 678"],
    siteName: "Halal Safari operators",
    locale: "en_US",
    alternateLocale: ["en_GB"],
    images: [
      {
        url: "/og-image.jpg",
        alt: "Halal Safari operators",
      },
    ],
    // audio: [
    //   {
    //     url: "/audio.mp3",
    //     type: "audio/mpeg",
    //   },
    // ],
    // videos: [
    //   {
    //     url: "/video.mp4",
    //     type: "video/mp4",
    //   },
    // ],
    url: "https://halalsafarioperators.com",
    countryName: "Kenya",
    ttl: 60,
  },
  twitter: {
    card: "summary",
    site: "@safarioperators",
    creator: "@safarioperators",
  },
  facebook: {
    appId: "123456789",
  },
  verification: {
    google: "123456789",
    yandex: "123456789",
  },
  appleWebApp: {
    title: "Halal Safari operators",
    statusBarStyle: "black",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
    url: true,
  },
  abstract: "Halal Safari operators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* <NextTopLoader /> */}
        <Provider>
          <NavbarIndex />
          {children}
          <FooterIndex />
        </Provider>
      </body>
    </html>
  );
}

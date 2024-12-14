import { Metadata } from "next";

export const layoutMetadata: Metadata = {
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
      url: "/favicon/favicon.ico",
      type: "image/x-icon",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
    {
      rel: "mask-icon",
      url: "/favicon/favicon-32x32.png",
      color: "#000000",
      sizes: "32x32",
    },
    {
      rel: "shortcut icon",
      url: "/favicon/favicon.ico",
    },
  ],
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

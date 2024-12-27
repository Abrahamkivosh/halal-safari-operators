import type { Metadata, Viewport } from "next";
// import localFont from "next/font/local";
import "./globals.scss";
import { Provider } from "@/components/ui/provider";
import NavbarIndex from "@/components/common/navbar";
import FooterIndex from "@/components/common/footer";
import { layoutMetadata } from "@/utilities/constants/MetaData";
import WhatsAppComponent from "@/components/common/WhatsApp/WhatsAppComponent";
import NextTopLoader from "nextjs-toploader";
import AOSAnimate from "@/components/common/AOSAnimate";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = layoutMetadata;

export const viewport: Viewport = {
  themeColor: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader color="#008000" shadow={"true"} />
        <Provider>
          <NavbarIndex />
          <AOSAnimate />
          {children}
          <FooterIndex />
          <WhatsAppComponent />
        </Provider>
      </body>
    </html>
  );
}

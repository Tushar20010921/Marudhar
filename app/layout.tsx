import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: {
    default: "Marudhar Handicrafts — Premium Luxury Bags",
    template: "%s | Marudhar Handicrafts"
  },
  description:
    "Premium handcrafted luxury bags from Rajasthan. Export-ready artisan collections for global buyers in UK, USA, Gulf and beyond.",
  keywords: [
    "luxury bags",
    "handcrafted bags",
    "Indian handicrafts export",
    "Rajasthan leather bags",
    "zardozi embroidery bags",
    "B2B export bags",
    "artisan bags wholesale"
  ],
  openGraph: {
    title: "Marudhar Handicrafts — Premium Luxury Bags",
    description:
      "Handcrafted luxury bags from master artisans in Rajasthan. Available for global export and B2B wholesale.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts loaded via CSS @import as fallback-safe */}
      </head>
      <body>
        <SmoothScrollProvider />
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



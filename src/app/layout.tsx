import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse Memecoin — Fun Landing with Easy Buy Steps",
  description: "MemePulse is the playful memecoin landing with simple buy steps, clear tokenomics, and a community-first vibe. Explore, learn, and join the fun.",
  keywords: ["memecoin","meme","crypto","buy memecoin","tokenomics","community","fun","playful","landing","crypto-education","memeproject"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "MemePulse",
    title: "MemePulse Memecoin — Fun Landing with Easy Buy Steps",
    description: "MemePulse is the playful memecoin landing with simple buy steps, clear tokenomics, and a community-first vibe. Explore, learn, and join the fun.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759830511877-87b70305.jpg", width: 1200, height: 630, alt: "MemePulse logo with neon meme vibe on a vibrant gradient background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse Memecoin — Fun Landing with Easy Buy Steps",
    description: "MemePulse is the playful memecoin landing with simple buy steps, clear tokenomics, and a community-first vibe. Explore, learn, and join the fun.",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759830511877-87b70305.jpg" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
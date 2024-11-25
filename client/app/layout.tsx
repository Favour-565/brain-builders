import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";


const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
  title: "Brain Builders | Welcome",
  description: "Description goes here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background-color)] text-[var(--text-color)]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

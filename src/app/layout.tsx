// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "../components/ui/custom-cursor";

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
const worksans = localFont({
  src: "./fonts/WorkSans-VariableFont_wght.ttf",
  variable: "--font-worksans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lokesh Developer",
  description: "My personal portfolio website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${worksans.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

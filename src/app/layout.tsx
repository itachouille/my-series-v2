import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import React from "react";
import { ThemeProvider, ToggleProvider } from "@/context";
import { Gruppo } from "next/font/google";

const gruppo = Gruppo({
  subsets: ["latin"],
  variable: "--gruppo-font",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Series V2",
  description: "My Series V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gruppo.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToggleProvider>
            <Navbar />
            {children}
            <Toaster />
          </ToggleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

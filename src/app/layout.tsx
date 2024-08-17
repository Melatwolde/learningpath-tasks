"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { metadata } from "./metadata"; // Import metadata if needed

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
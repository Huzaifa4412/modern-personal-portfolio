import type { Metadata } from "next";
import "./globals.css";

import { gilroy } from "../font";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { SmoothScroll } from "@/app/SmoothScroll";

export const metadata: Metadata = {
  title: "Huzaifa | Portfolio",
  description:
    "This is a modern animated portfolio website. created with love by Huzaifa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body suppressHydrationWarning className={`antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

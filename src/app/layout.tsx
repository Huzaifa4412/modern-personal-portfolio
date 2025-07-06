import type { Metadata } from "next";
import "./globals.css";

import { gilroy } from "../font";

import "locomotive-scroll/dist/locomotive-scroll.css";
import { SmoothScroll } from "@/app/SmoothScroll";
import StyledComponentsRegistry from "@/lib/registry";
import CursorProvider from "./CursorProvider";
import ChatBot from "@/components/ChatBot";

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
    <html lang="en" className={gilroy.variable} suppressHydrationWarning>
      <body suppressHydrationWarning className={`antialiased`}>
        <CursorProvider>
          <SmoothScroll>
            <ChatBot />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}

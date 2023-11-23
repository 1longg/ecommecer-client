import React from "react";
import "./globals.css";
import { AppWrapper } from "@/utils/context";
import Providers from "@/utils/provider";
import { Toaster } from "react-hot-toast";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Providers>
          <AppWrapper>{children}</AppWrapper>
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}

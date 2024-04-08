import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "@/styles/globals.scss";
import Providers from "@/providers";
import { ReactElement } from "react";
import { cn } from "@/lib/utils";
import EllipseBackground from "@/components/Backgrounds/EllipseBackground";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative min-h-[200vh] bg-background font-sans antialiased",
          GeistSans.className,
          GeistMono.className,
        )}
      >
        <aside className={`fixed -right-10 -top-10 opacity-90`}>
          <EllipseBackground />
        </aside>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

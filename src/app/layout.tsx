import type { Metadata } from "next";

import "@/styles/globals.scss";
import Providers from "@/providers";
import { ReactElement } from "react";

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
      <body className={`relative bg-primary font-sans antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

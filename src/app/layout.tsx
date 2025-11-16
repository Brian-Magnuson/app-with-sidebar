import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: "400"
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "500"
});

export const metadata: Metadata = {
  title: "My App",
  description: "A Next.js app with a sidebar layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${dmMono.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

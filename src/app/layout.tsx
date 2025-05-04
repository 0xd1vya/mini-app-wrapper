import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FarcasterWrapper from "./components/FarcasterWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini App Wrapper",
  description: "A Farcaster Mini App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content='{"version":"next","imageUrl":"https://your-domain.com/opengraph-image.png","button":{"title":"🚀 Start","action":{"type":"launch_frame","name":"Mini App Wrapper","url":"https://your-domain.com"}}}' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FarcasterWrapper>
          {children}
        </FarcasterWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shape voice",
  description: "그림을 그려 사람들과 소통해요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

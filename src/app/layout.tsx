import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-openSans", 
});

export const metadata: Metadata = {
  title: "Kino - Avancerad Fullstack",
  description: "Biografprojekt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

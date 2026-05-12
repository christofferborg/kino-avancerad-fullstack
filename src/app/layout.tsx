import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";


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
      <body className="min-h-screen flex flex-col antialiased text-main m-8">
        <Navbar />
          <main className="flex-grow">
           {children}
         </main>
        <Footer />
      </body>
    </html>
  );
}
 
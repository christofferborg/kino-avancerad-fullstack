import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import "./globals.css";


const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans", 
});

export const metadata: Metadata = {
  title: "Kino - Exklusiv Biograf",
  description: "En exklusiv biograf där film möter finess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      suppressHydrationWarning
      className={`${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

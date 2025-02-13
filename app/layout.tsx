import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {DM_Sans} from 'next/font/google'

const dmSans = DM_Sans({
    subsets : ['latin'],
    weight : ['400', '500', '700']
}) 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.className} px-12 py-5 bg-white antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

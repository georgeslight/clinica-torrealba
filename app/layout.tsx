import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import local from "next/font/local";
import Navbar from "@/app/ui/Navbar";
import Contact from "@/app/ui/Contact";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

const didot = local({
  src: [
    {
      path: "../public/fonts/Didot.woff",
      weight: "800",
    },
  ],
  variable: "--font-didot",
});

const helvetica = local({
  src: [
    {
      path: "../public/fonts/HelveticaNeue.woff",
      weight: "800",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "Clinica Dental Torrealba",
  description: "Landing page for Clinica Torrealba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable}`}>
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}

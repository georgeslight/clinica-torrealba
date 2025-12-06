import BookingIcon from "@/app/ui/FloatingIcons";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import local from "next/font/local";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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
  title:
    "Clínica Dental Torrealba | Estética Facial, Cirugía Oral, Ortodoncia, Rehabilitación Oral, Endodoncia, y Implantología y Periodoncia",
  description:
    "Clínica Dental Torrealba en Santiago ofrece cirugía oral, ortodoncia, implantología y periodoncia, endodoncia, rehabilitación oral y medicina a estética con atención especializada y personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable}`}>
        <main>
          <Navbar />
          <Analytics />
          {children}
          <BookingIcon />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}

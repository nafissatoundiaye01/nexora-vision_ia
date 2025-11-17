import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AntiCaptureProvider from "@/components/AntiCaptureProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXORA Vision IA - Digitalisation des Infractions Routières au Sénégal",
  description: "Système intelligent de détection et gestion des infractions routières au Sénégal. Solution basée sur l'IA pour automatiser la sécurité routière.",
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntiCaptureProvider>
          {children}
        </AntiCaptureProvider>
      </body>
    </html>
  );
}

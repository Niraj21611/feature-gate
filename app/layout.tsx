import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});


export const metadata: Metadata = {
  title: "FeatureFlow - Intelligent Feature Management",
  description:
    "Decouple release from deployment. Manage features, run experiments, and rollback instantly without touching code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-white text-slate-600 selection:bg-slate-900 selection:text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

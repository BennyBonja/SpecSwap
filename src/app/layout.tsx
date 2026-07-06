import type { Metadata } from "next";
import { Lexend, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UploadFormRoot } from "@/components/form/UploadFormRoot";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SpecSwap — Swap Specified FF&E for Smarter, Cheaper Alternatives",
  description:
    "SpecSwap swaps your specified furniture, fixtures and equipment for better-value alternatives that protect design intent — then sources, supplies and manages the whole process for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <UploadFormRoot>
          <Header />
          {children}
          <Footer />
        </UploadFormRoot>
      </body>
    </html>
  );
}

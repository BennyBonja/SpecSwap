import type { Metadata } from "next";
import { Lexend, Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TripBanner } from "@/components/layout/TripBanner";
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

const SITE_URL = "https://www.specswap.com.au";
const SITE_TITLE =
  "SpecSwap — Factory-Direct Procurement for Australian Commercial Builders";
const SITE_DESCRIPTION =
  "SpecSwap sources commercial fitout packages direct from Chinese factories for Australian builders — sourcing, samples, QC and freight, managed end-to-end. First package review free.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "SpecSwap",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
          <TripBanner />
          <Header />
          {children}
          <Footer />
        </UploadFormRoot>
      </body>
    </html>
  );
}

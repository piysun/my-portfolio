import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

import { Inter, Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const caveat = Caveat({ subsets: ["latin"], variable: '--font-caveat' });

export const metadata: Metadata = {
  metadataBase: new URL("https://peeyush.nanhe.com"), // Update to your actual domain
  title: {
    default: "Peeyush Nanhe — Portfolio",
    template: "%s | Peeyush Nanhe",
  },
  description: "Peeyush Nanhe — Web Developer & Designer. Portfolio showcasing projects, skills and contact.",
  keywords: [
    "Peeyush Nanhe",
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "AI Engineer",
    "Generative AI",
    "RAG",
    "Retrieval-Augmented Generation",
    "LangChain",
    "Enterprise AI",
  ],
  authors: [{ name: "Peeyush Nanhe", url: "https://peeyush.nanhe.com" }],
  creator: "Peeyush Nanhe",
  publisher: "Peeyush Nanhe",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Peeyush Nanhe — Portfolio",
    description: "Peeyush Nanhe — Web Developer & Designer. Portfolio showcasing projects, skills and contact.",
    url: "https://peeyush.nanhe.com", // You can update this with your actual domain
    siteName: "Peeyush Nanhe Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peeyush Nanhe — Portfolio",
    description: "Peeyush Nanhe — Web Developer & Designer. Portfolio showcasing projects, skills and contact.",
    creator: "@yourtwitterhandle", // Update if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${caveat.variable} font-sans bg-background text-foreground antialiased`}>
        <div className="aurora-bg" aria-hidden="true"></div>
        <div className="noise-overlay" aria-hidden="true"></div>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

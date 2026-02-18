import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Jawad | CEO & Founder | Full-Stack & SaaS Developer",
  description: "CEO and Founder of King Group of Technology and Founder of KingDomX. Expert Full-Stack & SaaS Developer specializing in Next.js, React, Node.js, and cloud technologies.",
  keywords: ["Muhammad Jawad", "Full-Stack Developer", "SaaS Developer", "King Group of Technology", "KingDomX", "Next.js", "React", "Node.js"],
  authors: [{ name: "Muhammad Jawad" }],
  openGraph: {
    title: "Muhammad Jawad | CEO & Founder | Full-Stack & SaaS Developer",
    description: "CEO and Founder of King Group of Technology and Founder of KingDomX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}

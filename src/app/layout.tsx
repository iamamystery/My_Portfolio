import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Jawad | Automation & Full-Stack Systems for Business Growth",
  description: "I build systems that turn traffic into revenue. Funnel development, automation systems, and full-stack web apps that scale your business without scaling your workload.",
  keywords: ["Muhammad Jawad", "Funnel Developer", "Automation Expert", "Full-Stack Developer", "Business Systems", "GoHighLevel", "Next.js", "Revenue Growth"],
  authors: [{ name: "Muhammad Jawad" }],
  openGraph: {
    title: "Muhammad Jawad | Systems That Turn Traffic Into Revenue",
    description: "Automation, lead generation, and full-stack solutions that scale your business without scaling your workload.",
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
        {/* Luxury Background */}
        <div className="luxury-bg"></div>
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}

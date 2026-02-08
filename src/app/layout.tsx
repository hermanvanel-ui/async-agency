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
  title: "a.SYNC Agency — Automatisation Intelligente & Agents IA",
  description:
    "a.SYNC Agency transforme votre présence digitale grâce à l'IA et l'automatisation avancée. Solutions d'automatisation social media, chatbots IA, workflow automation et analytics.",
  keywords: [
    "automatisation",
    "IA",
    "agents IA",
    "social media",
    "chatbot",
    "n8n",
    "automation",
    "marketing digital",
  ],
  openGraph: {
    title: "a.SYNC Agency — Automatisation Intelligente & Agents IA",
    description:
      "Transformez votre présence digitale grâce à l'IA et l'automatisation avancée.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

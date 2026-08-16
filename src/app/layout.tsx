import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Devera | AI Engineer",
  description: "Premium portfolio for Christian Devera, an AI Engineer and Machine Learning Engineer building thoughtful software and automation.",
  keywords: ["AI Engineer", "Machine Learning Engineer", "Software Engineer", "Portfolio"],
  openGraph: {
    title: "Christian Devera | AI Engineer",
    description: "Premium portfolio for Christian Devera, an AI Engineer and Machine Learning Engineer building thoughtful software and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-[#070b14] text-slate-100">{children}</body>
    </html>
  );
}

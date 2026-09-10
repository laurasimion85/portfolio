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
  title: "Laura Simion | Frontend Developer",
  description:
    "Frontend Developer with 5+ years of experience building modern, reliable, and user-friendly web applications.",
  metadataBase: new URL("https://frontend-by-laura-ten.vercel.app"),
  openGraph: {
    title: "Laura Simion | Frontend Developer",
    description:
      "Frontend Developer with 5+ years of experience building modern, reliable, and user-friendly web applications.",
    url: "https://frontend-by-laura-ten.vercel.app",
    siteName: "Laura Portfolio",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1536,
        height: 864,
        alt: "Laura Simion - Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
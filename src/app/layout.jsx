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

export const metadata = {
  title: "एक छोटीशी गोष्ट ♡",
  description: "काही गोष्टी शब्दांत नाही, तर मनात सुंदर दिसतात.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="mr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
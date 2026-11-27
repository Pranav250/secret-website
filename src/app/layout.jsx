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
  title: "राधाकृष्ण सुवर्ण महोत्सव",
  description: "राधाकृष्ण नृत्य पथकाचा ४० वा वर्धापन दिन सोहळा",
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

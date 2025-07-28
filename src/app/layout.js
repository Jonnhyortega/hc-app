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

// src/app/layout.js
export const metadata = {
  title: 'HC Gestión Comercial',
  description: "Asesoramiento para habilitaciones de industrias y comercios",
  icons: {
    icon: '/logo-2.webp',
    shortcut: '/logo-2.webp',
    apple: '/logo-2.webp'
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

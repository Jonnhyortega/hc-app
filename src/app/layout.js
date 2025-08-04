import "./globals.css";
import { Inter, IBM_Plex_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm',
  weight: ['400', '500', '700'],
  display: 'swap',
})


// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        className={`${inter.variable} ${ibm.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

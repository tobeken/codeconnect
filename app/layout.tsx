import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Noto_Sans_JP} from 'next/font/google';
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: "travel.com",
  description: "travel search app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}


import { Inter } from "next/font/google";

import "./globals.css";
//import header from page.js
import Header from "./_components/Header";
import Footer from "./_components/Footer";
// import Character from './main/characterRandom/page'
import Characters from "./_components/characters";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GOT API",
  description: "Game of Thrones by Sky Blue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

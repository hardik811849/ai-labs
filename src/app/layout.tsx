import type { Metadata } from "next";
import { Sarpanch } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sarpanch = Sarpanch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ai Labs | Powered By GFuture tech Pvt. Ltd.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sarpanch.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

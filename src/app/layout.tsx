import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "keyvault",
  description: "Blockchain-based password manager",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-dark-blue">
      <body
        className={`${inter.className} text-white min-h-screen w-1/2 mx-auto relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

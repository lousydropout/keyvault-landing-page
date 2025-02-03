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
        className={`${inter.className} text-white min-h-screen w-5/6 sm:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto relative`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

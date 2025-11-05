import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "keyvault",
  description: "Blockchain-based password manager",
  themeColor: "#0A0C13",
  colorScheme: "dark",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-dark-blue gradient-mesh" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-dark-blue text-white min-h-screen w-full`}
        style={{ backgroundColor: '#0A0C13', color: 'white' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

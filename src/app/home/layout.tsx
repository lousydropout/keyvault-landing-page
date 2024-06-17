import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Headers from "@/components/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" bg-dark-blue">
      <body
        className={`${inter.className} text-white min-h-screen w-1/2 mx-auto relative`} //   bg-cubes bg-no-repeat bg-right-top
      >
        {/* <img className="absolute top-0 right-0 -z-40" src="/cube.png" /> */}
        <Headers />
        {children}
      </body>
    </html>
  );
}

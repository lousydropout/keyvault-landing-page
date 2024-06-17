"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Headers() {
  const pathname = usePathname();

  const links = [
    { href: "/docs", name: "Documentation" },
    { href: "/pricing", name: "Pricing" },
    { href: "/about", name: "About" },
  ];

  return (
    <div className="flex flex-wrap gap-8 py-4 justify-between items-center">
      <div className="flex">
        <Link className="text-3xl text-primary" href="/">
          keyvault
        </Link>
        <p className=" italic text-accent">beta</p>
      </div>
      <nav className="flex gap-2 sm:gap-4 md:gap-8 text-xl">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx({
                "text-accent underline": pathname === link.href,
              })}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

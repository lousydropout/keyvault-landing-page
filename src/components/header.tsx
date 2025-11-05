"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/docs", name: "Documentation" },
    { href: "/pricing", name: "Pricing" },
    { href: "/about", name: "About" },
    { href: "/faq", name: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark-blue/80 backdrop-blur-sm border-b border-gray-800 mb-8">
      <div className="flex flex-wrap gap-8 py-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
            href="/"
          >
            keyvault
          </Link>
          <span className="text-xs italic text-accent bg-accent/10 px-2 py-1 rounded">
            beta
          </span>
        </div>
        <nav className="hidden md:flex gap-2 sm:gap-4 md:gap-8 text-lg">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "hover:text-accent transition-colors duration-200",
                  {
                    "text-accent underline": pathname === link.href,
                    "text-gray-300": pathname !== link.href,
                  }
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <button
          className="md:hidden text-gray-300 hover:text-accent transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col gap-4 pb-4 border-t border-gray-800 pt-4">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "hover:text-accent transition-colors duration-200 text-lg",
                  {
                    "text-accent underline": pathname === link.href,
                    "text-gray-300": pathname !== link.href,
                  }
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

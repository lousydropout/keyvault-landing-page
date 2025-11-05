// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center w-full py-8 mt-16 border-t border-gray-800 gap-4">
      <p className="text-sm text-gray-400">
        © 2025 keyvault. All rights reserved.
      </p>
      <Link
        href="/terms"
        className="text-sm text-accent hover:text-primary font-medium transition-colors duration-200"
      >
        Terms & Conditions
      </Link>
    </footer>
  );
};

export default Footer;

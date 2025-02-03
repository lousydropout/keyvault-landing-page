// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full pb-4 bg-transparent absolute bottom-0 gap-8">
      <p className="text-sm text-gray-600">
        © 2025 keyvault. All rights reserved.
      </p>
      <Link href="/terms" className="text-sm text-purple-400 font-medium">
        Terms & Conditions
      </Link>
    </footer>
  );
};

export default Footer;

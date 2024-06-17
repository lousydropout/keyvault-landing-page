import Link from "next/link";
export default function Headers() {
  return (
    <div className="flex flex-wrap gap-8 py-4 justify-between items-center">
      <div className="flex">
        <Link className="text-3xl text-primary" href="/">
          keyvault
        </Link>
        <p className=" italic text-accent">beta</p>
      </div>
      <nav className="flex gap-2 sm:gap-4 md:gap-8 text-xl">
        <Link className="hidden md:inline-block" href="/docs">
          Documentation
        </Link>
        <Link className="md:hidden" href="/docs">
          Docs
        </Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-[60vh] text-center max-w-2xl mx-auto px-4">
        <h1 className="text-6xl sm:text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-6 text-gray-300">
          Page Not Found
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}

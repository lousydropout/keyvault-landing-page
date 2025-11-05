import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

export default function Card({
  icon,
  title,
  text,
  buttonText,
  buttonLink,
}: CardProps) {
  return (
    <div className="bg-card shadow-lg rounded-xl w-full max-w-sm p-8 flex flex-col items-center justify-around gap-8 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 border border-gray-800 hover:border-primary/30">
      {icon}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center text-accent tracking-wider">
          {title}
        </h2>
        <p className="text-slate-300 text-center text-lg">{text}</p>
      </div>
      <Link href={buttonLink}>
        <Button className="text-xl" size={"lg"}>
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}

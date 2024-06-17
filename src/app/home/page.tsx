import Card from "@/components/card";
import Cube from "@/components/icons/cube";
import Key from "@/components/icons/key";
import Shield from "@/components/icons/shield";

export default function Home() {
  return (
    <>
      <div className="sm:h-[300px] lg:h-[500px] mt-12 sm:mt-32">
        <p className="text-3xl lg:text-6xl leading-normal lg:leading-normal text-center">
          The only <span className=" font-bold">&nbsp;blockchain-based</span>{" "}
          <span className="text-primary">password&nbsp;manager</span> is now
          available for
          <span className="text-accent italic">beta</span> testing!
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-4 mt-8">
        <Card
          icon={<Cube className="size-20 stroke-primary" />}
          title="Blockchain"
          text="All your passwords are backed by the security of blockchain."
          buttonText="See docs"
          buttonLink="/docs"
        />
        <Card
          icon={<Key className="size-20 stroke-primary" />}
          title="No Middleman"
          text="You hold the only copy of your encryption key."
          buttonText="See docs"
          buttonLink="/docs"
        />
        <Card
          icon={<Shield className="size-20 stroke-primary" />}
          title="Security"
          text="All passwords are encrypted using military-grade 256-bit AES-GCM encryption scheme."
          buttonText="See docs"
          buttonLink="/docs"
        />
      </div>
    </>
  );
}

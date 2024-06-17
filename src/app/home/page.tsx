import Card from "@/components/card";
import Cube from "@/components/icons/cube";
import Key from "@/components/icons/key";
import Shield from "@/components/icons/shield";

export default function Home() {
  return (
    <>
      <div className="sm:h-[500px] mt-24 sm:mt-32">
        <p className="text-3xl lg:text-6xl leading-normal lg:leading-normal text-center">
          The first <span className=" font-bold">&nbsp;blockchain-based</span>{" "}
          <span className="text-primary">password&nbsp;manager</span> is{" "}
          <span className="text-accent italic">finally</span> here!
        </p>
        <p className="text-xl lg:text-4xl leading-normal lg:leading-normal text-center mt-8">
          <span className="text-accent italic">beta</span> testing now
          available.
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-4 mt-24">
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

import Card from "@/components/card";
import Cube from "@/components/icons/cube";
import Key from "@/components/icons/key";
import Shield from "@/components/icons/shield";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-full pt-12 pb-48 sm:mt-32 text-center">
        <p className="text-3xl lg:text-6xl leading-normal lg:leading-normal">
          The first and only
          <span className="font-bold">&nbsp;blockchain-based</span>
          <span className="text-primary"> password manager</span>!
        </p>
        <p className="text-lg lg:text-2xl mt-6 text-gray-300">
          Securely manage your credentials with decentralized storage,
          end-to-end encryption, and no third-party risks.
        </p>
        <div className="mt-8">
          <Link
            rel="nofollow"
            target="_blank"
            href="https://chromewebstore.google.com/detail/keyvault-password-manager/mgdcnfdccekpbegddnhalbibogjohfoo"
            className="px-6 py-3 text-lg font-semibold bg-primary text-white rounded-lg hover:bg-opacity-80"
          >
            Get Keyvault for Chrome/Brave
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-4 mt-8">
        <Card
          icon={<Cube className="size-20 stroke-primary" />}
          title="Decentralized"
          text="Your credentials are stored securely on the blockchain—no central authority, no trust issues."
          buttonText="Learn more"
          buttonLink="/docs"
        />
        <Card
          icon={<Key className="size-20 stroke-primary" />}
          title="You Own the Key"
          text="You have the only copy of your encryption key. No one else can read your credentials."
          buttonText="Read more"
          buttonLink="/docs#encryption"
        />
        <Card
          icon={<Shield className="size-20 stroke-primary" />}
          title="Military-Grade Encryption"
          text="Passwords are encrypted using 256-bit AES-GCM. Only you hold the key."
          buttonText="See how it works"
          buttonLink="/docs#encryption"
        />
      </div>
      <div className="pt-32"></div>
    </>
  );
}

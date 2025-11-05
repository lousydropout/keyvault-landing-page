import Card from "@/components/card";
import Cube from "@/components/icons/cube";
import Key from "@/components/icons/key";
import Shield from "@/components/icons/shield";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            The first and only{" "}
            <span className="text-primary">blockchain-based</span>{" "}
            password manager
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Securely manage your credentials with decentralized storage,
            end-to-end encryption, and no third-party risks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              rel="nofollow"
              target="_blank"
              href="https://chromewebstore.google.com/detail/keyvault-password-manager/mgdcnfdccekpbegddnhalbibogjohfoo"
              className="px-8 py-4 text-lg font-semibold bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-blue"
            >
              Get Keyvault for Chrome/Brave
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-6 mt-8 mb-16">
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
    </>
  );
}

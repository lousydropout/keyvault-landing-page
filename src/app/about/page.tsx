import { Keyvault } from "@/components/keyvault";
import Link from "next/link";

export default function About() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8">
        <h1 className="text-6xl mb-12 text-primary">About</h1>

        <h2 className="text-4xl mt-8 mb-4">About the project</h2>

        <p className="text-2xl leading-relaxed">
          <Keyvault /> is a{" "}
          <span className="font-semibold"> not-for-profit</span>,
          blockchain-based password manager designed to offer true ownership and
          security over your credentials. Unlike traditional password managers
          that rely on centralized servers or third-party identity providers,{" "}
          <Keyvault /> <span className="font-semibold"> removes middlemen</span>{" "}
          by leveraging blockchain technology. Your encrypted credentials are
          stored directly on the blockchain, ensuring that no single
          entity—whether a company, website administrator, or social login
          provider—has control over your data.
        </p>

        <p className="text-2xl leading-relaxed">
          <Keyvault /> was proudly developed as part of{" "}
          <span className="font-semibold">
            {" "}
            Astar&apos;s Unstoppable Community Grant program
          </span>{" "}
          and is currently deployed on the{" "}
          <span className="font-semibold"> Astar EVM Mainnet</span>. Our goal is
          to provide a{" "}
          <span className="font-semibold">
            {" "}
            decentralized and censorship-resistant
          </span>{" "}
          password management solution where users have full control, free from
          corporate oversight or reliance on a central authority.
        </p>

        <p className="text-2xl leading-relaxed">
          For more details, check out our{" "}
          <Link href="/docs" className="text-accent italic underline">
            Documentation
          </Link>
          .
        </p>

        <p className="text-2xl leading-relaxed">
          An early version of this project was submitted to the Polkadot ink!
          Hackathon in Oct/Nov 2023.
        </p>

        <p className="text-2xl leading-relaxed">
          Tina Bregović has provided an insightful write-up of the event, which
          is available on Medium under the title{" "}
          <a
            className="text-accent italic underline"
            href="https://www.blog.encode.club/polkadot-ink-hackathon-powered-by-encode-club-prizewinners-and-summary-0ee9efac42ea#a067"
          >
            Polkadot ink! Hackathon powered by Encode Club—Prizewinners and
            Summary
          </a>
          .
        </p>

        <p className="text-2xl leading-relaxed">
          Further, while the project did not place in the Astar Bounty track,
          which offered winners &ldquo;exclusive access to a mentor programme
          with Astar,&rdquo; I received invaluable encouragement from
          Astar&apos;s Sofiya Vasylyeva. Her words of encouragement and periodic
          check-ins on my progress have significantly contributed to the
          continued development of this project. Without her support, the
          journey to this point would have been much longer and more
          challenging.
        </p>

        <h2 className="text-4xl mt-8 mb-4">About the team</h2>

        <p className="text-2xl leading-relaxed">
          Thus far, this project has been a solo endeavor by me, Vincent Chan,
          who often goes by the handle lousydropout. I am a cloud developer who
          has caught the blockchain bug, graduated{" "}
          <a
            className="text-accent italic underline"
            target="_blank"
            href="https://kodadot.xyz/ahp/gallery/56-6"
          >
            Polkadot Blockchain Academy at Berkeley
          </a>
          , and has been exploring the possibilities of blockchain.
        </p>
      </main>
    </>
  );
}

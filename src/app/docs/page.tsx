import { Keyvault } from "@/components/keyvault";

export default function Documentation() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8">
        <h1 className="text-6xl mb-12 text-primary">Documentation</h1>

        <h2 className="text-4xl mt-8 text-accent">About Keyvault</h2>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> is a
          <span className="font-semibold"> not-for-profit</span>,
          blockchain-based password manager** that prioritizes security,
          decentralization, and user control. Unlike traditional password
          managers that rely on centralized servers, <Keyvault />{" "}
          <span className="font-semibold"> removes middlemen</span> by storing
          encrypted credentials directly on the blockchain.
        </p>
        <p className="text-2xl leading-relaxed">
          Currently, <Keyvault /> operates on the{" "}
          <span className="font-semibold"> Astar EVM Mainnet</span>, but future
          expansions to other blockchains are planned.
        </p>

        <h2 id="encryption" className="text-4xl mt-8 text-accent">
          Security & Encryption
        </h2>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> encrypts all credentials using{" "}
          <span className="font-semibold"> 256-bit AES-GCM</span>, a highly
          secure, quantum-resistant encryption standard. Importantly,
          <span className="font-semibold">
            {" "}
            you alone hold your encryption key
          </span>
          —
          <Keyvault /> never has access to it. This ensures total security, but
          also means that{" "}
          <span className="font-semibold">
            {" "}
            if you lose your encryption key, you will lose access to your
            credentials permanently
          </span>
          .
        </p>
        <p className="text-2xl leading-relaxed">
          256-bit AES-GCM is trusted by governments and security professionals
          worldwide. Even with quantum computing advancements, brute-forcing a
          256-bit encryption key remains infeasible.
        </p>

        <h2 className="text-4xl mt-8 text-accent">Getting Started</h2>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> is currently accessible via the{" "}
          <span className="font-semibold">
            {" "}
            Chrome and Brave desktop browsers
          </span>
          . Install the extension from the{" "}
          <a
            className="underline text-accent"
            rel="nofollow"
            target="_blank"
            href="https://chromewebstore.google.com/detail/keyvault-password-manager/mgdcnfdccekpbegddnhalbibogjohfoo"
          >
            Chrome Web Store
          </a>
          .
        </p>
        <p className="text-2xl leading-relaxed">
          The open-source code for <Keyvault /> can be found on{" "}
          <a
            className="underline text-accent"
            rel="nofollow"
            target="_blank"
            href="https://github.com/lousydropout/keyvault"
          >
            Github
          </a>
          .
        </p>

        <h2 className="text-4xl mt-8 text-accent">Key Features</h2>
        <ul className="text-2xl list-disc list-inside">
          <li>
            Decentralized and blockchain-based, ensuring no reliance on third
            parties.
          </li>
          <li>Securely encrypt and store credentials using 256-bit AES-GCM.</li>
          <li>
            Access credentials anywhere, as long as the blockchain remains
            operational.
          </li>
          <li>
            Supports <span className="font-semibold"> message encryption</span>{" "}
            using OpenPGP.js.
          </li>
          <li>
            Allows exporting credentials in an encrypted JSON format for backup
            purposes.
          </li>
        </ul>

        <h3 className="text-3xl mt-8 mb-2 underline">
          Encrypting Messages with <Keyvault />
        </h3>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> allows users to{" "}
          <span className="font-semibold">
            {" "}
            encrypt and decrypt messages securely
          </span>
          . Users can generate and publish a{" "}
          <span className="font-semibold"> public key</span> to the <Keyvault />{" "}
          smart contract. If <span className="font-semibold"> User A</span>{" "}
          wants to send a private message to{" "}
          <span className="font-semibold"> User B</span>,
          <Keyvault /> will encrypt the message in such a way that only{" "}
          <span className="font-semibold"> User B</span> can decrypt it.
        </p>

        <h3 className="text-3xl mt-8 mb-2 underline">
          Exporting & Importing Credentials
        </h3>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> allows users to export their credentials in an
          <span className="font-semibold"> encrypted JSON file</span>. This
          ensures that your credentials remain safe during transfer or backup.
        </p>
        <p className="text-2xl leading-relaxed">
          To import your credentials back into <Keyvault />, simply upload the
          encrypted JSON file, and decrypt it using your{" "}
          <span className="font-semibold"> original encryption key</span>.
        </p>

        <h2 className="text-4xl mt-8 text-accent">Video Guides</h2>
        <p className="text-2xl leading-relaxed">
          Watch these screencasts to see <Keyvault /> in action:
        </p>
        <ol className="text-2xl list-inside">
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/wciwR8Zwf6Q?feature=share"
            >
              1. Initializing the <Keyvault /> extension
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/aMRcr7iVhhc?feature=share"
            >
              2. Adding a new credential
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/ps53kBl4ph0?feature=share"
            >
              3. Syncing your credentials to the smart contract
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/KAmS5s0noT8?feature=share"
            >
              4. Importing encryption key
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/PNsj-duYgJk?feature=share"
            >
              5. Generating and publishing an encryption keypair
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/bpCeuNbTv9U?feature=share"
            >
              6. Encrypting a message that only your friend can read
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/vecmiKWDPH4?feature=share"
            >
              7. Decrypting a message
            </a>
          </li>
          <li>
            <a
              className="text-accent underline"
              href="https://youtube.com/shorts/new_video_link"
            >
              8. Exporting and importing credentials
            </a>
          </li>
        </ol>

        <h2 className="text-4xl mt-8 text-accent">Future Plans</h2>
        <p className="text-2xl leading-relaxed">
          More features are in development, including support for additional
          blockchains, expanded browser compatibility, and mobile app support.
        </p>
      </main>
    </>
  );
}

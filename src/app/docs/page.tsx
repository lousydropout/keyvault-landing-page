import { Keyvault } from "@/components/keyvault";

export default function Documentation() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl mb-12 text-primary font-bold">Documentation</h1>

        <h2 className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">About Keyvault</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          <Keyvault /> is a
          <span className="font-semibold">
            {" "}
            not-for-profit, blockchain-based password manager
          </span>{" "}
          that prioritizes security, decentralization, and user control. Unlike
          traditional password managers that rely on centralized servers,{" "}
          <Keyvault /> <span className="font-semibold">
            {" "}
            removes middlemen
          </span>{" "}
          by storing encrypted credentials directly on the blockchain.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          Currently, <Keyvault /> operates on the{" "}
          <span className="font-semibold"> Astar EVM Mainnet</span>, but future
          expansions to other blockchains are planned.
        </p>

        <h2 id="encryption" className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">
          Security & Encryption
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
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
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          256-bit AES-GCM is trusted by governments and security professionals
          worldwide. Even with quantum computing advancements, brute-forcing a
          256-bit encryption key remains infeasible.
        </p>

        <h2 className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">Getting Started</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          <Keyvault /> is currently accessible via the{" "}
          <span className="font-semibold">
            {" "}
            Chrome and Brave desktop browsers
          </span>
          . Install the extension from the{" "}
          <a
            className="underline text-accent hover:text-primary transition-colors duration-200"
            rel="nofollow"
            target="_blank"
            href="https://chromewebstore.google.com/detail/keyvault-password-manager/mgdcnfdccekpbegddnhalbibogjohfoo"
          >
            Chrome Web Store
          </a>
          .
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          The open-source code for <Keyvault /> can be found on{" "}
          <a
            className="underline text-accent hover:text-primary transition-colors duration-200"
            rel="nofollow"
            target="_blank"
            href="https://github.com/lousydropout/keyvault"
          >
            Github
          </a>
          .
        </p>

        <h2 className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">Key Features</h2>
        <ul className="text-base sm:text-lg list-disc list-inside space-y-2 text-gray-300 mb-6">
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

        <h3 className="text-2xl sm:text-3xl mt-8 mb-4 text-accent">
          Encrypting Messages with <Keyvault />
        </h3>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
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

        <h3 className="text-2xl sm:text-3xl mt-8 mb-4 text-accent">
          Exporting & Importing Credentials
        </h3>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          <Keyvault /> allows users to export their credentials in an
          <span className="font-semibold"> encrypted JSON file</span>. This
          ensures that your credentials remain safe during transfer or backup.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          To import your credentials back into <Keyvault />, simply upload the
          encrypted JSON file, and decrypt it using your{" "}
          <span className="font-semibold"> original encryption key</span>.
        </p>

        <h2 className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">Video Guides</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
          Watch these screencasts to see <Keyvault /> in action:
        </p>
        <ol className="text-base sm:text-lg list-decimal list-inside space-y-2 text-gray-300 mb-6">
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/wciwR8Zwf6Q?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Initializing the <Keyvault /> extension
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/aMRcr7iVhhc?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adding a new credential
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/ps53kBl4ph0?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syncing your credentials to the smart contract
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/KAmS5s0noT8?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Importing encryption key
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/PNsj-duYgJk?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Generating and publishing an encryption keypair
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/bpCeuNbTv9U?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Encrypting a message that only your friend can read
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/vecmiKWDPH4?feature=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              Decrypting a message
            </a>
          </li>
          <li>
            <a
              className="text-accent hover:text-primary underline transition-colors duration-200"
              href="https://youtube.com/shorts/new_video_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exporting and importing credentials
            </a>
          </li>
        </ol>

        <h2 className="text-3xl sm:text-4xl mt-8 mb-4 text-accent">Future Plans</h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
          More features are in development, including support for additional
          blockchains, expanded browser compatibility, and mobile app support.
        </p>
      </main>
    </>
  );
}

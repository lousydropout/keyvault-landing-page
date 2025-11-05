import { Keyvault } from "@/components/keyvault";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "How does blockchain storage work?",
      answer: (
        <>
          <Keyvault /> stores your encrypted credentials directly on the blockchain
          using smart contracts. When you save a credential, it&apos;s encrypted
          on your device using your encryption key, and only the encrypted data is
          sent to the blockchain. This means your credentials are decentralized and
          accessible from anywhere, as long as the blockchain remains operational.
          Unlike traditional password managers that rely on centralized servers,
          there&apos;s no single point of failure or third-party control.
        </>
      ),
    },
    {
      question: "What happens if I lose my encryption key?",
      answer: (
        <>
          If you lose your encryption key, you will permanently lose access to
          your encrypted credentials. This is by design for security purposes—since
          <Keyvault /> never has access to your encryption key, we cannot recover
          your data. It&apos;s crucial to securely backup your encryption key in a
          safe location. We recommend storing it in a secure physical location or
          using a secondary encrypted backup method.
        </>
      ),
    },
    {
      question: "Is Keyvault really free?",
      answer: (
        <>
          Yes, <Keyvault /> is completely free to use. We do not charge any fees
          for storing or managing your credentials. However, because your data is
          stored on the blockchain, you will incur gas fees required by the
          blockchain network to process transactions. These fees are determined by
          the network and are not collected by <Keyvault />. Currently on Astar
          EVM mainnet, storing one encrypted credential costs approximately $0.01
          USD.
        </>
      ),
    },
    {
      question: "How secure is 256-bit AES-GCM encryption?",
      answer: (
        <>
          256-bit AES-GCM is a military-grade encryption standard trusted by
          governments and security professionals worldwide. It&apos;s considered
          quantum-resistant, meaning even with future quantum computing
          advancements, brute-forcing a 256-bit encryption key remains infeasible.
          Combined with the fact that you alone hold the encryption key, this
          provides exceptional security for your credentials.
        </>
      ),
    },
    {
      question: "Can I use Keyvault on mobile?",
      answer: (
        <>
          Currently, <Keyvault /> is available for Chrome and Brave desktop
          browsers only. Mobile app support is planned for future releases. For
          the latest updates on mobile availability, check our{" "}
          <Link
            href="/docs"
            className="text-accent hover:text-primary underline transition-colors duration-200"
          >
            documentation
          </Link>{" "}
          or follow the project on{" "}
          <a
            href="https://github.com/lousydropout/keyvault"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary underline transition-colors duration-200"
          >
            GitHub
          </a>
          .
        </>
      ),
    },
    {
      question: "What blockchains are supported?",
      answer: (
        <>
          Currently, <Keyvault /> operates on the{" "}
          <span className="font-semibold">Astar EVM Mainnet</span>. Future
          expansions to other blockchains are planned. The goal is to provide
          users with options across multiple blockchain networks while maintaining
          the same level of security and decentralization.
        </>
      ),
    },
    {
      question: "How do I get started with Keyvault?",
      answer: (
        <>
          Getting started is easy! Install the <Keyvault /> extension from the{" "}
          <a
            href="https://chromewebstore.google.com/detail/keyvault-password-manager/mgdcnfdccekpbegddnhalbibogjohfoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-primary underline transition-colors duration-200"
          >
            Chrome Web Store
          </a>
          . After installation, you&apos;ll be prompted to create or import an
          encryption key. Once set up, you can start adding and managing your
          credentials securely. For detailed instructions, check out our{" "}
          <Link
            href="/docs"
            className="text-accent hover:text-primary underline transition-colors duration-200"
          >
            documentation
          </Link>{" "}
          and video guides.
        </>
      ),
    },
    {
      question: "Can I export my credentials?",
      answer: (
        <>
          Yes, <Keyvault /> allows you to export your credentials in an encrypted
          JSON format. This ensures your credentials remain secure during transfer
          or backup. You can import the encrypted JSON file back into{" "}
          <Keyvault /> using your original encryption key. This feature is useful
          for creating backups or migrating between devices.
        </>
      ),
    },
  ];

  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl mb-12 text-primary font-bold">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-gray-800 rounded-xl p-6 shadow-lg hover:border-primary/30 transition-colors duration-200"
            >
              <h2 className="text-xl sm:text-2xl mb-4 text-accent font-semibold">
                {faq.question}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card border border-gray-800 rounded-xl p-6 shadow-lg">
          <p className="text-base sm:text-lg text-gray-300">
            Still have questions? Check out our{" "}
            <Link
              href="/docs"
              className="text-accent hover:text-primary underline transition-colors duration-200"
            >
              documentation
            </Link>{" "}
            or visit our{" "}
            <a
              href="https://github.com/lousydropout/keyvault"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary underline transition-colors duration-200"
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}


import { Keyvault } from "@/components/keyvault";

export default function About() {
  return (
    <>
      <main className="flex flex-col my-12 gap-8">
        <h1 className="text-6xl mb-12 text-primary">About</h1>
        <h2 className="text-4xl mb-4">Introduction</h2>

        <p className="text-2xl leading-relaxed">
          To log into most sites on the internet, you either create a new
          account with username and password or utilize social login.
        </p>

        <p className="text-2xl leading-relaxed">
          In the former case, you rely on the site to keep your username and
          password safe. Prior to password managers being mainstream, users
          would end up resuing the same password across multiple sites to avoid
          having to remember multiple passwords. With your typical password
          managers, users no longer have to memorize multiple passwords, but are
          now dependent on the password managers to keep their passwords safe
          and provide continued access. In contrast, your continued access to
          encrypted passwords on <Keyvault /> cannot prevented by us or anyone
          else so long as <span className="text-primary">Astar network</span>
          {" (the network we deployed the smart contract on) "}
          remains operational.
        </p>

        <p className="text-2xl leading-relaxed">
          In the later case, you rely on the social login of choice (whether it
          be Google, Facebook, Github, or any other) to provide continued access
          and hope that they do not revoke your access one day because they've
          decided you've somehow violated their terms and conditions.
        </p>

        <p className="text-2xl leading-relaxed">
          <Keyvault /> is a blockchain-based password manager. Here, your
          passwords are encrypted and decrypted off-chain, on the frontend,
          using your encryption key. As the default encryption scheme is a
          256-bit AES-GCM, your passwords are encrypted using a
          quantum-resistant and military-grade encryption scheme (read
          explanation below).
        </p>

        <p className="text-2xl leading-relaxed">
          For a hacker to crack a 256-bit encryption, the hacker would have to
          guess around `2^255` keys on average before succeeding. To get a sense
          of how large a number `2^255` is, I recommend watching{" "}
          <a
            className="text-accent underline"
            href="https://www.youtube.com/watch?v=S9JGmA5_unY"
          >
            3Blue1Brown's YouTube video
          </a>
          .
        </p>

        <p className="text-2xl leading-relaxed">
          For symmetric encryptions such as AES, the quantum algorithm to keep
          in mind is Grover's algorithm. In the case of 256-bit AES, Grover's
          algorithm effectively reduces the 256 bits of entropy to 128 bits,
          which is still such a ridiculously large number that the U.S. military
          uses it for encrypting secret information (that fun tidbit was taken
          from{" "}
          <a
            className="underline text-accent"
            href="https://nordpass.com/blog/military-grade-encryption-explained/"
          >
            Military-grade encryption explained
          </a>
          ).
        </p>

        <p className="text-2xl leading-relaxed text-accent">
          More details coming soon...
        </p>
      </main>
    </>
  );
}

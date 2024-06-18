import { Beta } from "@/components/beta";
import { Keyvault } from "@/components/keyvault";

export default function Documentation() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8">
        <h1 className="text-6xl mb-12 text-primary">Documentation</h1>
        <h2 className="text-4xl mt-8 text-accent">Table of Contents</h2>
        <ol className="text-2xl list-decimal list-inside">
          <li className="mt-2">
            <a href="#getting-started" className="text-accent italic underline">
              Getting started
            </a>
          </li>
          <li className="mt-2">
            <a
              href="#background-information"
              className="text-accent italic underline"
            >
              Background Information
            </a>
          </li>
        </ol>
        <hr className="my-4 border-slate-600" />
        {/* Getting started */}
        <h2 id="getting-started" className="text-4xl mt-4 mb-2 text-accent">
          Getting started
        </h2>
        <p className="text-2xl leading-relaxed">
          Thank you for checking out <Keyvault /> during its <Beta /> testing
          period. We&apos;d love to hear your experience and feedback.
        </p>
        <p className="text-2xl leading-relaxed">
          The first step will be to install the keyvault Chrome extension. To do
          this, you can either download the zip file from the keyvault Github
          repo (see{" "}
          <a
            href="https://github.com/lousydropout/password-manager-extension"
            target="_blank"
          >
            keyvault Chrome Extension
          </a>
          ) or clone the repo and build the Chrome extension files yourself.
        </p>
        <p className="text-2xl leading-relaxed">
          <span className="italic">
            Note: Although more cumbersome, building the Chrome extension
            yourself allows you to go through the codebase and make sure the
            Chrome extension you&apos;re about to install does not contain any
            malicious code (in case our GitHub account gets hacked for
            instance).
          </span>
        </p>
        <h3 className="text-3xl mt-8 mb-2 underline">
          Installing using the prepared zip file
        </h3>
        <ol>
          <li className="text-2xl leading-relaxed">
            First, please download the <Keyvault /> <Beta /> release zip file
            found on the Github repo&apos;s release page:{" "}
            <a
              href="https://github.com/lousydropout/password-manager-extension/releases/tag/beta-1"
              target="_blank"
            >
              keyvault Chrome extention release page
            </a>
            .
          </li>
          <li className="text-2xl leading-relaxed">
            Next, unzip the file into a location of your choice.
          </li>
          <li className="text-2xl leading-relaxed">
            Open Chrome and navigate to the extensions page by typing
            `chrome://extensions/` in the address bar.
          </li>
          <li className="text-2xl leading-relaxed">
            Enable developer mode by clicking the toggle switch in the top right
            corner.
          </li>
          <li className="text-2xl leading-relaxed">
            Click the `Load unpacked` button and navigate to the unzipped
            folder.
          </li>
        </ol>
        <h3 className="text-3xl mt-8 mb-2 underline">
          Cloning and building the Chrome extension yourself
        </h3>
        <ol>
          <li className="text-2xl leading-relaxed">
            Clone or download{" "}
            <a
              className="text-accent underline italic"
              href="https://github.com/lousydropout/password-manager-extension"
            >
              Keyvault chrome extension repo
            </a>
          </li>
          <li className="text-2xl leading-relaxed">
            Open the terminal and navigate to the root folder of the cloned repo
            and run `pnpm install`.
          </li>
          <li className="text-2xl leading-relaxed">
            Run `pnpm build` to build the extension files.
          </li>
          <li className="text-2xl leading-relaxed">
            Open Chrome and navigate to the extensions page by typing
            `chrome://extensions/` in the address bar.
          </li>
          <li className="text-2xl leading-relaxed">
            Enable developer mode by clicking the toggle switch in the top right
            corner.
          </li>
          <li className="text-2xl leading-relaxed">
            Click the `Load unpacked` button and navigate to the `dist` folder
            (this was created via `pnpm run build`) in the root directory of the
            cloned repo.
          </li>
        </ol>
        <hr className="my-4 border-slate-600" />
        {/* Background information */}
        <h2
          id="background-information"
          className="text-4xl mt-4 my-2 text-accent"
        >
          Background information
        </h2>
        <p className="text-2xl leading-relaxed">
          To log into most sites on the internet, you either create a new
          account with username and password or utilize social login.
        </p>
        <h3 className="text-3xl mt-8 mb-2 underline">
          Memorizing passwords is hard
        </h3>
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
        <h3 className="text-3xl mt-8 mb-2 underline">
          At the mercy of social login providers for continued access
        </h3>
        <p className="text-2xl leading-relaxed">
          In the later case, you rely on the social login of choice (whether it
          be Google, Facebook, Github, or any other) to provide continued access
          and hope that they do not revoke your access one day because
          they&apos;ve decided you&apos;ve somehow violated their terms and
          conditions.
        </p>
        <h3 className="text-3xl mt-8 mb-2 underline">
          What encryption scheme does keyvault use?
        </h3>{" "}
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
            3Blue1Brown&apos;s YouTube video
          </a>
          .
        </p>
        <p className="text-2xl leading-relaxed">
          For symmetric encryptions such as AES, the quantum algorithm to keep
          in mind is Grover&apos;s algorithm. In the case of 256-bit AES,
          Grover&apos;s algorithm effectively reduces the 256 bits of entropy to
          128 bits, which is still such a ridiculously large number that the
          U.S. military uses it for encrypting secret information (that fun
          tidbit was taken from{" "}
          <a
            className="underline text-accent"
            href="https://nordpass.com/blog/military-grade-encryption-explained/"
          >
            Military-grade encryption explained
          </a>
          ).
        </p>
        <p className="text-2xl leading-relaxed text-accent mt-8">
          More details coming soon...
        </p>
      </main>
    </>
  );
}

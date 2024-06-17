import { Beta } from "@/components/beta";
import { Keyvault } from "@/components/keyvault";

export default function Documentation() {
  return (
    <>
      <main className="flex flex-col my-12 gap-8">
        <h1 className="text-6xl mb-12 text-primary">Documentation</h1>

        <h2 className="text-4xl mt-4 mb-2">Getting started</h2>

        <p className="text-2xl leading-relaxed">
          Thank you for checking out <Keyvault /> during its <Beta /> testing
          period. We'd love to hear your experience and feedback.
        </p>

        <p className="text-2xl leading-relaxed">
          The first step will be to install the keyvault Chrome extension. To do
          this, you can either download the zip file from the keyvault Github
          repo (see _____________) or clone the repo and build the Chrome
          extension files yourself.
        </p>

        <p className="text-2xl leading-relaxed">
          <span className="italic">
            Note: Although more cumbersome, building the Chrome extension
            yourself allows you to go through the codebase and make sure the
            Chrome extension you're about to install does not contain any
            malicious code (in case our GitHub account gets hacked for
            instance).
          </span>
        </p>

        <h3 className="text-3xl mt-8 mb-2 underline">
          Installing using the prepared zip file
        </h3>
        <p className="text-2xl leading-relaxed">
          First, please download the <Keyvault /> <Beta /> release zip file
          (this will contain the Chrome extension).
        </p>

        <h3 className="text-3xl mt-8 mb-2 underline">
          Cloning and building the Chrome extension yourself
        </h3>

        <p className="text-2xl leading-relaxed">
          <a
            className="text-accent underline italic"
            href="https://github.com/lousydropout/password-manager-extension"
          >
            Keyvault chrome extension repo
          </a>
        </p>

        <p className="text-2xl leading-relaxed text-accent">
          More details coming soon...
        </p>
      </main>
    </>
  );
}

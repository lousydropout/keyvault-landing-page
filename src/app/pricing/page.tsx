import { Keyvault } from "@/components/keyvault";

export default function Pricing() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl mb-12 text-primary font-bold">Pricing</h1>
        <div className="bg-card border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl mb-6 text-accent">Free to Use</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
            <Keyvault /> is completely free to use; we do not charge anything for
            storing or managing your credentials. However, because your encrypted
            credentials are stored on the <Keyvault /> smart contract, you will
            incur gas fees for storage. These fees are determined entirely by the
            blockchain network and are required to process transactions.{" "}
            <Keyvault /> does not profit from the gas fees.
          </p>
        </div>
        <div className="bg-card border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl sm:text-3xl mb-6 text-accent">Gas Fees</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-6">
            Currently, <Keyvault /> operates on the
            <span className="font-semibold italic"> Astar EVM mainnet</span>,
            where the cost of storing one encrypted credential is approximately
            <span className="font-semibold text-primary"> $0.01 USD</span> as of
            <span className="font-semibold"> February 2025</span>. Gas fees may
            vary depending on network conditions and may differ if <Keyvault />{" "}
            expands to other blockchains in the future.
          </p>
        </div>
      </main>
    </>
  );
}

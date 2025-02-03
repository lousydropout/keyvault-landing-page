import { Keyvault } from "@/components/keyvault";

export default function Pricing() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8">
        <h1 className="text-6xl text-primary">Pricing</h1>
        <p className="text-2xl leading-relaxed">
          <Keyvault /> is completely free to use; we do not charge anything for
          storing or managing your credentials. However, because your encrypted
          credentials are stored on the <Keyvault /> smart contract, you will
          incur gas fees for storage. These fees are determined entirely by the
          blockchain network and are required to process transactions.{" "}
          <Keyvault /> does not profit from the gas fees.
        </p>
        <p className="text-2xl leading-relaxed">
          Currently, <Keyvault /> operates on the
          <span className="font-semibold italic"> Astar EVM mainnet</span>,
          where the cost of storing one encrypted credential is approximately
          <span className="font-semibold"> $0.01 USD</span> as of
          <span className="font-semibold"> February 2025</span>. Gas fees may
          vary depending on network conditions and may differ if <Keyvault />{" "}
          expands to other blockchains in the future.
        </p>
      </main>
    </>
  );
}

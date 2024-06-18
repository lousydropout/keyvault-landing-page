export default function Pricing() {
  return (
    <>
      <main className="flex flex-col pt-12 pb-48 gap-8">
        <h1 className="text-6xl text-primary">Pricing</h1>
        <p className="text-2xl leading-relaxed">
          Currently, at least while in beta testing, keyvault is free if
          excluding transaction fees involved in using keyvault. Luckily, the
          transaction fees involved are essentially so minimal that they are
          irrelevant.
        </p>
        <p className="text-2xl leading-relaxed">
          Any changes to the pricing model will be communicated here first.
        </p>
        <p className="text-2xl leading-relaxed text-accent">
          More details coming soon...
        </p>
      </main>
    </>
  );
}

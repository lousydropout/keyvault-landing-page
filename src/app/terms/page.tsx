export default function Terms() {
  return (
    <>
      <main className="flex flex-col my-12 gap-8">
        <h1 className="text-6xl mb-12 text-primary">Terms and Conditions</h1>
        <p>
          <strong>Last Updated: 2024-02-18</strong>
          <h2 className="mt-4"> Version History</h2>

          <ul className="flex flex-col gap-2">
            <li>
              <strong>1.0 (Created on 2024-02-18):</strong> Initial release.
            </li>
          </ul>
        </p>

        <h2 className="text-4xl mb-4">Age Requirement and Parental Approval</h2>

        <p className="text-2xl leading-relaxed">
          You must be at least 13 years old to use Keyvault. If you are under
          18, you must have parental approval to create an account and use our
          services. By agreeing to these terms, you confirm that you meet these
          age requirements and that, if under 18, you have obtained the
          necessary parental consent.
        </p>

        <h2 className="text-4xl mb-4"> Encryption and Data Storage</h2>

        <p className="text-2xl leading-relaxed">
          Keyvault is meant for storing your data in an encrypted format. For
          security purposes, the encryption and decryption process must take
          place off-chain so that no unencrypted data is submitted to the
          blockchain.
        </p>
        <p className="text-2xl leading-relaxed">
          Under correct usage of Keyvault, Keyvault stores only encrypted
          information on the blockchain. You hold the only key capable of
          decrypting this information. We do not have access to your encryption
          key and, therefore, cannot decrypt your credentials or recover them if
          you lose your key.
        </p>
        <p className="text-2xl leading-relaxed">
          Again, you&apos;re responsible for encrypting your data before storing
          it and managing your encryption keys securely. We cannot decrypt or
          access your data.
        </p>

        <h2 className="text-4xl mb-4"> Privacy and Blockchain Transparency </h2>

        <p className="text-2xl leading-relaxed">
          Keyvault does not capture or store any personal information off-chain,
          even for analytics purposes. However, it&apos;s important to remember
          that this is a blockchain-based application. Consequently, actions
          such as creating an account, inserting new credentials, or resetting
          your account are public, recorded on the blockchain, and visible to
          anyone. While all credentials are encrypted (assuming the user is
          properly using the provided frontend as intended) before being stored
          on-chain, ensuring their privacy, the fact that these actions have
          occurred is public.
        </p>

        <h2 className="text-4xl mb-4"> Immutability of Stored Information </h2>

        <p className="text-2xl leading-relaxed">
          Due to the immutable nature of blockchain technology, once information
          is encrypted and stored on-chain, it cannot be altered or removed.
          This ensures the integrity and security of your data but also means
          you should be certain before submitting any information to Keyvault.
          It is your responsibility to manage the data you choose to store
          securely.
        </p>

        <h2 className="text-4xl mb-4"> Limitation of Liability </h2>

        <p className="text-2xl leading-relaxed">
          To the fullest extent permitted by law, we, along with our officers,
          directors, employees, agents, or affiliates, will not be liable for
          any indirect, incidental, special, consequential, or punitive damages
          arising out of or in connection with your use of Keyvault...
        </p>

        <h2 className="text-4xl mb-4"> No Warranty </h2>
        <p className="text-2xl leading-relaxed">
          Due to the public and immutable nature of blockchains, encryption and
          decryption must occur off-chain. As this is impossible for us to
          enforce, we are unable to provide any warranty...
        </p>

        <h2 className="text-4xl mb-4"> Your Agreement </h2>
        <p className="text-2xl leading-relaxed">
          By using Keyvault, you agree to these terms and conditions. Your use
          of our service signifies your acceptance of these terms and your
          commitment to comply with them. If you do not agree with any part of
          these terms, please do not use Keyvault.
        </p>
      </main>
    </>
  );
}

import { UniswapWidget } from "@/components/UniswapWidget";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-comic">
      <div className="flex flex-col items-center justify-center font-comic">
        <div className="flex flex-col items-center justify-center font-comic">
          <h1 className="text-8xl font-bold text-gray-900 mb-4 p-4">
            Fentanyl Token
          </h1>
          <Image
            src="/images/logo.png"
            alt="Logo"
            className="mb-12 mt-4"
            width={300}
            height={300}
          />
          <p className="text-lg md:text-4xl text-gray-700 mb-8 p-4 px-6 md:px-2 width-1/3 text-center">
            Our mission is to reclaim the name &quot;Fentanyl&quot; and turn it
            into a force for good. By creating the Fentanyl Token, we aim to
            raise awareness and divert attention from the dangerous substance to
            a unique digital asset. Join us in making the Fentanyl Token more
            famous than the drug, creating a positive impact and a strong
            community.<br></br>
            Earn more Fentanyl by posting about us on Twitter/X.
          </p>

          <div className="flex flex-col items-center justify-center font-comic">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 p-4">
              Tokenomics
            </h2>
            <p className="text-lg md:text-4xl text-gray-700 mb-8 p-4 px-6 md:px-2 width-1/3 text-center">
              <ul>
                <li>1 Trillion FENTANYL</li>
                <li>85% of the supply is added to the Liquidity Pool</li>
                <li>10% of the supply is used for the team.</li>
                <li>
                  5% of the supply is used to reward users for posting about us
                  on Twitter/X
                </li>
              </ul>
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 p-4">
              Available on Base
            </h2>

            <Image
              src="/images/base-logo.png"
              alt="Base"
              className="mb-12 mt-4"
              width={150}
              height={150}
            />
          </div>
        </div>
        <UniswapWidget />
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <a
          href="https://x.com/fentanyltoken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/x.png"
            alt="Twitter"
            className="mb-12 mt-4"
            width={50}
            height={50}
          />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/telegram.png"
            alt="Telegram"
            className="mb-12 mt-4"
            width={50}
            height={50}
          />
        </a>
      </div>
    </main>
  );
}

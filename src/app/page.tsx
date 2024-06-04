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
                <br></br>
                <li>85% of the supply is added to the Liquidity Pool</li>
                <br></br>
                <li>10% of the supply is used for the team.</li>
                <br></br>
                <li>
                  5% of the supply is used to reward users for posting about us
                  on Twitter/X
                </li>
                <li>FENTANYL is tradable on Uniswap - Base</li>
              </ul>
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 p-4">
              Token Address
            </h2>
            <p className="text-lg md:text-4xl text-gray-700 mb-8 p-4 px-6 md:px-2 width-1/3 text-center">
              0xF46aDE1C2De8B6a85769cDcED6Bd9Ee0073bFd9A
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 p-4">
            Trade it here:
          </h2>
          <Image
            src="/images/uniswap-logo.png"
            alt="Uniswap"
            className="mb-12 mt-4"
            width={300}
            height={300}
          />
          <a
            className="text-lg md:text-4xl text-gray-700 mb-8 p-4 px-6 md:px-2 width-1/3 text-center"
            href="https://app.uniswap.org/swap"
            style={{ color: "blue", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to go to Uniswap
          </a>
          <p className="text-lg md:text-4xl text-gray-700 mb-8 p-4 px-6 md:px-2 width-1/3 text-center">
            Press &quot;Select Token&quot; <br></br>
            <br></br>
            Paste in the
            Tokenaddress(0xF46aDE1C2De8B6a85769cDcED6Bd9Ee0073bFd9A) <br></br>
            <br></br>
            Select &quot;Fentanyl&quot;
          </p>
        </div>
        {/*<UniswapWidget />*/}
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="500"
          height="400"
          src="https://www.dextools.io/widget-chart/en/base/pe-light/0xe9472442c4048d35a37746ba550c60218f8e41e0?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
        ></iframe>
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

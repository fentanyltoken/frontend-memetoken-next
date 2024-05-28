"use client";

import { SwapWidget, Theme } from "uniswap-widgets-qwq";
const JSON_RPC_URL =
  "https://base-mainnet.g.alchemy.com/v2/QWnDJnnZFRJSZABxedDHL1l1x2Y3c1aR";
// The url of the default uniswap token list. This list will be passed to the Uniswap component
// and will appear by default in the token selector UI.
const TOKEN_LIST =
  "https://raw.githubusercontent.com/fentanyltoken/tokenlist/main/tokenlist.json";

const DAI = "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb";

const theme: Theme = {
  fontFamily: "Comic Sans MS",
};

export function UniswapWidget() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.Browser = {
      T: () => {},
    };
  }

  return (
    <main>
      <SwapWidget
        jsonRpcUrlMap={{
          8453: [JSON_RPC_URL],
        }}
        // Specifies the set of tokens that appear by default in the token selector list.
        tokenList={TOKEN_LIST}
        // Address of the token to be selected by default in the
        // input field (e.g. USDC) for each network chain ID.
        defaultInputTokenAddress="NATIVE"
        // Default amount for the input field in this case 1 ETH
        defaultInputAmount="1"
        // Address of the token to be selected by default in the input field (e.g. USDC)
        // for each network chain ID.
        //defaultOutputTokenAddress={}
        theme={theme}
      />
    </main>
  );
}

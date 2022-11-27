import { useState } from "react";
import { DownArrow } from "../icons";
import { SelectTokenModal } from "./SelectTokenModal";
import { TokenInfo } from "./types";

const tokens: TokenInfo[] = [
  {
    symbol: "WETH",
    icon: <img src="./tokens/weth.png" />,
  },
  {
    symbol: "ETH",
    icon: <img src="./tokens/eth.png" />,
  },
  {
    symbol: "DAI",
    icon: <img src="./tokens/dai.png" />,
  },
];

export const SwapInput = () => {
  const [isSelectingToken, setIsSelectingToken] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenInfo>(tokens[0]);

  return (
    <div className="flex flex-nowrap p-4 my-0.5 h-24 bg-input-background rounded-xl border border-input-border border-opacity-0 focus-within:!border-opacity-[0.4] hover:border-opacity-[0.08] transition duration-[150ms]">
      <input
        className="focus:outline-0 bg-transparent h-fit overflow-auto placeholder-tigres-placeholder text-4xl p-b- font-normal"
        type="text"
        placeholder="0"
      />
      <button
        onClick={() => setIsSelectingToken(true)}
        className="text-center h-fit py-1 pr-2 pl-1 bg-swap-row-button mx-auto rounded-2xl font-semibold hover:bg-swap-row-hover transition duration-[150ms]"
      >
        <div className="flex items-center">
          <div className="w-6 h-6 mr-0.5">{selectedToken.icon}</div>
          <span className="mx-1">{selectedToken.symbol}</span>
          <DownArrow />
        </div>
      </button>
      {isSelectingToken && (
        <SelectTokenModal
          onClose={() => setIsSelectingToken(false)}
          onTokenSelect={setSelectedToken}
          selectedToken={selectedToken}
          tokens={tokens}
        />
      )}
    </div>
  );
};

import { useState } from "react";
import { DownArrow } from "../icons";
import { SelectTokenModal } from "./SelectTokenModal";
import { TokenInfo, TokenSymbol } from "./types";

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

interface ISwapInputProps {
  defaultSymbol?: TokenSymbol;
}

export const SwapInput = ({ defaultSymbol }: ISwapInputProps) => {
  const [isSelectingToken, setIsSelectingToken] = useState(false);
  const [selectedToken, setSelectedToken] = useState<TokenInfo | undefined>(
    tokens.find((x) => x.symbol === defaultSymbol)
  );

  return (
    <div className="flex flex-nowrap p-4 my-0.5 h-24 bg-input-background dark:bg-dark-input-background rounded-xl border border-input-border border-opacity-0 focus-within:!border-opacity-[0.4] hover:border-opacity-[0.08] transition duration-[150ms]">
      <input
        className="focus:outline-0 bg-transparent h-fit overflow-auto placeholder-tigres-placeholder dark:placeholder-dark-tigres-placeholder text-4xl font-normal text-tigres-black dark:text-white"
        type="number"
        placeholder="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
      />
      <button
        onClick={() => setIsSelectingToken(true)}
        className={`dark:text-white text-center h-fit py-1.5 pr-1.5 pl-2 mx-auto rounded-2xl font-semibold transition duration-[150ms] ${
          selectedToken
            ? "bg-tigres-row-button dark:bg-dark-tigres-row-button hover:bg-swap-row-hover hover:dark:bg-dark-swap-row-hover"
            : "dark:bg-dark-button-active bg-button"
        }`}
      >
        <div
          className={`flex items-center ${selectedToken ? "" : "text-white"}`}
        >
          {selectedToken && (
            <div className="w-6 h-6 mr-0.5 text-white">
              {selectedToken.icon}
            </div>
          )}
          <span className="mx-1 whitespace-nowrap text-xl leading-5">
            {selectedToken ? selectedToken.symbol : "Select token"}
          </span>
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

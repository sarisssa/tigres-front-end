import { useAtom } from "jotai";
import Image from "next/image";
import { forwardRef, useImperativeHandle, useState } from "react";
import { isWalletConnectedAtom, walletBalanceAtom } from "../state/wallet";
import { DownArrow } from "./icons";
import { SelectTokenModal } from "./swap/SelectTokenModal";
import { TokenInfo, TokenSymbol } from "./swap/types";
import { TokenInputData } from "./types";

export const tokens: TokenInfo[] = [
  {
    symbol: "WETH",
    icon: <Image src="/tokens/weth.png" width={24} height={24} />,
  },
  {
    symbol: "ETH",
    icon: <Image src="/tokens/eth.png" width={24} height={24} />,
  },
  {
    symbol: "DAI",
    icon: <Image src="/tokens/dai.png" width={24} height={24} />,
  },
];

interface ITokenInputProps {
  defaultSymbol?: TokenSymbol;
  onChangeData?: (data: TokenInputData) => void;
}

export interface TokenInputRef {
  setSelectedToken: (token: TokenInfo | undefined) => void;
}

export const TokenInput = forwardRef(
  ({ defaultSymbol, onChangeData }: ITokenInputProps, ref) => {
    const [isSelectingToken, setIsSelectingToken] = useState(false);
    const [selectedToken, setSelectedToken] = useState<TokenInfo | undefined>(
      tokens.find((x) => x.symbol === defaultSymbol)
    );
    const [value, setValue] = useState("");
    const [walletBalance] = useAtom(walletBalanceAtom);
    const [isWalletConnected] = useAtom(isWalletConnectedAtom);

    const setToMax = () => {
      if (!walletBalance) {
        return;
      }

      setValue(String(walletBalance));
    };

    useImperativeHandle(ref, () => ({ setSelectedToken }), [setSelectedToken]);

    return (
      <div className="flex flex-nowrap p-4 my-0.5 h-24 bg-input-background dark:bg-dark-input-background rounded-xl border border-input-border border-opacity-0 focus-within:!border-opacity-[0.4] hover:border-opacity-[0.08] transition duration-[150ms]">
        <input
          className="focus:outline-0 bg-transparent h-fit overflow-auto placeholder-tigres-placeholder dark:placeholder-dark-tigres-placeholder text-4xl font-normal text-tigres-black dark:text-white"
          type="number"
          value={value}
          placeholder="0"
          onChange={(evt) => {
            const value = evt.target.value.replace(/\D/g, "");
            setValue(value);
            onChangeData?.({
              token: selectedToken,
              value: +(value ?? 0),
            });
          }}
        />
        <div className="flex flex-col text-end flex-shrink-0">
          <button
            onClick={() => setIsSelectingToken(true)}
            className={`dark:text-white text-center h-fit py-1 pr-1 pl-2 ml-auto rounded-2xl font-semibold transition duration-[150ms] ${
              selectedToken
                ? "bg-tigres-row-button dark:bg-dark-tigres-row-button hover:bg-swap-row-hover hover:dark:bg-dark-swap-row-hover"
                : "dark:bg-dark-button-active bg-button"
            }`}
          >
            <div
              className={`flex items-center ${
                selectedToken ? "" : "text-white"
              }`}
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
          {selectedToken?.symbol === "ETH" &&
            walletBalance !== undefined &&
            isWalletConnected && (
              <div className="flex flex-end pt-2 items-center">
                <span className="text-tigres-info text-sm font-normal">
                  Balance: {walletBalance.toFixed(3)}
                </span>
                <button
                  onClick={setToMax}
                  className="pl-1.5 text-sm text-button dark:text-dark-button font-semibold"
                >
                  Max
                </button>
              </div>
            )}
        </div>
        {isSelectingToken && (
          <SelectTokenModal
            onClose={() => setIsSelectingToken(false)}
            onTokenSelect={(token) => {
              setSelectedToken(token);
              onChangeData?.({
                token: token,
                value: +value,
              });
            }}
            selectedToken={selectedToken}
            tokens={tokens}
          />
        )}
      </div>
    );
  }
);

TokenInput.displayName = "TokenInput";

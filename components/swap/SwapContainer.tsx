import { useRef, useState } from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { TokenInput, TokenInputRef, tokens } from "../TokenInput";
import { ButtonStatus, ButtonTextMap } from "../types";
import { TokenInfo } from "./types";

const defaultSymbol = "ETH";

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);

  const firstInputRef = useRef<TokenInputRef>(null!);
  const secondInputRef = useRef<TokenInputRef>(null!);
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [firstInputToken, setFirstInputToken] = useState<TokenInfo | undefined>(
    tokens.find((x) => x.symbol === defaultSymbol)
  );
  const [secondInputToken, setSecondInputToken] = useState<
    TokenInfo | undefined
  >(undefined);

  const buttonTextMap: Omit<ButtonTextMap, "addLiquidity"> = {
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.noWalletConnected]: "Connect Wallet",
    [ButtonStatus.noTokenSelected]: "Select a token",
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.swap]: "Swap",
    [ButtonStatus.insufficientBalance]: `Insufficient ${firstInputToken?.symbol} balance`,
  };

  function swapInputTokens() {
    const temp = firstInputToken;
    setFirstInputToken(secondInputToken);
    firstInputRef.current.setSelectedToken(secondInputToken);
    setSecondInputToken(temp);
    secondInputRef.current.setSelectedToken(temp);
  }

  function swapIfSameAsSecondToken(token: TokenInfo) {
    if (secondInputToken?.symbol === token.symbol) {
      swapInputTokens();
    }
  }

  function swapIfSameAsFirstToken(token: TokenInfo) {
    if (firstInputToken?.symbol === token.symbol) {
      swapInputTokens();
    }
  }

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-2 w-full max-w-[464px] sm:mt-[68px]">
        <h3 className="px-3 py-2 text-black dark:text-white">Swap</h3>
        <TokenInput
          ref={firstInputRef}
          defaultSymbol={defaultSymbol}
          onChangeToken={(token) => {
            swapIfSameAsSecondToken(token);
            setFirstInputToken(token);
          }}
          onChangeValue={setFirstInputValue}
        />
        <TokenInput
          ref={secondInputRef}
          onChangeToken={(token) => {
            swapIfSameAsFirstToken(token);
            setSecondInputToken(token);
          }}
          onChangeValue={setSecondInputValue}
        />
        <ConnectWalletButton
          firstInputToken={firstInputToken}
          firstInputValue={firstInputValue}
          secondInputToken={secondInputToken}
          secondInputValue={secondInputValue}
          buttonTextMap={buttonTextMap}
        />
        {isConnectWalletModalShown && (
          <ConnectWalletModal
            onClose={() => setIsConnectWalletModalShown(false)}
          />
        )}
      </div>
    </div>
  );
};

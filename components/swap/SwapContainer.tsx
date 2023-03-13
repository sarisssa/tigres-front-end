import { useRef, useState } from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { TokenInput, TokenInputRef } from "../TokenInput";
import { ButtonStatus, ButtonTextMap, TokenInputData } from "../types";
import { TokenInfo } from "./types";

const defaultSymbol = "ETH";

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);

  const firstInputRef = useRef<TokenInputRef>(null!);
  const secondInputRef = useRef<TokenInputRef>(null!);

  const [firstInputData, setFirstInputData] = useState<TokenInputData>({
    value: 0,
    token: undefined,
  });
  const [secondInputData, setSecondInputData] = useState<TokenInputData>({
    value: 0,
    token: undefined,
  });

  const buttonTextMap: Omit<ButtonTextMap, "addLiquidity" | "invalidPair"> = {
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.noWalletConnected]: "Connect Wallet",
    [ButtonStatus.noTokenSelected]: "Select a token",
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.swap]: "Swap",
    [ButtonStatus.insufficientBalance]: `Insufficient ${firstInputData.token?.symbol} balance`,
  };

  function swapInputTokens() {
    const temp = firstInputData;
    setFirstInputData(secondInputData);
    firstInputRef.current.setSelectedToken(secondInputData.token);
    setSecondInputData(temp);
    secondInputRef.current.setSelectedToken(temp.token);
  }

  function swapIfSameAsSecondToken(token: TokenInfo | undefined) {
    if (secondInputData.token?.symbol === token?.symbol) {
      swapInputTokens();
    }
  }

  function swapIfSameAsFirstToken(token: TokenInfo | undefined) {
    if (firstInputData.token?.symbol === token?.symbol) {
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
          onChangeData={(data) => {
            swapIfSameAsSecondToken(data.token);
            setFirstInputData(data);
          }}
        />
        <TokenInput
          ref={secondInputRef}
          onChangeData={(data) => {
            swapIfSameAsFirstToken(data.token);
            setSecondInputData(data);
          }}
        />
        <ConnectWalletButton
          firstInputData={firstInputData}
          secondInputData={secondInputData}
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

import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { isWalletConnectedAtom } from "../../state/wallet";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { SwapInput, SwapInputRef } from "./SwapInput";
import { TokenInfo } from "./types";

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);
  const firstInputRef = useRef<SwapInputRef>(null!);
  const secondInputRef = useRef<SwapInputRef>(null!);
  const [bothTokensSelected, setBothTokensSelected] = useState(false);

  function swapInputTokens() {
    const temp = firstInputRef.current?.selectedToken;
    firstInputRef.current.setSelectedToken(
      secondInputRef.current?.selectedToken
    );
    secondInputRef.current.setSelectedToken(temp);
  }

  function swapIfSameAsSecondToken(token: TokenInfo) {
    if (secondInputRef.current?.selectedToken === token) {
      swapInputTokens();
    }
  }

  function swapIfSameAsFirstToken(token: TokenInfo) {
    if (firstInputRef.current?.selectedToken === token) {
      swapInputTokens();
    }
  }

  const firstToken = firstInputRef.current?.selectedToken;

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-2 w-full max-w-[464px] sm:mt-[68px]">
        <h3 className="px-3 py-2 text-black dark:text-white">Swap</h3>
        <SwapInput
          ref={firstInputRef}
          defaultSymbol={"ETH"}
          onChangeToken={swapIfSameAsSecondToken}
        />
        <SwapInput
          ref={secondInputRef}
          onChangeToken={swapIfSameAsFirstToken}
        />
        <button
          onClick={() => {
            if (!isWalletConnected) {
              setIsConnectWalletModalShown(!isConnectWalletModalShown);
            }
          }}
          disabled={
            isWalletConnected &&
            (!firstInputRef.current?.selectedToken ||
              !secondInputRef.current?.selectedToken)
          }
          className="text-button dark:text-dark-button bg-button-connect dark:bg-dark-button-connect p-4 w-full disabled:bg-tigres-row-button disabled:text-tigres-info disabled:opacity-50 rounded-xl text-xl font-semibold mt-3"
        >
          <div>
            <p>
              {isWalletConnected
                ? bothTokensSelected && !firstInputRef.current?.value
                  ? `Select ${firstToken?.symbol} Amount`
                  : "Select a token"
                : "Connect Wallet"}
            </p>
          </div>
        </button>
        {isConnectWalletModalShown && (
          <ConnectWalletModal
            onClose={() => setIsConnectWalletModalShown(false)}
          />
        )}
      </div>
    </div>
  );
};

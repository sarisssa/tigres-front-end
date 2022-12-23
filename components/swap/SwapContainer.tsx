import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { isWalletConnectedAtom } from "../../state/wallet";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { SwapInput, SwapInputRef } from "./SwapInput";

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);
  const firstInputRef = useRef<SwapInputRef>();
  const secondInputRef = useRef<SwapInputRef>();

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-2 w-full max-w-[464px] sm:mt-[68px]">
        <h3 className="px-3 py-2 text-black dark:text-white">Swap</h3>
        <SwapInput ref={firstInputRef} defaultSymbol={"ETH"} />
        <SwapInput ref={secondInputRef} />
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
          {isWalletConnected ? "Select a token" : "Connect Wallet"}
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

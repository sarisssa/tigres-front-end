import { useState } from "react";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { SwapInput } from "./SwapInput";

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-2 w-full max-w-[464px] sm:mt-[68px]">
        <h3 className="px-3 py-2 text-black dark:text-white">Swap</h3>
        <SwapInput defaultSymbol={"ETH"} />
        <SwapInput />
        <button
          onClick={() =>
            setIsConnectWalletModalShown(!isConnectWalletModalShown)
          }
          className="text-button dark:text-dark-button bg-button-connect dark:bg-dark-button-connect p-4 w-full rounded-xl text-xl font-semibold mt-3"
        >
          Connect Wallet
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

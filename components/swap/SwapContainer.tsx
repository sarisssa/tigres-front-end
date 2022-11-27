import { SwapInput } from "./SwapInput";

export const SwapContainer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col rounded-2xl bg-swap-background border border-tigres-border p-2 max-w-[464px] mt-[68px]">
        <h3 className="px-3 py-2">Swap</h3>
        <SwapInput />
        <SwapInput />
        <button className="text-button bg-button-connect p-4 w-full rounded-xl text-xl font-semibold mt-3">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

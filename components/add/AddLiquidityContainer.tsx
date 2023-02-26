import Link from "next/link";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { BackArrow, Plus } from "../icons";
import TipContainer from "../TipContainer";
import { TokenInput } from "../TokenInput";
import { ButtonStatus, ButtonTextMap } from "../types";

const addLiquidityTip =
  "When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.";

export default function LiquidityContainer() {
  const buttonTextMap: Omit<ButtonTextMap, "swap"> = {
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.noWalletConnected]: "Connect Wallet",
    [ButtonStatus.noTokenSelected]: "Select a token",
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.addLiquidity]: "Add Liquidity",
    [ButtonStatus.invalidPair]: "Invalid Pair",
    [ButtonStatus.insufficientBalance]: `Insufficient ${firstInputToken?.symbol} balance`,
  };

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-4 w-full max-w-[464px] sm:mt-[68px]">
        <div className="flex justify-between items-center mb-5">
          <Link href="/pool">
            <a className="text-tigres-info w-6">
              <BackArrow />
            </a>
          </Link>
          <h2 className="text-tigres-black dark:text-white text-center text-xl font-medium">
            Add Liquidity
          </h2>
          <div className="w-6" />
        </div>
        <div className="flex flex-col gap-5 text-tigres-info dark:text-button-close-icon">
          <TipContainer tip={addLiquidityTip} />
          <TokenInput />
          <div className="self-center">
            <Plus />
          </div>
          <TokenInput />
          <div className="self-center">
            <Plus />
          </div>
          <TokenInput />
        </div>
        <ConnectWalletButton
          firstInputToken={firstInputToken}
          firstInputValue={firstInputValue}
          secondInputToken={secondInputToken}
          secondInputValue={secondInputValue}
          buttonTextMap={buttonTextMap}
        />
      </div>
    </div>
  );
}

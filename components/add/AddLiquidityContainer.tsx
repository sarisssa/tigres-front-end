import Link from "next/link";
import { useRef, useState } from "react";
import { ConnectWalletButton } from "../ConnectWalletButton";
import { BackArrow, Plus } from "../icons";
import { TokenInfo } from "../swap/types";
import TipContainer from "../TipContainer";
import { TokenInput, TokenInputRef } from "../TokenInput";
import { ButtonStatus, ButtonTextMap, TokenInputData } from "../types";

const addLiquidityTip =
  "When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.";

export default function LiquidityContainer() {
  const firstInputRef = useRef<TokenInputRef>(null!);
  const secondInputRef = useRef<TokenInputRef>(null!);
  const thirdInputRef = useRef<TokenInputRef>(null!);

  const [firstInputData, setFirstInputData] = useState<TokenInputData>({
    value: 0,
    token: undefined,
  });

  const [secondInputData, setSecondInputData] = useState<TokenInputData>({
    value: 0,
    token: undefined,
  });

  const [thirdInputData, setThirdInputData] = useState<TokenInputData>({
    value: 0,
    token: undefined,
  });

  const buttonTextMap: Omit<ButtonTextMap, "swap"> = {
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.noWalletConnected]: "Connect Wallet",
    [ButtonStatus.noTokenSelected]: "Select a token",
    [ButtonStatus.noValueSelected]: "Enter an amount",
    [ButtonStatus.addLiquidity]: "Add Liquidity",
    [ButtonStatus.invalidPair]: "Invalid Pair",
    [ButtonStatus.insufficientBalance]: `Insufficient ${firstInputData.token?.symbol} balance`,
  };

  function swapFirstIfAlreadySelected(token: TokenInfo | undefined) {
    const temp = firstInputData;

    if (secondInputData.token === token) {
      setFirstInputData(secondInputData);
      firstInputRef.current.setSelectedToken(secondInputData.token);
      setSecondInputData(temp);
      secondInputRef.current.setSelectedToken(temp.token);
    }

    if (thirdInputData.token === token) {
      setFirstInputData(thirdInputData);
      firstInputRef.current.setSelectedToken(thirdInputData.token);
      setThirdInputData(temp);
      thirdInputRef.current.setSelectedToken(temp.token);
    }
  }

  function swapSecondIfAlreadySelected(token: TokenInfo | undefined) {
    const temp = secondInputData;

    if (firstInputData.token === token) {
      setSecondInputData(firstInputData);
      secondInputRef.current.setSelectedToken(firstInputData.token);
      setFirstInputData(temp);
      firstInputRef.current.setSelectedToken(temp.token);
    }

    if (thirdInputData.token === token) {
      setSecondInputData(thirdInputData);
      secondInputRef.current.setSelectedToken(thirdInputData.token);
      setThirdInputData(temp);
      thirdInputRef.current.setSelectedToken(temp.token);
    }
  }

  function swapThirdIfAlreadySelected(token: TokenInfo | undefined) {
    const temp = thirdInputData;

    if (secondInputData.token === token) {
      setThirdInputData(secondInputData);
      thirdInputRef.current.setSelectedToken(secondInputData.token);
      setSecondInputData(temp);
      secondInputRef.current.setSelectedToken(temp.token);
    }

    if (firstInputData.token === token) {
      setThirdInputData(firstInputData);
      thirdInputRef.current.setSelectedToken(firstInputData.token);
      setFirstInputData(temp);
      firstInputRef.current.setSelectedToken(temp.token);
    }
  }

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
          <TokenInput
            ref={firstInputRef}
            onChangeData={(data) => {
              swapFirstIfAlreadySelected(data.token);
              setFirstInputData(data);
            }}
          />
          <div className="self-center">
            <Plus />
          </div>
          <TokenInput
            ref={secondInputRef}
            onChangeData={(data) => {
              swapSecondIfAlreadySelected(data.token);
              setSecondInputData(data);
            }}
          />
          <div className="self-center">
            <Plus />
          </div>
          <TokenInput
            ref={thirdInputRef}
            onChangeData={(data) => {
              swapThirdIfAlreadySelected(data.token);
              setThirdInputData(data);
            }}
          />
        </div>
        <ConnectWalletButton
          firstInputData={firstInputData}
          secondInputData={secondInputData}
          thirdInputData={thirdInputData}
          buttonTextMap={buttonTextMap}
        />
      </div>
    </div>
  );
}

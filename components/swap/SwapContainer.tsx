import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { isWalletConnectedAtom, walletBalanceAtom } from "../../state/wallet";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { SwapInput, SwapInputRef, tokens } from "./SwapInput";
import { TokenInfo } from "./types";

const defaultSymbol = "ETH";

enum ButtonStatus {
  noWalletConnected = "noWalletConnected",
  noTokenSelected = "noTokenSelected",
  noValueSelected = "noValueSelected",
  insufficientBalance = "insufficientBalance",
  swap = "swap",
}

export const SwapContainer = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);
  const [walletBalance] = useAtom(walletBalanceAtom);

  const firstInputRef = useRef<SwapInputRef>(null!);
  const secondInputRef = useRef<SwapInputRef>(null!);
  const [firstInputValue, setFirstInputValue] = useState(0);
  const [secondInputValue, setSecondInputValue] = useState(0);
  const [firstInputToken, setFirstInputToken] = useState<TokenInfo | undefined>(
    tokens.find((x) => x.symbol === defaultSymbol)
  );
  const [secondInputToken, setSecondInputToken] = useState<
    TokenInfo | undefined
  >(undefined);

  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>(
    isWalletConnected
      ? ButtonStatus.noTokenSelected
      : ButtonStatus.noWalletConnected
  );

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

  useEffect(() => {
    if (!isWalletConnected) {
      setButtonStatus(ButtonStatus.noWalletConnected);
      return;
    }

    if (!firstInputToken || !secondInputToken) {
      setButtonStatus(ButtonStatus.noTokenSelected);
      return;
    }

    if (!firstInputValue && !secondInputValue) {
      setButtonStatus(ButtonStatus.noValueSelected);
      return;
    }

    if (!walletBalance || firstInputValue > walletBalance) {
      setButtonStatus(ButtonStatus.insufficientBalance);
      return;
    }

    setButtonStatus(ButtonStatus.swap);
  }, [firstInputToken, secondInputToken, firstInputValue, walletBalance]);

  function getButtonText() {
    switch (buttonStatus) {
      case ButtonStatus.noWalletConnected:
        return "Connect Wallet";
      case ButtonStatus.noTokenSelected:
        return "Select a token";
      case ButtonStatus.noValueSelected:
        return "Enter an amount";
      case ButtonStatus.insufficientBalance:
        return `Insufficient ${firstInputToken?.symbol} balance`;
      case ButtonStatus.swap:
        return "Swap";
    }
  }

  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col rounded-2xl bg-swap-background dark:bg-dark-swap-background border border-tigres-border dark:border-dark-tigres-border p-2 w-full max-w-[464px] sm:mt-[68px]">
        <h3 className="px-3 py-2 text-black dark:text-white">Swap</h3>
        <SwapInput
          ref={firstInputRef}
          defaultSymbol={defaultSymbol}
          onChangeToken={(token) => {
            swapIfSameAsSecondToken(token);
            setFirstInputToken(token);
          }}
          onChangeValue={setFirstInputValue}
        />
        <SwapInput
          ref={secondInputRef}
          onChangeToken={(token) => {
            swapIfSameAsFirstToken(token);
            setSecondInputToken(token);
          }}
          onChangeValue={setSecondInputValue}
        />
        <button
          onClick={() => {
            if (!isWalletConnected) {
              setIsConnectWalletModalShown(!isConnectWalletModalShown);
            }
          }}
          disabled={[
            ButtonStatus.insufficientBalance,
            ButtonStatus.noTokenSelected,
            ButtonStatus.noValueSelected,
          ].includes(buttonStatus)}
          className={`${
            buttonStatus === ButtonStatus.swap
              ? "connect-wallet-swap"
              : "connect-wallet-default"
          } connect-wallet-base`}
        >
          <div>
            <p>{getButtonText()}</p>
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

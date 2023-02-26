import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { isWalletConnectedAtom, walletBalanceAtom } from "../state/wallet";
import { ConnectWalletModal } from "./ConnectWalletModal";
import { TokenInfo } from "./swap/types";
import { ButtonStatus, ButtonTextMap } from "./types";

interface IConnectWalletButtonProps {
  firstInputToken: TokenInfo | undefined;
  firstInputValue: number;
  secondInputToken: TokenInfo | undefined;
  secondInputValue: number;
  buttonTextMap: Partial<ButtonTextMap>;
}

export const ConnectWalletButton = ({
  firstInputToken,
  firstInputValue,
  secondInputToken,
  secondInputValue,
  buttonTextMap,
}: IConnectWalletButtonProps) => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);
  const [walletBalance] = useAtom(walletBalanceAtom);

  const [buttonStatus, setButtonStatus] = useState(
    isWalletConnected
      ? ButtonStatus.noTokenSelected
      : ButtonStatus.noWalletConnected
  );

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
  }, [
    firstInputToken,
    secondInputToken,
    firstInputValue,
    secondInputValue,
    walletBalance,
    isWalletConnected,
  ]);

  return (
    <>
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
          <p>{buttonTextMap[buttonStatus]}</p>
        </div>
      </button>
      {isConnectWalletModalShown && (
        <ConnectWalletModal
          onClose={() => setIsConnectWalletModalShown(false)}
        />
      )}
    </>
  );
};

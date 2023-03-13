import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { isWalletConnectedAtom, walletBalanceAtom } from "../state/wallet";
import { ConnectWalletModal } from "./ConnectWalletModal";
import { ButtonStatus, ButtonTextMap, TokenInputData } from "./types";

interface IConnectWalletButtonProps {
  firstInputData: TokenInputData;
  secondInputData: TokenInputData;
  thirdInputData?: TokenInputData;
  buttonTextMap: Partial<ButtonTextMap>;
}

export const ConnectWalletButton = ({
  firstInputData,
  secondInputData,
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

    // Destructure and rename
    const { token: firstToken, value: firstValue } = firstInputData;
    const { token: secondToken, value: secondValue } = secondInputData;

    if (!firstToken || !secondToken) {
      setButtonStatus(ButtonStatus.noTokenSelected);
      return;
    }

    if (!firstValue && !secondValue) {
      setButtonStatus(ButtonStatus.noValueSelected);
      return;
    }

    if (!walletBalance || firstValue > walletBalance) {
      setButtonStatus(ButtonStatus.insufficientBalance);
      return;
    }

    setButtonStatus(ButtonStatus.swap);
  }, [firstInputData, secondInputData, walletBalance, isWalletConnected]);

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

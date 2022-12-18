import { useState } from "react";
import { useTigresConfiguration } from "../../../state/tigresContext";
import { ConnectWalletModal } from "../../ConnectWalletModal";
import { DownArrow, Moon, Sun } from "../../icons";
import { ModalRow } from "./ModalRow";

interface ConnectModalProps {
  onClose: () => void;
}

export const ConnectModal = ({ onClose }: ConnectModalProps) => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const { darkMode, setDarkMode } = useTigresConfiguration();

  return (
    <>
      <div className="fixed inset-0" onClick={onClose}></div>
      <div
        className="flex flex-col justify-center border border-tigres-border dark:border-dark-tigres-border sm:border-opacity-[14%]
        bg-modal-background dark:bg-dark-modal-background px-2 py-4 sm:w-80 rounded-xl absolute sm:top-[72px] bottom-[60px] sm:bottom-auto left-2 sm:left-auto right-2 sm:right-5 sm:shadow-2xl"
      >
        <button
          onClick={() =>
            setIsConnectWalletModalShown(!isConnectWalletModalShown)
          }
          className="text-center bg-button dark:bg-dark-button mx-auto rounded-xl font-semibold h-11 w-72 text-white"
        >
          Connect wallet
        </button>
        <hr className="my-4 border-dark-tigres-gray border-opacity-[14%]" />
        <ModalRow onClick={() => {}}>
          <span>Language</span>
          <div className="flex justify-between">
            <span>EN</span>
            <div className="-rotate-90">
              <DownArrow size={16} />
            </div>
          </div>
        </ModalRow>
        <ModalRow onClick={() => setDarkMode(!darkMode)}>
          <span>{darkMode ? "Light" : "Dark"} theme</span>
          {darkMode ? <Sun /> : <Moon />}
        </ModalRow>
      </div>
      {isConnectWalletModalShown && (
        <ConnectWalletModal
          onClose={() => setIsConnectWalletModalShown(false)}
        />
      )}
    </>
  );
};

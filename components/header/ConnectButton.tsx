import { useState } from "react";
import { ConnectWalletModal } from "../ConnectWalletModal";
import { DownArrow } from "../icons";
import { SettingsModal } from "./SettingsModal";

export const ConnectButton = () => {
  const [isConnectWalletModalShown, setIsConnectWalletModalShown] =
    useState(false);
  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

  return (
    <div className="flex items-center rounded-full bg-button-connect dark:bg-dark-button-connect overflow-hidden">
      <button
        onClick={() => setIsConnectWalletModalShown(!isConnectWalletModalShown)}
        className="text-button dark:text-dark-button py-2.5 pr-2 pl-3 leading-[normal] font-semibold hover:text-button-connect hover:dark:text-dark-button-connect transition-text duration-[125ms] ease-in"
      >
        Connect
      </button>
      <div className="bg-button dark:bg-dark-button w-px h-5" />
      <button
        className="py-2.5 pr-4 pl-1"
        onClick={() => setIsExtendedMenuOpen(!isExtendedMenuOpen)}
      >
        <div
          className={`text-button dark:text-dark-button ${
            isExtendedMenuOpen ? "rotate-180" : ""
          }`}
        >
          <DownArrow />
        </div>
      </button>
      {isExtendedMenuOpen && (
        <SettingsModal
          onClose={() => {
            setIsExtendedMenuOpen(false);
          }}
        />
      )}
      {isConnectWalletModalShown && (
        <ConnectWalletModal
          onClose={() => setIsConnectWalletModalShown(false)}
        />
      )}
    </div>
  );
};

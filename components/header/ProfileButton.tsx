import { useAtom } from "jotai";
import { useState } from "react";
import { walletAddressAtom } from "../../state/wallet";
import { DownArrow, ProfilePlaceholderPicture } from "../icons";
import { SettingsModal } from "./SettingsModal";

export const ProfileButton = () => {
  const [walletAddress] = useAtom(walletAddressAtom);
  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

  return (
    <button
      onClick={() => setIsExtendedMenuOpen(!isExtendedMenuOpen)}
      className="flex rounded-full bg-input-background p-1 sm:p-2 gap-2 items-center border border-transparent hover:border-tigres-border dark:bg-dark-input-background dark:text-white dark:hover:border-dark-tigres-profile-border "
    >
      <div className="rounded-full">
        <ProfilePlaceholderPicture />
      </div>
      <span className="mx-1 hidden sm:block">
        {walletAddress?.slice(0, 6)}...
        {walletAddress?.slice(walletAddress.length - 4)}
      </span>
      <div className="hidden sm:block">
        <DownArrow />
      </div>

      {isExtendedMenuOpen && (
        <SettingsModal
          onClose={() => {
            setIsExtendedMenuOpen(false);
          }}
        />
      )}
    </button>
  );
};

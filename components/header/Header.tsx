import { useAtom } from "jotai";
import { useState } from "react";
import { isWalletConnectedAtom } from "../../state/wallet";
import { LinkButton } from "../dummy/LinkButton";
import { ConnectButton } from "./ConnectButton";
import { ProfileButton } from "./ProfileButton";

export const Header = () => {
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);
  const [isExtendedMenuOpen, setIsExtendedMenuOpen] = useState(false);

  return (
    <div className="justify-between flex-row-reverse px-5 py-3 flex">
      <div>
        {isWalletConnected ? (
          <ProfileButton
            isExtendedMenuOpen={isExtendedMenuOpen}
            onExtend={setIsExtendedMenuOpen}
          />
        ) : (
          <ConnectButton
            isExtendedMenuOpen={isExtendedMenuOpen}
            onExtend={setIsExtendedMenuOpen}
          />
        )}
      </div>
      <div className="gap-2 hidden sm:flex">
        <LinkButton href="/swap">Swap</LinkButton>
        <LinkButton href="/pool">Pool</LinkButton>
      </div>
      <div className="sm:hidden flex justify-around border-tigres-border dark:bg-tigres-black dark:border-dark-tigres-border border-t-[1px] fixed h-[52px] inset-0 top-auto text-center py-1 px-2">
        <LinkButton href="/swap" className="flex-grow">
          Swap
        </LinkButton>
        {/* <LinkButton
          href="/pool"
          className="flex-grow !text-tigres-gray !dark:text-dark-tigres-gray"
        >
          Pool
        </LinkButton> */}
      </div>
    </div>
  );
};

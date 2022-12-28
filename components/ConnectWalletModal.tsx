import { ethers } from "ethers";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  isWalletConnectedAtom,
  walletAddressAtom,
  walletBalanceAtom,
} from "../state/wallet";
import { Close } from "./icons";

interface IConnectWalletModalProps {
  onClose: () => void;
}

export function ConnectWalletModal({ onClose }: IConnectWalletModalProps) {
  const [haveMetamask, setHaveMetaMask] = useState(true);
  const [, setWalletAddress] = useAtom(walletAddressAtom);
  const [, setWalletBalance] = useAtom(walletBalanceAtom);
  const [isWalletConnected, setIsWalletConnected] = useAtom(
    isWalletConnectedAtom
  );

  const { ethereum } = window;

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        setHaveMetaMask(false);
      } else {
        setHaveMetaMask(true);
      }
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setHaveMetaMask(false);
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await ethereum.request?.({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setWalletAddress(accounts[0]);
      setWalletBalance(+bal);
      setIsWalletConnected(true);
      onClose();
    } catch (error) {}
  };

  return (
    <div
      onClick={onClose}
      className="fixed flex justify-center items-center inset-0 bg-black/[0.4]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col font-tigres-black bg-white dark:bg-tigres-black rounded-[20px] w-[50vw] max-w-[420px] max-h-[90vh] border dark:border-dark-input-background"
      >
        <div className="flex justify-between p-4 font-semibold text-tigres-black dark:text-white">
          <h2>Connect a wallet</h2>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className="px-4 pb-4 flex flex-col gap-4">
          {haveMetamask ? (
            <button
              onClick={connectWallet}
              className="flex justify-start bg-tigres-row-button p-4 rounded-xl w-full items-center font-semibold text-tigres-black dark:text-white dark:bg-dark-tigres-row-button hover:opacity-60 transition duration-[125ms]"
            >
              <div className="pr-3 inline-flex">
                <Image
                  src="/wallet/metamask.png"
                  alt="MetaMask Logo"
                  height={28}
                  width={28}
                />
              </div>
              <span>MetaMask</span>
            </button>
          ) : (
            <a
              className="flex justify-start bg-tigres-row-button p-4 rounded-xl w-full items-center font-semibold text-tigres-black dark:text-white dark:bg-dark-tigres-row-button hover:opacity-60 transition duration-[125ms]"
              href="https://metamask.io/"
              target="_blank"
            >
              <div className="pr-3 inline-flex">
                <Image
                  src="/wallet/metamask.png"
                  alt="MetaMask Logo"
                  height={28}
                  width={28}
                />
              </div>
              <span>Install MetaMask</span>
            </a>
          )}
          <div className="py-1 px-4 w-full">
            <span className="font-normal text-tigres-info dark:text-tigres-placeholder">
              By connecting a wallet, you agree to Tigres Labs’{" "}
              <span className="text-button dark:text-dark-button-active hover:opacity-60">
                Terms of Service
              </span>{" "}
              and consent to its{" "}
              <span className="text-button dark:text-dark-button-active hover:opacity-60">
                Privacy Policy
              </span>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ethers } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Close } from "./icons";

interface IConnectWalletModalProps {
  onClose: () => void;
}

export function ConnectWalletModal({ onClose }: IConnectWalletModalProps) {
  const [haveMetamask, setHaveMetaMask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  useEffect(() => {
    const { ethereum } = window;
    console.log(ethereum);
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        setHaveMetaMask(false);
      }
      setHaveMetaMask(true);
    };
    checkMetamaskAvailability();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        setHaveMetaMask(false);
      }
      const accounts = await ethereum.request?.({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
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
          <div className="py-1 px-4 w-full">
            <span className="font-normal text-tigres-grey dark:text-tigres-placeholder">
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

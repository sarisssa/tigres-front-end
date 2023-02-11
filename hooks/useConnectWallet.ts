import { ethers } from "ethers";
import { useAtom } from "jotai";
import {
  isWalletConnectedAtom,
  walletAddressAtom,
  walletBalanceAtom,
} from "../state/wallet";

export const useConnectWallet = () => {
  const [, setWalletAddress] = useAtom(walletAddressAtom);
  const [, setWalletBalance] = useAtom(walletBalanceAtom);
  const [, setIsWalletConnected] = useAtom(isWalletConnectedAtom);

  const connectWallet = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const accounts = await ethereum.request?.({
      method: "eth_requestAccounts",
    });
    localStorage.setItem("isWalletConnected", "true");
    let balance = await provider.getBalance(accounts[0]);
    let bal = ethers.utils.formatEther(balance);

    setWalletAddress(accounts[0]);
    setWalletBalance(+bal);
    setIsWalletConnected(true);
  };

  return connectWallet;
};

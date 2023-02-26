import { useEffect } from "react";
import { useConnectWallet } from "./useConnectWallet";

export const useConnectWalletOnPageLoad = () => {
  const connectWallet = useConnectWallet();

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage.getItem("isWalletConnected") === "true") {
        try {
          connectWallet();
        } catch (error) {
          console.log(error);
        }
      }
    };

    connectWalletOnPageLoad();
  }, []);
};

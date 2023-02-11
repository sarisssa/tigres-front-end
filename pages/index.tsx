import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { SwapContainer } from "../components/swap/SwapContainer";
import { useConnectWallet } from "../hooks/useConnectWallet";

const Home: NextPage = () => {
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

  return (
    <>
      <Head>
        <title>Tigres</title>
        <meta name="description" content="Blockchain project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwapContainer />
    </>
  );
};

export default Home;

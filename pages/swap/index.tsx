import type { NextPage } from "next";
import Head from "next/head";
import { SwapContainer } from "../../components/swap/SwapContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tigres - Swap</title>
        <meta name="description" content="Blockchain project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SwapContainer />
    </>
  );
};

export default Home;

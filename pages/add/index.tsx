import type { NextPage } from "next";
import Head from "next/head";
import AddLiquidityContainer from "../../components/add/AddLiquidityContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tigres - Add Liquidity</title>
        <meta name="description" content="Blockchain project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AddLiquidityContainer />
      </main>
    </>
  );
};

export default Home;

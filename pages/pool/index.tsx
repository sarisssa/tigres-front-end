import { useAtom } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { isWalletConnectedAtom } from "../../state/wallet";

const Home: NextPage = () => {
  const [isWalletConnected] = useAtom(isWalletConnectedAtom);

  return (
    <>
      <Head>
        <title>Tigres Pool</title>
        <meta name="description" content="Blockchain project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-3">
        <div className="max-w-[640px] m-auto flex flex-col gap-2 dark:text-white">
          <div className="text-white relative overflow-hidden rounded-xl p-4 liquidity-bg-gradient">
            <span className="bg-[url('/liquiditybackground.png')] w-[1000px] h-[600px] absolute opacity-40 -top-[100px] -left-[100px] transform -rotate-[15deg]" />
            <span className="bg-[url('/liquiditybackground.png')] w-[1000px] h-[600px] absolute opacity-40 -top-[100px] -left-[100px] transform -rotate-[15deg]" />
            <h5 className="mb-1 font-semibold relative">
              Liquidity provider rewards{" "}
            </h5>
            <p className="font-medium text-sm leading-normal relative">
              Liquidity providers earn a 0.3% fee on all trades proportional to
              their share of the pool. Fees are added to the pool, accrue in
              real time and can be claimed by withdrawing your liquidity.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium ">Your Liquidity</span>
            <Link href="/add">
              <a className="bg-button p-4 rounded-xl text-white dark:bg-dark-button-active font-medium hover:bg-button-hover dark:hover:bg-dark-button-hover">
                Add liquidity
              </a>
            </Link>
          </div>
          <div className="inline-block text-center">
            {isWalletConnected ? (
              <span className="text-center border border-input-border w-full p-4 rounded-xl block ">
                No Liquidity Found
              </span>
            ) : (
              <span>Connect to a wallet to view your liquidity.</span>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

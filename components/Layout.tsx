import Head from "next/head";
import { ReactNode } from "react";
import { useTigresConfiguration } from "../state/tigresContext";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { darkMode } = useTigresConfiguration();

  console.log({ darkMode });

  return (
    <div
      id="dark-mode-container"
      className={`font-inter ${darkMode ? "dark" : ""}`}
    >
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="fixed inset-0 z-[-1] w-[200vw] h-[200vh] -translate-x-[100vw] -translate-y-[100vh] bg-gradient-to-b dark:from-dark-background-top dark:to-dark-background-bottom from-background-top to-background-bottom"></div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

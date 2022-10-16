import Head from "next/head";
import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-inter">
      <Head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="fixed z-[-1] w-screen h-screen bg-gradient-to-b from-background-top to-background-bottom"></div>
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

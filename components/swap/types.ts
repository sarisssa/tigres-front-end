import { ReactElement } from "react";

export type Symbol = "WETH" | "ETH" | "DAI";

export interface TokenInfo {
  symbol: Symbol;
  icon: ReactElement;
}

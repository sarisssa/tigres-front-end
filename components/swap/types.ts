import { ReactElement } from "react";

export type TokenSymbol = "WETH" | "ETH" | "DAI";

export interface TokenInfo {
  symbol: TokenSymbol;
  icon: ReactElement;
}

export enum ButtonStatus {
  noWalletConnected = "noWalletConnected",
  noTokenSelected = "noTokenSelected",
  noValueSelected = "noValueSelected",
  insufficientBalance = "insufficientBalance",
  swap = "swap",
  addLiquidity = "addLiquidity",
  invalidPair = "invalidPair",
}

export interface ButtonTextMap extends Record<ButtonStatus, string> {}

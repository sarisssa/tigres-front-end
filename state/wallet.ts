import { atom } from "jotai";

export const walletAddressAtom = atom<string | undefined>(undefined);
export const walletBalanceAtom = atom<number | undefined>(undefined);
export const isWalletConnectedAtom = atom(false);

import { TokenInfo } from "./types";

interface ITokenPillButtonProps {
  tokenInfo: TokenInfo;
  isSelected: boolean;
  onClick: (token: TokenInfo) => void;
}

export const TokenPillButton = ({
  tokenInfo,
  isSelected,
  onClick,
}: ITokenPillButtonProps) => {
  return (
    <button
      onClick={() => onClick(tokenInfo)}
      className={`flex rounded-2xl py-1.5 pl-1.5 pr-3 m-1 items-center border border-tigres-border hover:bg-button-pill-hover ${
        isSelected
          ? "text-button-pill-active border-button-pill-active bg-button-pill-active bg-opacity-[0.24]"
          : ""
      }`}
    >
      <div className="h-6 w-6 mr-2">{tokenInfo.icon}</div>
      {tokenInfo.symbol}
    </button>
  );
};

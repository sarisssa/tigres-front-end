import { useState } from "react";
import { Close } from "../icons";
import { TokenPillButton } from "./TokenPillButton";
import { TokenInfo } from "./types";

interface ISelectTokenModal {
  onClose: () => void;
  onTokenSelect: (token: TokenInfo) => void;
  tokens: TokenInfo[];
  selectedToken?: TokenInfo;
}

export const SelectTokenModal = ({
  onClose,
  selectedToken,
  onTokenSelect,
  tokens,
}: ISelectTokenModal) => {
  const [input, setInput] = useState("");

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 -top-60 flex justify-center items-center bg-black/[0.4]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col border h-[40vh] w-full max-w-[500px] border-dark-tigres-gray border-opacity-[14%] gap-4 bg-modal-background dark:bg-dark-modal-background dark:text-white p-5 rounded-xl shadow-token-modal"
        >
          <div className="flex justify-between">
            <h3>Select a token</h3>
            <button className="text-button-close-icon" onClick={onClose}>
              <Close />
            </button>
          </div>
          <div>
            <input
              className="bg-input-background dark:bg-dark-input-background border border-tigres-border dark:border-dark-tigres-border w-full font-normal rounded-xl h-10 p-4 pl-10 placeholder-tigres-placeholder transition duration-100
              focus:outline-0 focus:bg-transparent dark:focus:bg-transparent focus:border-button-active focus:border-opacity-[0.24] bg-no-repeat bg-[url('https://app.uniswap.org/static/media/search.2f68ccda.svg')] bg-search"
              type="text"
              placeholder="Search name or paste address"
              onChange={(e) => setInput(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-wrap justify-start items-center -m-1">
            {tokens
              .filter((token) =>
                token.symbol.toLowerCase().includes(input.toLowerCase())
              )
              .map((tokenInfo) => (
                <TokenPillButton
                  tokenInfo={tokenInfo}
                  onClick={(token) => {
                    onTokenSelect(token);
                    onClose();
                  }}
                  isSelected={tokenInfo === selectedToken}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

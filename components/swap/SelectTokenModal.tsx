import { Close } from "../icons";
import { TokenPillButton } from "./TokenPillButton";
import { TokenInfo } from "./types";

interface ISelectTokenModal {
  onClose: () => void;
  onTokenSelect: (token: TokenInfo) => void;
  selectedToken: TokenInfo;
  tokens: TokenInfo[];
}

export const SelectTokenModal = ({
  onClose,
  selectedToken,
  onTokenSelect,
  tokens,
}: ISelectTokenModal) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 flex justify-center items-center bg-black/[0.4]"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col border h-[40vh] w-[40vw] max-w-[420px] border-tigres-gray border-opacity-[14%] gap-4 bg-modal-background p-5 rounded-xl shadow-token-modal"
        >
          <div className="flex justify-between">
            <h3>Select a token</h3>
            <button className="text-button-close-icon" onClick={onClose}>
              <Close />
            </button>
          </div>
          <div className="flex flex-wrap justify-start items-center -m-1">
            {tokens.map((tokenInfo) => (
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

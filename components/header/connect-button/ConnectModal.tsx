import { useState } from "react";
import { DownArrow, Moon, Sun } from "../../icons";
import { ModalRow } from "./ModalRow";

interface ConnectModalProps {
  onClose: () => void;
}

export const ConnectModal = ({ onClose }: ConnectModalProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <div className="fixed inset-0 bg-black/[0.4]" onClick={onClose}></div>
      <div className="flex flex-col justify-center border border-tigres-gray border-opacity-[14%] bg-modal-background px-2 py-4 w-80 rounded-xl absolute top-[72px] right-5 shadow-2xl">
        <button className="text-center bg-button mx-auto rounded-xl font-semibold h-11 w-72">
          Connect wallet
        </button>
        <hr className="my-4 border-tigres-gray border-opacity-[14%]" />
        <ModalRow onClick={() => console.log("Change language")}>
          <span>Language</span>
          <div className="flex justify-between">
            <span>EN</span>
            <div className="-rotate-90">
              <DownArrow size={16} />
            </div>
          </div>
        </ModalRow>
        <ModalRow onClick={() => setIsDarkMode(!isDarkMode)}>
          <span>{isDarkMode ? "Light" : "Dark"} theme</span>
          {isDarkMode ? <Sun /> : <Moon />}
        </ModalRow>
      </div>
    </>
  );
};

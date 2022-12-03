import { useTigresConfiguration } from "../../../state/tigresContext";
import { DownArrow, Moon, Sun } from "../../icons";
import { ModalRow } from "./ModalRow";

interface ConnectModalProps {
  onClose: () => void;
}

export const ConnectModal = ({ onClose }: ConnectModalProps) => {
  const { darkMode, setDarkMode } = useTigresConfiguration();

  return (
    <>
      <div className="fixed inset-0" onClick={onClose}></div>
      <div className="flex flex-col justify-center border border-dark-tigres-gray border-opacity-[14%] bg-modal-background dark:bg-dark-modal-background px-2 py-4 w-80 rounded-xl absolute top-[72px] right-5 shadow-2xl">
        <button className="text-center bg-button dark:bg-dark-button mx-auto rounded-xl font-semibold h-11 w-72 text-white">
          Connect wallet
        </button>
        <hr className="my-4 border-dark-tigres-gray border-opacity-[14%]" />
        <ModalRow onClick={() => {}}>
          <span>Language</span>
          <div className="flex justify-between">
            <span>EN</span>
            <div className="-rotate-90">
              <DownArrow size={16} />
            </div>
          </div>
        </ModalRow>
        <ModalRow onClick={() => setDarkMode(!darkMode)}>
          <span>{darkMode ? "Light" : "Dark"} theme</span>
          {darkMode ? <Sun /> : <Moon />}
        </ModalRow>
      </div>
    </>
  );
};

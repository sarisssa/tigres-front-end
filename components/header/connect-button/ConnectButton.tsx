import { useState } from "react";
import { DownArrow } from "../../icons";
import { ConnectModal } from "./ConnectModal";

export const ConnectButton = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center rounded-full bg-button-connect dark:bg-dark-button-connect overflow-hidden">
      <button className="text-button dark:text-dark-button py-2.5 pr-2 pl-3 leading-[normal] font-semibold hover:text-button-connect hover:dark:text-dark-button-connect transition-text duration-[125ms] ease-in">
        Connect
      </button>
      <div className="bg-button dark:bg-dark-button w-px h-5" />
      <button
        className={`py-2.5 pr-4 pl-1`}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <div
          className={`text-button dark:text-dark-button ${
            isModalOpen ? `rotate-180` : ""
          }`}
        >
          <DownArrow />
        </div>
      </button>
      {isModalOpen && (
        <ConnectModal
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

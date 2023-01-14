import { ReactElement } from "react";

interface ISettingsModalGroupButtonProps {
  icon: ReactElement;
  hoverText: string;
  onClick: () => void;
}

export const SettingsModalGroupButton = ({
  icon,
  hoverText,
  onClick,
}: ISettingsModalGroupButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        className="flex justify-center items-center bg-tigres-row-button dark:bg-dark-tigres-row-button peer rounded-xl h-8 w-8"
      >
        {icon}
      </button>
      <span className="absolute flex justify-center peer-hover:opacity-100 opacity-0 text-xs dark:text-white text-tigres-black top-14">
        {hoverText}
      </span>
    </div>
  );
};

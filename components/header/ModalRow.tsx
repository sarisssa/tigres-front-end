import { ReactNode } from "react";

interface ModalRowProps {
  children: ReactNode;
  onClick: () => void;
}

export const ModalRow = ({ children, onClick }: ModalRowProps) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-between py-3 px-2 mt-1 dark:text-dark-tigres-gray text-tigres-gray text-sm hover:text-black hover:dark:text-white hover:bg-modal-row-hover hover:dark:bg-dark-modal-row-hover transition-all duration-[125ms] ease-in rounded-xl leading-[normal]"
    >
      {children}
    </button>
  );
};

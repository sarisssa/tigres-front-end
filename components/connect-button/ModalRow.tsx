import { ReactNode } from "react";

interface ModalRowProps {
  children: ReactNode;
}

export const ModalRow = ({ children }: ModalRowProps) => {
  return (
    <button className="flex justify-between py-3 px-2 text-tigres-gray text-sm hover:text-white hover:bg-modal-row-hover transition-all duration-[125ms] ease-in rounded-xl leading-[normal]">
      {children}
    </button>
  );
};

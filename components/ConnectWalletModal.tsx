import Image from "next/image";
import { Close } from "./icons";

interface IConnectWalletModalProps {
  onClose: () => void;
}

export function ConnectWalletModal({ onClose }: IConnectWalletModalProps) {
  return (
    <div
      onClick={onClose}
      className="fixed flex justify-center items-center inset-0 bg-black/[0.4]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col font-tigres-black bg-white dark:bg-tigres-black rounded-[20px] w-[50vw] max-w-[420px] max-h-[90vh] border dark:border-dark-input-background"
      >
        <div className="flex justify-between p-4 font-semibold text-tigres-black dark:text-white">
          <h2>Connect a wallet</h2>
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className="px-4 pb-4 flex flex-col gap-4">
          <button className="flex justify-start bg-tigres-row-button p-4 rounded-xl w-full items-center font-semibold text-tigres-black dark:text-white dark:bg-dark-tigres-row-button hover:opacity-60 transition duration-[125ms]">
            <div className="pr-3 inline-flex">
              <Image
                src="/wallet/metamask.png"
                alt="MetaMask Logo"
                height={28}
                width={28}
              />
            </div>
            <span>MetaMask</span>
          </button>
          <div className="py-1 px-4 w-full">
            <span className="font-normal text-tigres-grey dark:text-tigres-placeholder">
              By connecting a wallet, you agree to Tigres Labs’{" "}
              <span className="text-button dark:text-dark-button-active hover:opacity-60">
                Terms of Service
              </span>{" "}
              and consent to its{" "}
              <span className="text-button dark:text-dark-button-active hover:opacity-60">
                Privacy Policy
              </span>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 1. Add state to decide whether the modal should be shown or not
 * 2. Create Modal component
 * 3. Conditionally render the Modal
 * 4. Want a darker background? Add a container with position `fixed` and inset `0` and give it a background with low opacity
 * 5. Add the modal div itself and give it a (max) width. Height will be decided automatically since it grows based on the content
 * 6. Style the modal and fill it with content
 */

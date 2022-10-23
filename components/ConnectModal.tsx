import DownArrow from "./icons/DownArrow";
import Sun from "./icons/Sun";

export const ConnectModal = () => {
  return (
    <div className="flex flex-col justify-center border border-tigres-gray border-opacity-[14%] bg-modal-background px-2 py-4 w-80 rounded-xl absolute top-[72px] right-5 shadow-2xl">
      <button className="text-center bg-button mx-auto rounded-xl font-semibold h-11 w-72">
        Connect wallet
      </button>
      <hr className="my-4 border-tigres-gray border-opacity-[14%]" />
      <button className="flex justify-between py-3 px-2 text-tigres-gray text-sm hover:text-white hover:bg-modal-row-hover transition-all duration-[125ms] ease-in rounded-xl leading-[normal]">
        <span>Language</span>
        <div className="flex justify-between">
          <span>EN</span>
          <div className="-rotate-90 stroke-tigres-gray">
            <DownArrow size={16} />
          </div>
        </div>
      </button>
      <button className="flex justify-between py-3 px-2 text-tigres-gray text-sm hover:text-white hover:bg-modal-row-hover transition-all duration-[125ms] ease-in rounded-xl leading-[normal]">
        <span>Light theme</span>
        <Sun />
      </button>
    </div>
  );
};

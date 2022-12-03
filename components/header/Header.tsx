import { LinkButton } from "../dummy/LinkButton";
import { ConnectButton } from "./connect-button/ConnectButton";

export const Header = () => {
  return (
    <div className="flex justify-between px-5 py-3">
      <div className="flex gap-2">
        <LinkButton href="/swap">Swap</LinkButton>
        <LinkButton
          href="/stake"
          className="!text-tigres-gray !dark:text-dark-tigres-gray"
        >
          Stake
        </LinkButton>
        <LinkButton
          href="/pool"
          className="!text-tigres-gray !dark:text-dark-tigres-gray"
        >
          Pool
        </LinkButton>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
};

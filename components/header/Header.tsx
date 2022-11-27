import { LinkButton } from "../dummy/LinkButton";
import { ConnectButton } from "./connect-button/ConnectButton";

export const Header = () => {
  return (
    <div className="flex justify-between px-5 py-3">
      <div className="flex gap-2">
        <LinkButton href="/swap">Swap</LinkButton>
        <LinkButton href="/stake" color="rgb(153, 161, 189)">
          Stake
        </LinkButton>
        <LinkButton href="/pool" color="rgb(153, 161, 189)">
          Pool
        </LinkButton>
      </div>
      <div>
        <ConnectButton />
      </div>
    </div>
  );
};

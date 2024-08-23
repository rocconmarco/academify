import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return connectors
    .slice(0, 4)
    .map((connector) => (
      <WalletOption
        key={connector.uid}
        connector={connector}
        onClick={() => connect({ connector })}
      />
    ));
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  const normalizedConnectorName = connector.name
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <button
      disabled={!ready}
      onClick={onClick}
      className="px-4 mt-4 mr-4 h-12 border-2 border-black rounded-lg hover:bg-owlBeige"
    >
      <div className="flex items-center">
        <div className="flex items-center justify-start gap-2 w-72">
          <img
            className={ready ? "brightness-100 h-6" : "opacity-50 h-6"}
            src={`/wallet-connectors/${normalizedConnectorName}-logo.png`}
          ></img>
          <strong>
            <p className={ready ? "text-black" : "text-slate-500"}>
              {connector.name}
            </p>
          </strong>
        </div>
        <FaArrowRight />
      </div>
    </button>
  );
}

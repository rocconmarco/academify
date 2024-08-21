import { useAccount, useBalance, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const {data: balanceData, isLoading: balanceLoading} = useBalance({address: address})

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      <h2 className="font-bold text-lg">Address:</h2>
      {address && (
        <div className="text-lg">
          {ensName ? `${ensName} (${address})` : address}
        </div>
      )}
      <h2 className="font-bold text-lg">Balance:</h2>
      {balanceLoading ? (
        <div>Loading balance...</div>
      ) : (
        balanceData && (
          <div className="text-lg">
            {balanceData.formatted} {balanceData.symbol}
          </div>
        )
      )}
      <div className="flex justify-center">
        <button className="px-4 h-12 mt-4 border-2 font-bold border-black rounded-lg hover:bg-owlBeige" onClick={() => disconnect()}>Disconnect</button>
      </div>
    </div>
  );
}

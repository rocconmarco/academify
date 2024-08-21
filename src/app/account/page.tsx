"use client";

import { useAccount } from "wagmi";
import { Account } from "../../components/wallet/account";
import { WalletOptions } from "../../components/wallet/wallet-options";

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export default function ArticleDetailPage() {
  const { isConnected } = useAccount();
  return (
    <div className="min-h-screen bg-backgroundColor p-8 px-10 pt-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 mr-3">{isConnected ? "Your Account" : "Connect your wallet"}</h1>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
}

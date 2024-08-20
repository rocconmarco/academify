"use client"

import { useAccount } from "wagmi"
import { Account } from "../../components/wallet/account"
import { WalletOptions } from '../../components/wallet/wallet-options'

function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
  }
  

export default function ArticleDetailPage() {
    return (
        <div className="min-h-screen bg-backgroundColor p-8 px-10 pt-24 flex flex-col">
            <div>Questa è la pagina per connettere il wallet</div>
            <div className="flex h-36">
                <ConnectWallet />
            </div>
            
        </div>
        
    )
}
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID!;

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [walletConnect({ projectId }), metaMask(), coinbaseWallet(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});

import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { coinbaseWallet, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "ca9907de3a1896e533892de8384b4e5f";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [walletConnect({ projectId }), metaMask(), coinbaseWallet(), safe()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

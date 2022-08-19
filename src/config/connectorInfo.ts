import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { RPC_URL } from "./chainInfo";

export const walletconnect = new WalletConnectConnector({
    rpc: {
        1: RPC_URL,
    },
    qrcode: true,
});
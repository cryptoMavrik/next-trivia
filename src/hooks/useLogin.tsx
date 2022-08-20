import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { useCallback } from "react";
import { walletconnect } from "../config/connectorInfo";
import { switchNetwork } from "../utils/switchNetwork";
import useGame from "./useGame";

export type Login = () => void;
export type AuthType = {
    login: Login;
    logout: () => void;
};

export const connectorLocalStorageKey = "connectorId";

const useLogin = (): AuthType => {
    const { activate, deactivate } = useWeb3React();
    const { handleNext } = useGame()

    const login = useCallback(() => {
        try {
            activate(walletconnect, async (error: Error) => {
                if (error instanceof UnsupportedChainIdError) {
                    await switchNetwork(1);
                    alert("Unsupported Chain Id. Check wallet and try again.");
                } else if (error instanceof UserRejectedRequestErrorWalletConnect) {
                    walletconnect.walletConnectProvider = undefined;
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    return;
                } else {
                    console.log(error.message);
                }
            })
                .then(() => {
                    window?.localStorage.setItem(
                        connectorLocalStorageKey,
                        "walletconnect"
                    );
                })
                .catch((e: any) => {
                    alert(e.error ? e.error.message : e.message);
                });
        } catch (error: any) {
            alert(error.message);
        }
    }, [activate]);

    return { login, logout: deactivate };
};

export default useLogin;

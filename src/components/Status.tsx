import { useWeb3React } from "@web3-react/core";
import React from "react";
import { BASE_EXPLORER_URL } from "../config/chainInfo";
import useLogin from "../hooks/useLogin";

const Status: React.FC = () => {
    const { active, account } = useWeb3React();
    const { login, logout } = useLogin();
    if (active) {
        return (
            <div className="lg:text-xl flex items-center justify-between absolute top-0 left-0 p-3 w-full">
                <div className="flex text-sm md:text-md items-center">
                    <div className="flex items-center w-full justify-start">
                        <span className="rounded-full bg-green-600 w-[1rem] h-[1rem] flex mr-2 lg:mx-3 justify-between" />
                        Connected with:&nbsp;
                    </div>
                    <span className="lg:pl-3 text-blue-300 font-bold">
                        <a
                            href={`${BASE_EXPLORER_URL}/address/${account}`}
                            rel="noreferrer"
                            target={"_blank"}
                        >
                            {account?.slice(0, 6) + "..." + account?.slice(-4)}
                        </a>
                    </span>
                </div>
                <button className="text-red-800 text-sm md:text-md" onClick={logout}>
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <div className="text-xl flex items-center absolute top-0 left-0 p-3 w-full justify-between">
            <div className="flex items-center text-sm md:text-md w-full justify-start">
                <span className="rounded-full bg-red-600 w-[1rem] h-[1rem] flex mx-3 justify-between" />
                Not Connected
            </div>
            <button className="text-green-600 text-sm md:text-md" onClick={login}>
                Connect
            </button>
        </div>
    );
};

export default Status;

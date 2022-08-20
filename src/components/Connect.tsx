import React from "react";
import useLogin from "../hooks/useLogin";

const Connect: React.FC<{ handleNewGame: () => void }> = ({
    handleNewGame,
}) => {
    const { login } = useLogin();

    return (
        <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 min-h-[30rem] bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[4rem]">
                <h1 className="text-3xl lg:text-6xl font-bold text-blue-400">
                    BLOCKCHAIN TRIVIA
                </h1>
                <div className="p-5" />
                <div className="flex flex-col w-full h-full justify-center items-center p-5 text-blue-200">
                    <span className="p-5 text-2xl ">Connect wallet to play!</span>
                    <button
                        className="rounded-md bg-blue-600 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                        onClick={login}
                    >
                        Connect
                    </button>
                    <button className="pt-5" onClick={() => handleNewGame()}>
                        Skip for now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Connect;

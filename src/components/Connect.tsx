import Head from "next/head";
import React from "react";
import useLogin from "../hooks/useLogin";
import Status from "./Status";

const Connect: React.FC<{ handleNext: () => void }> = ({ handleNext }) => {
    const { login } = useLogin();

    return (
        <div>
            <Head>
                <title>How to play</title>
                <meta name="description" content="A simple crypto trivia game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-blue-500 bg-[#050608] p-5 pt-10 md:p-0">
                <Status />
                <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full md:w-4/5 lg:w-3/5 min-h-[30rem] bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center py-[4rem] xl:px-[4rem]">

                        <h1 className="text-3xl lg:text-6xl font-bold text-blue-400">
                            BLOCKCHAIN TRIVIA
                        </h1>
                        <h2 className="text-lg lg:text-xl">
                            Are you a blockchain master?
                        </h2>
                        <div className="p-5" />
                        <div className="flex flex-col w-full h-full justify-center items-center p-5 text-blue-200">
                            <span className="p-3 text-2xl ">Connect wallet to play!</span>
                            <button
                                className="rounded-md bg-blue-700 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                                onClick={login}
                            >
                                Connect
                            </button>
                            <button className="pt-9 hover:text-blue-600" onClick={handleNext}>
                                Skip for now
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Connect;

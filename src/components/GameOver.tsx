import Head from "next/head";
import React from "react";
import Status from "./Status";

const GameOver: React.FC<{ newGame: () => void; score: number }> = ({
    newGame,
    score,
}) => {
    return (
        <div>
            <Head>
                <title>Game Over</title>
                <meta name="description" content="A simple crypto trivia game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-blue-500 bg-[#050608]">
                <Status />
                <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[4rem]">
                        <h2 className="text-red-500 text-7xl mb-[1rem]">Game Over</h2>
                        <h3 className="text-red-100 text-2xl mb-[2rem]">
                            You missed too many questions
                        </h3>
                        <div className="text-3xl text-blue-300 border border-blue-200 p-5 my-[3rem] min-w-1/3 mt-2 rounded-3xl bg-[#090b0e] flex justify-center">
                            <p className="mr-auto">Score:</p>&nbsp;
                            <p className={score > 0 ? "text-green-500" : "text-red-500"}>
                                {score}
                            </p>
                        </div>
                        <button
                            onClick={newGame}
                            className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                        >
                            Try again?
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GameOver;

import Head from "next/head";
import React, { Dispatch, SetStateAction } from "react";
import { NUMBER_OF_ROUNDS } from "../config";

const HowToPlay: React.FC<{ showHelp: Dispatch<SetStateAction<boolean>> }> = ({
    showHelp,
}) => {
    return (
        <div>
            <Head>
                <title>How to play</title>
                <meta name="description" content="A simple crypto trivia game" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="text-blue-500 bg-[#050608] p-5 pt-10 md:p-0">
                <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
                    <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 min-h-[30rem] bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[4rem]">
                        <h1 className="text-3xl lg:text-5xl font-bold text-blue-400">
                            How to play
                        </h1>
                        <div className="grid md:grid-cols-2 text-blue-200 text-xl w-2/3 px-[2rem]">
                            <span className="flex justify-center items-center w-full text-2xl py-[2rem] font-semibold">
                                1. Select an answer
                            </span>
                            <span className="flex justify-center items-center w-full text-2xl py-[2rem] font-semibold">
                                2. Click Submit
                            </span>
                        </div>
                        <h1 className="text-xl lg:text-2xl font-bold text-blue-400">
                            Things to note
                        </h1>
                        <div className="grid grid-cols-1 justify-center items-start w-full">
                            <div className="pb-[.5rem] text-blue-200 text-xl w-2/3 px-[2rem]">
                                - {NUMBER_OF_ROUNDS} rounds
                            </div>
                            <div className="pb-[.5rem] text-blue-200 text-xl w-2/3 px-[2rem]">
                                - 3 questions per round
                            </div>
                            <div className="pb-[.5rem] text-blue-200 text-xl w-2/3 px-[2rem]">
                                - Correct answers add points to total
                            </div>
                            <div className="pb-[.5rem] text-blue-200 text-xl w-2/3 px-[2rem]">
                                - Incorrect answers deduct points from total
                            </div>
                            <div className="pb-[3rem] text-blue-200 text-xl w-2/3 px-[2rem]">
                                - 3 wrong answers = Game Over
                            </div>
                        </div>
                        <div className="flex justify-center items-center pb-[1rem] text-blue-500 font-bold text-3xl w-2/3 px-[2rem]">
                            Scoring
                        </div>
                        <div className="grid md:grid-cols-3 justify-center items-center pb-[2rem] text-blue-200 text-lg w-full px-[2rem]">
                            <div className="flex flex-col justify-center items-center pb-[3rem] text-xl w-full px-[2rem]">
                                Round 1
                                <div className="text-3xl text-blue-300">100 points</div>
                            </div>
                            <div className="flex flex-col justify-center items-center pb-[3rem] text-xl w-full px-[2rem]">
                                Round 2<div className="text-3xl text-blue-300">200 points</div>
                            </div>
                            <div className="flex flex-col justify-center items-center pb-[3rem] text-xl w-full px-[2rem]">
                                Round 3<div className="text-3xl text-blue-300">300 points</div>
                            </div>
                        </div>
                        <button
                            onClick={() => showHelp(false)}
                            className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HowToPlay;

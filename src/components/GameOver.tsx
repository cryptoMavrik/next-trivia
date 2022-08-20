import Head from 'next/head'
import React from 'react'
import useGame from '../hooks/useGame'
import Status from './Status'

const GameOver = () => {
    const { score, handleNewGame } = useGame()
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
                        <h2 className="text-red-500 text-6xl mb-[2rem]">Game Over</h2>
                        <div className="text-3xl text-blue-300 border border-blue-200 p-5 my-[3rem] w-1/3 mt-2 rounded-3xl bg-[#090b0e] flex justify-center">
                            <p className=" mr-auto">Score:</p>
                            {score}
                        </div>
                        <button
                            onClick={handleNewGame}
                            className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                        >
                            Go again
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default GameOver
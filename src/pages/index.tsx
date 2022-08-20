import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Connect from "../components/Connect";
import GameOver from "../components/GameOver";
import HowToPlay from "../components/HowToPlay";
import Status from "../components/Status";
import { questions } from "../config/questions";
import useGame from "../hooks/useGame";

const Home: NextPage = () => {
  const {
    handleNewGame,
    handleNext,
    handleSubmitAnswer,
    questionId,
    round,
    score,
    strikes,
    showResults,
    selected,
    setSelected,
  } = useGame();
  const selection = selected;
  const [showHelp, setShowHelp] = useState(true);
  const { active } = useWeb3React();

  if (round === 4) {
    return (
      <div>
        <Head>
          <title>Game Over</title>
          <meta name="description" content="A simple crypto trivia game" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="text-blue-500 bg-[#050608]">
          <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[4rem]">
              <h2 className="text-green-500 text-6xl font-bold mb-[2rem]">
                You made it!
              </h2>
              <h2 className="text-blue-300 text-3xl mb-[2rem]">
                You are a blockchain master!
              </h2>
              <div className="text-3xl text-blue-300 border border-blue-200 p-5 my-[3rem] w-1/3 mt-2 rounded-3xl bg-[#090b0e] flex justify-center">
                <p className=" mr-auto">Score:</p>
                {score}
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <button
                  onClick={() => { }}
                  className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                  disabled={!active}
                >
                  Submit Score
                </button>
                <button
                  onClick={handleNewGame}
                  className="rounded-md bg-green-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-green-600 transition-transform active:translate-y-1"
                >
                  Go again
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  if (strikes === 3) {
    return <GameOver newGame={handleNewGame} score={score} />;
  }

  if (!questionId) {
    return <Connect handleNext={handleNext} />;
  }

  if (showHelp && questionId !== 0) {
    return <HowToPlay showHelp={setShowHelp} />;
  }

  return (
    <div>
      <Head>
        <title>Blockchain Trivia</title>
        <meta name="description" content="A simple crypto trivia game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-blue-500 bg-[#050608] p-5 pt-10 md:p-0">
        <Status />
        <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
          <div className="flex w-full md:w-2/3 lg:w-3/5  text-lg justify-between">
            <p>Value: {100 * round}</p>
          </div>
          <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 min-h-2/3 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[2rem] md:p-[4rem]">
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-blue-400">
              Blockchain Trivia
            </h1>
            <h2 className="text-blue-700 text-xl lg:text-2xl">Round {round}</h2>
            <>
              {questions.map((question, index) => {
                if (question.id === questionId) {
                  return (
                    <div
                      className="flex flex-col w-full h-full justify-center items-center lg:p-5"
                      key={index}
                    >
                      {showResults ? (
                        <div className="flex flex-col w-full items-center justify-center">
                          {selected === question.correctAnswer ? (
                            <div className="flex flex-col items-center justify-center font-bold text-xl">
                              <span className="p-5 text-green-500">
                                Good Job!
                              </span>
                              <div className="p-3">Correct Answer:</div>
                              <div className="flex w-full h-[5rem] p-5 border border-blue-100 justify-center items-center rounded-xl text-blue-200 font-semibold">
                                {question.choices[question.correctAnswer]}
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center font-bold text-xl">
                              <span className="p-5 text-red-500">
                                Nope! Not Correct
                              </span>
                              <div className="p-3">Correct Answer:</div>
                              <div className="flex w-full h-[5rem] p-5 border border-green-400 justify-center items-center rounded-xl text-blue-200 font-semibold">
                                {question.choices[question.correctAnswer]}
                              </div>
                            </div>
                          )}
                          <div className="p-5"></div>
                          <button
                            onClick={handleNext}
                            className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                          >
                            Next
                          </button>
                        </div>
                      ) : (
                        <>
                          <h2 className="xs:text-md sm:text-xl lg:text-3xl text-blue-200 p-2">
                            {question.phrase}
                          </h2>
                          <div className="p-5" />
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full m-auto justify-center rounded-xl overflow-hidden">
                            {Object.keys(question.choices).map(
                              (choice: string, index) => {
                                return (
                                  <button
                                    key={index}
                                    onClick={() => setSelected(index + 1)}
                                    className={`flex w-full h-[5rem] p-2 md:p-5 border border-blue-200 justify-center items-center rounded-xl text-blue-200 font-semibold + ${selected &&
                                      selection === index + 1 &&
                                      "bg-blue-700"
                                      }`}
                                  >
                                    {question.choices[Number(choice)]}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                }
              })}
              {!showResults &&
                questionId &&
                (questionId <= questions.length ? (
                  <button
                    onClick={handleSubmitAnswer}
                    className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] mt-5 font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                  >
                    Submit
                  </button>
                ) : (
                  <div className="flex flex-col w-full h-full justify-start items-center p-5">
                    Game Over
                  </div>
                ))}
            </>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

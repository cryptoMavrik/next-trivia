import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Connect from "../components/Connect";
import GameOver from "../components/GameOver";
import HowToPlay from "../components/HowToPlay";
import Score from "../components/Score";
import Status from "../components/Status";
import Winner from "../components/Winner";
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
    setState,
  } = useGame();
  const selection = selected;
  const [showHelp, setShowHelp] = useState(true);
  const { active } = useWeb3React();

  if (questionId && questionId > questions.length) {
    return (
      <Winner score={score} active={active} handleNewGame={handleNewGame} />
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
        <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center relative">
          <div className="relative flex flex-col w-full md:w-2/3 lg:w-3/5 min-h-2/3 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[2rem] md:p-[4rem] pb-0 md:pb-1">
            <div className="w-[2rem] h=[2rem] absolute top-0 right-0 m-5" onClick={() => setShowHelp(true)}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" />
              </svg>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-blue-400">
              Blockchain Trivia
            </h1>
            <div className="flex flex-col justify-between items-center w-1/2">
              <h2 className="text-blue-700 text-xl lg:text-2xl">
                Round {round}
              </h2>
              <h2 className="text-blue-700 text-lg lg:text-xl">
                {questionId % 3 !== 0 ? questionId % 3 : 3} of 3
              </h2>
            </div>
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
                                {questionId === 3 ? "Getting warmed up" : questionId === 6 ? "Almost there..." : "Good Job!"}
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
                            {questionId === 9 ? "See Final Score" : "Next question"}
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
                                    onClick={() => setState((prev) => ({
                                      ...prev,
                                      selected: index + 1
                                    }))
                                    }
                                    className={`flex w-full h-[5rem] p-2 md:p-5 border-2 border-blue-200 focus:border-blue-500 hover:border-blue-500 justify-center items-center rounded-xl text-blue-200 font-semibold + ${selected &&
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
              {
                !showResults &&
                questionId &&
                <button
                  onClick={handleSubmitAnswer}
                  className="rounded-md bg-blue-800 text-blue-200 w-auto px-[3rem] py-[.5rem] mt-5 font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                >
                  Submit
                </button>
              }
            </>

            <Score strikes={strikes} score={score} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

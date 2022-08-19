import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BASE_EXPLORER_URL } from "../config/chainInfo";
import { questions } from "../config/questions";
import useLogin from "../hooks/useLogin";

const Home: NextPage = () => {
  const { login, logout } = useLogin();
  const { account, active } = useWeb3React();
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>();
  const [questionId, setQuestionId] = useState(1);
  const [toggleResults, setToggleResults] = useState(false);

  const handleSelect = (selection: number) => {
    console.log("Selection", selection);

    setSelectedAnswer(selection);
  };

  const handleSubmit = () => {
    console.log("Submitted answer", selectedAnswer);
    console.log("Correct answer", questions[questionId - 1]?.correctAnswer);

    if (selectedAnswer === questions[questionId - 1].correctAnswer) {
      console.log("You got it", round);
      setScore((prev) => prev + 100 * round);
    } else {
      console.log("Failed");
      setScore((prev) => prev - 100 * round);
    }
    setToggleResults(true);
  };

  const handleNewGame = () => {
    if (round === 4) {
      setScore(0);
      setRound(1);
      setQuestionId(1);
      setSelectedAnswer(undefined);
      setToggleResults(false);
      return;
    }
  };

  const handleNext = () => {
    if (questionId > questions.length) {
      setToggleResults(false);
      return;
    } else {
      const newQuestionId = questionId + 1;
      setQuestionId(newQuestionId);
      setSelectedAnswer(undefined);
      setToggleResults(false);
    }
    if (questionId >= 3 * round && round <= 3) {
      console.log("New round");

      setRound((prev) => prev + 1);
    }
  };

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
              <h2 className="text-red-500 text-5xl">Game Over</h2>
              <div className="p-[3rem]">
                <p className="text-xl">Score: {score}</p>
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
    );
  }

  return (
    <div>
      <Head>
        <title>Trivia</title>
        <meta name="description" content="A simple crypto trivia game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-blue-500 bg-[#050608] p-5 pt-10">
        <div className="container m-auto w-full min-h-screen flex flex-col justify-center items-center">
          <div className="flex w-full md:w-2/3 lg:w-3/5  text-lg justify-between">
            <p>Round {round}</p>
            <p>Points: {100 * round}</p>
          </div>
          <div className="flex flex-col w-full md:w-2/3 lg:w-3/5 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-xl justify-start items-center p-[4rem]">
            <h1 className="text-3xl lg:text-5xl font-bold text-blue-400">
              Blockchain Trivia
            </h1>
            {active ? (
              <>
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
                  <button
                    className="text-red-800 text-sm md:text-md"
                    onClick={logout}
                  >
                    Disconnect
                  </button>
                </div>
                <div className="text-xl text-blue-300">Score: {score}</div>
              </>
            ) : (
              <div className="text-xl flex items-center absolute top-0 left-0 p-3 w-full justify-between">
                <div className="flex items-center w-full justify-start">
                  <span className="rounded-full bg-red-600 w-[1rem] h-[1rem] flex mx-3 justify-between" />
                  Not Connected
                </div>
              </div>
            )}
            {!account ? (
              <>
                <div className="p-5" />
                <div className="flex flex-col w-full h-full justify-center items-center p-5 text-blue-200">
                  <span className="p-5 text-2xl ">Connect wallet to play!</span>
                  <button
                    className="rounded-md bg-blue-600 w-auto px-[3rem] py-[1rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1"
                    onClick={login}
                  >
                    Connect
                  </button>
                </div>
              </>
            ) : (
              <>
                {questions.map((question, index) => {
                  if (question.id === questionId) {
                    return (
                      <div
                        className="flex flex-col w-full h-full justify-center items-center lg:p-5"
                        key={index}
                      >
                        {toggleResults ? (
                          <div className="flex flex-col w-full items-center justify-center">
                            {selectedAnswer === question.correctAnswer ? (
                              <div className="flex flex-col items-center justify-center text-green-500 font-bold text-xl">
                                <span className="p-5">You got it right!</span>
                                <div className="flex w-full h-[5rem] p-5 border border-blue-100 justify-start items-center rounded-xl text-blue-200 font-semibold">
                                  Answer: {question.choices[selectedAnswer]}
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center font-bold text-xl">
                                <span className="p-5 text-red-500">
                                  Nope! Not Correct
                                </span>
                                <div className="p-3">Correct Answer:</div>
                                <div className="flex w-full h-[5rem] p-5 border border-blue-100 justify-center items-center rounded-xl text-blue-200 font-semibold">
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
                            <div className="grid lg:grid-cols-2 gap-3 w-full m-auto justify-center rounded-xl overflow-hidden">
                              {Object.keys(question.choices).map(
                                (choice: string, key) => {
                                  return (
                                    <button
                                      key={key}
                                      onClick={() => handleSelect(key + 1)}
                                      className={`flex w-full h-[5rem] p-2 md:p-5 border border-blue-200 justify-start items-center rounded-xl text-blue-200 font-semibold + ${selectedAnswer &&
                                        selectedAnswer === key + 1 &&
                                        "bg-blue-700"
                                        }`}
                                    >
                                      {key + 1}.{" "}
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
                {!toggleResults &&
                  (questionId <= questions.length ? (
                    <button
                      onClick={handleSubmit}
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

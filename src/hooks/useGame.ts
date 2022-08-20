import React, { useState } from "react";
import { questions } from "../config/questions";
import { GameType } from "./types";

const useGame = (): GameType => {
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(1);
    const [strikes, setStrikes] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [selected, setSelected] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [used, setUsed] = useState<number[]>([]);

    const getNextQuestion = () => {
        let randomNumber = Math.floor((Math.random() * 100) % 10);
        if (!used.includes(randomNumber) || questionId !== 0) {
            console.log("USED", used, randomNumber);
            setQuestionId(randomNumber > 0 ? randomNumber : 1);
        } else {
            getNextQuestion();
        }
    };

    const handleNewGame = () => {
        setUsed([]);
        setQuestionId(0);
        setScore(0);
        setRound(1);
        setStrikes(0);
        setSelected(0);
        handleNext();
        setShowResults(false);
        console.log("Strikes", strikes);
    };

    const handleSubmitAnswer = () => {
        if (questionId && selected === questions[questionId - 1].correctAnswer) {
            const _score = score + 100 * round;
            setScore(_score);
        } else {
            const _strikes = strikes + 1;
            const _score = score - 100 * round;
            console.log("STRIKES", _strikes);

            setStrikes(_strikes);
            setScore(_score);
        }
        setShowResults(true);
    };

    const handleNext = () => {
        setQuestionId((prev) => prev + 1);
        setSelected(0);
        setShowResults(false);
        if (questionId >= 3 * round && round <= 3) {
            setRound((prev) => prev + 1);
        }
    };

    return {
        score,
        round,
        strikes,
        used,
        questionId,
        showResults,
        getNextQuestion,
        handleSubmitAnswer,
        handleNewGame,
        handleNext,
        setSelected,
        selected,
    };
};

export default useGame;

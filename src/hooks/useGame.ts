import React, { useEffect, useState } from "react";
import { questions } from "../config/questions";
import { GameType, GameState } from "./types";

const initialState: GameState = {
    questionId: 0,
    round: 1,
    score: 0,
    selected: 0,
    strikes: 0,
    used: []
}

const useGame = (): GameType => {

    // const [score, setScore] = useState(0);
    // const [round, setRound] = useState(1);
    // const [strikes, setStrikes] = useState(0);
    // const [questionId, setQuestionId] = useState(0);
    // const [selected, setSelected] = useState(0);
    // const [used, setUsed] = useState<number[]>([]);
    const [state, setState] = useState(initialState)
    const [showResults, setShowResults] = useState(false);
    const { questionId, round, score, selected, strikes, used } = state

    const handleNewGame = () => {
        setState({
            questionId: 1,
            round: 1,
            score: 0,
            selected: 0,
            strikes: 0,
            used: []
        })
        setShowResults(false);
        console.log("New Game", state);

    };

    const handleSubmitAnswer = () => {
        if (questionId && selected === questions[questionId - 1].correctAnswer) {
            const _score = score + 100 * round;
            setState({
                ...state,
                score: _score,
            });
        } else {
            const _strikes = strikes + 1;
            const _score = score - 100 * round;
            setState({
                ...state,
                score: _score,
                strikes: _strikes
            });
        }
        setShowResults(true);
    };

    const handleNext = () => {
        const next = questionId + 1
        setState({
            ...state,
            questionId: next,
            selected: 0
        })
        setShowResults(false);
    };

    useEffect(() => {
        if (questionId >= 4 * round && round <= 3) {
            const nextRound = round + 1
            setState({
                ...state,
                round: nextRound
            })
        }
    }, [questionId])


    return {
        score,
        round,
        strikes,
        used,
        questionId,
        showResults,
        handleSubmitAnswer,
        handleNewGame,
        handleNext,
        setState,
        selected,
    };
};

export default useGame;

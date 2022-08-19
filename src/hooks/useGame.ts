import React, { useEffect, useRef, useState } from 'react'
import { questions } from '../config/questions'
import { GameType } from './types'

const useGame = (): GameType => {
    const [score, setScore] = useState<number>(0)
    const [round, setRound] = useState<number>(1)
    const [questionId, setQuestionId] = useState<number>(Math.floor(Math.random() * 100 % 10))
    const [selected, setSelected] = useState<number>(0)
    const [showResults, setShowResults] = useState(false)
    const used = useRef<number[]>([])

    useEffect(() => {
        console.log("NEW SELECTION", selected);

    }, [selected])

    const getNextQuestion = () => {
        let randomNumber = Math.floor(Math.random() * 100 % 10)
        if (used.current.includes(randomNumber)) {
            randomNumber = Math.floor(Math.random() * 100 % 10)
        }
        console.log("USED", used.current, randomNumber);
        setQuestionId(randomNumber > 0 ? randomNumber : 1)
    }

    const handleNewGame = () => {
        if (round >= 4) {
            used.current = []
            setScore(0);
            setRound(1);
            getNextQuestion();
            setSelected(0);
            setShowResults(false);
        }
    };

    const handleSubmitAnswer = () => {
        if (selected === questions[questionId - 1].correctAnswer) {
            setScore((prev) => prev + 100 * round);
        } else {
            setScore((prev) => prev - 100 * round);
        }
        setShowResults(true);
    };

    const handleNext = () => {
        if (questionId > questions.length) {
            setShowResults(false);
            return;
        } else {
            used.current.push(questionId)
            getNextQuestion()
            setSelected(0);
            setShowResults(false);
        }
        if (used.current.length >= 3 * round && round <= 3) {
            setRound((prev) => prev + 1);
        }
    };

    return {
        score,
        round,
        used: used.current,
        questionId,
        showResults,
        getNextQuestion,
        handleSubmitAnswer,
        handleNewGame,
        handleNext,
        setSelected,
        selected
    }
}

export default useGame
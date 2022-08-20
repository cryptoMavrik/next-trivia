import { Dispatch, SetStateAction } from "react";

type Handler = () => void;

export type GameType = {
    score: number;
    round: number;
    strikes: number;
    used: number[];
    questionId?: number;
    selected: number;
    showResults: boolean;
    getNextQuestion: Handler;
    handleSubmitAnswer: Handler;
    handleNewGame: Handler;
    handleNext: Handler;
    setSelected: Dispatch<SetStateAction<number>>;
};

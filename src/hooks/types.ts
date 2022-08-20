import { Dispatch, SetStateAction } from "react";

type Handler = () => void;

export interface GameState {
    score: number;
    round: number;
    strikes: number;
    questionId: number;
    selected: number;
    used: number[];
}

export type GameType = {
    score: number;
    round: number;
    strikes: number;
    used: number[];
    questionId?: number;
    selected: number;
    showResults: boolean;
    handleSubmitAnswer: Handler;
    handleNewGame: Handler;
    handleNext: Handler;
    setState: Dispatch<SetStateAction<GameState>>;
};

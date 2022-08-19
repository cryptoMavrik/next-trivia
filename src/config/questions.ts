type QuestionType = {
    id: number;
    phrase: string;
    choices: {
        [key: number]: string
    }
    correctAnswer: number
}

export const questions: QuestionType[] = [
    {
        id: 1,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 1
    }
]

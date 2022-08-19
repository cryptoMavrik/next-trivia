export type QuestionType = {
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
    },
    {
        id: 2,
        phrase: "Who created Ethereum?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 4
    },
    {
        id: 3,
        phrase: "Who is Satoshi Nakamoto?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 2
    },
    {
        id: 4,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 4
    },
    {
        id: 5,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 1
    },
    {
        id: 6,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 2
    },
    {
        id: 7,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 2
    },
    {
        id: 8,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 4
    },
    {
        id: 9,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin"
        },
        correctAnswer: 1
    },
]

export type QuestionType = {
    id: number;
    phrase: string;
    choices: {
        [key: number]: string;
    };
    correctAnswer: number;
};

export const questions: QuestionType[] = [
    {
        id: 1,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 1,
    },
    {
        id: 2,
        phrase: "Who created Ethereum?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 4,
    },
    {
        id: 3,
        phrase: "Who is Satoshi Nakamoto?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Linus Torvalds",
            3: "Vitalik Buterin",
            4: "Craig Wright",
        },
        correctAnswer: 2,
    },
    {
        id: 4,
        phrase: "Who created Bitcoin?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 4,
    },
    {
        id: 5,
        phrase: "What is the target block time for Ethereum?",
        choices: {
            1: "1 hour",
            2: "2 minutes",
            3: "4 minutes",
            4: "30 minutes",
        },
        correctAnswer: 2,
    },
    {
        id: 6,
        phrase: "Which is true about the ERC1155 protocol?",
        choices: {
            1: "Enables NFTs",
            2: "Enables Semi-fungible tokens",
            3: "Creates ERC20 tokens",
            4: "Makes gas cheaper for transactions",
        },
        correctAnswer: 2,
    },
    {
        id: 7,
        phrase: "Question 7?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 2,
    },
    {
        id: 8,
        phrase: "Question 8?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 4,
    },
    {
        id: 9,
        phrase: "question 9?",
        choices: {
            1: "Satoshi Nakamoto",
            2: "Craig Wright",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 1,
    },
];

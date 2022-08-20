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
            1: "Craig Wright",
            2: "Satoshi Nakamoto",
            3: "Linus Torvalds",
            4: "Vitalik Buterin",
        },
        correctAnswer: 2,
    },
    {
        id: 2,
        phrase: "What does DEFI stand for?",
        choices: {
            1: "Don't ever forget it",
            2: "Delicate fingers",
            3: "Decentralized finance",
            4: "Decentralized fidelity",
        },
        correctAnswer: 3,
    },
    {
        id: 3,
        phrase: "What is the target block time for Ethereum?",
        choices: {
            1: "15 seconds",
            2: "2 seconds",
            3: "2 minutes",
            4: "10 minutes",
        },
        correctAnswer: 1,
    },
    {
        id: 4,
        phrase: "Who is the brainchild behind Ethereum's creation?",
        choices: {
            1: "Vitalik Buterin",
            2: "Craig Wright",
            3: "Satoshi Nakamoto",
            4: "Linus Torvalds",
        },
        correctAnswer: 1,
    },
    {
        id: 5,
        phrase: "Who is the real Satoshi Nakamoto?",
        choices: {
            1: "Craig Wright",
            2: "Linus Torvalds",
            3: "Nick Szabo",
            4: "None of these",
        },
        correctAnswer: 4,
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
        phrase: "What Was The First Thing Bought With Bitcoin?",
        choices: {
            1: "A cell phone",
            2: "A piece of property",
            3: "Pizza",
            4: "A rare CS:GO skin",
        },
        correctAnswer: 3,
    },
    {
        id: 8,
        phrase: "Which computer scientist's creation is the main inspiration for the EVM?",
        choices: {
            1: "Alan Turing",
            2: "Elon Musk",
            3: "Vitalik Buterin",
            4: "Guido Van Rassum",
        },
        correctAnswer: 1,
    },
    {
        id: 9,
        phrase: "How many characters are in a standard EVM wallet address?",
        choices: {
            1: "28",
            2: "32",
            3: "24",
            4: "42",
        },
        correctAnswer: 4,
    },
];

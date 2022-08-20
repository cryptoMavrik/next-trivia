// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Leaderboard {
    address owner;
    uint256 highscore;
    
    struct Score {
        address account;
        uint256 score;
    }

    mapping(address => uint256) public scores;

    Score[] highscores;

    event ScoreSaved(address indexed acount, uint256 score);

    constructor() {
        owner = msg.sender;
        highscore = 0;
    }

    function saveScore(uint256 _score) external {
        require(_score > scores[address(msg.sender)], "Not a high-score");
        emit ScoreSaved(address(msg.sender), _score);
        scores[address(msg.sender)] = _score;
        if (_score > highscore) {
                highscore = _score;
            }
        highscores.push(Score(address(msg.sender), _score));
    }

    function getHighScore() public view returns(uint256) {
        return highscore;
    }

    function getHighScores() public view returns(Score[] memory) {
        return highscores;
    }
}
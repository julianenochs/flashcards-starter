const Deck = require('../src/Deck');
class Turn {
    constructor(guess, card) {
        this.guess = guess; 
        this.card = card; 
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.card;
    }

    evaluateGuess(guess) {
        let checkGuess = guess === this.card.correctAnswer;
        this.giveFeedback(checkGuess);
        return checkGuess;
    }

    giveFeedback(evaluation) {
        return evaluation ? 'correct!' : 'incorrect!'
    }
}

module.exports = Turn;
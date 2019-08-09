class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess(guess) {
        return guess;
    }

    returnCard(card) {
        return card;
    }

    evaluateGuess(guess) {
        let checkGuess = guess === this.card.correctAnswer;
        this.giveFeedback(checkGuess);
        return checkGuess;
    }

    giveFeedback(evaluation) {
        return evaluation === true ? 'correct!' : 'incorrect!'
    }
}

module.exports = Turn;
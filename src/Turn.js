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
        return checkGuess;
    }

    giveFeedback(evaluation) {
        return evaluation === this.card.correctAnswer ? 'correct!' : 'incorrect!'
    }
}

module.exports = Turn;
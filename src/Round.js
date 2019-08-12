const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCardIndex = 0;
        this.currentCard = this.deck[this.currentCardIndex];
        this.turn;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.percentage = 0;
        this.round = 0;
    }

    returnCurrentCard() {
        return this.deck;
    }

    takeTurn(guess) {
        this.turns ++;
        this.turn = new Turn(guess, this.currentCard);
        this.turn.evaluateGuess(guess);
        if (this.turn.evaluateGuess(guess) === false) {
            this.incorrectGuesses.push(this.currentCard.id)
        } else {
            this.currentCardIndex++;
        }
    }

    calculatePercentCorrect() {
        return this.percentage = (this.incorrectGuesses.length / this.turns * 100)
    }

    endRound() {
        this.round ++;
        return `** Round over! ** You answered ${this.percentage}% of the questions correctly!`
    }
}

module.exports = Round;
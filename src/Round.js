const Turn = require('../src/Turn');
class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.currentCardIndex = 0;
        this.currentCard;
        this.turn;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.percentage = 0;
        this.round = 0;
    }

    returnCurrentCard() {
        this.currentCard = this.deck[this.currentCardIndex]
        return this.currentCard
    }

    takeTurn(guess) {
        this.turn = new Turn(guess, this.currentCard);
        this.turns ++;
        this.currentCardIndex ++
        let feedback = this.turn.giveFeedback(guess)
        if (this.turn.evaluateGuess(guess) === false) {
            this.incorrectGuesses.push(this.currentCard.id)
        } 
        return feedback
    }

    calculatePercentCorrect() {
       this.percentage = Math.round(100 - (this.incorrectGuesses.length * 100) / this.turns)
       return this.percentage
    }

    endRound() {
        this.round ++;
        console.log(`** Round over! ** You answered ${this.percentage}% of the questions correctly!`);
    }
}

module.exports = Round;
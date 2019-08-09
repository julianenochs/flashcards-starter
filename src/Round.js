const Deck = require('../src/Deck');

class Round {
    constructor(deck) {
        this.deck = deck;
    }

    returnCurrentCard() {
        console.log(Deck.cards)
        return this.deck = Deck.cards
    }
}

module.exports = Round;
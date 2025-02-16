const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
class Game {
  constructor() {
    this.currentRound;
  }

  newRound() {
    this.currentRound = new Round();
  }

  start() {
    let cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    let deck = new Deck(cards);
    let round = new Round(deck, this);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
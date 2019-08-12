const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
let deck;
let round;
let card1;
let card2;
let card3;

beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
});

describe('Round', () => {

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should return the current card', () => {
        expect(round.returnCurrentCard()).to.eql({'id': 1, 'question': 'What is Robbie\'s favorite animal', 'answers': ['sea otter', 'pug', 'capybara'], 'correctAnswer':'sea otter'});
    });

    it('should keep track of a players turns', () => {
        round.takeTurn();
        expect(round.turns).to.equal(1);
    });

    it('should keep the ID of incorrect guesses', () => {
        round.takeTurn('pug');
        expect(round.incorrectGuesses).to.eql([1]);
    });

    it('should calculate the percentage of correct guesses taken', () => {
        round.takeTurn('pug');
        round.takeTurn('sea otter');
        expect(round.calculatePercentCorrect()).to.eql(50)
    });

    it('should end a round', () => {
        round.takeTurn('pug');
        round.takeTurn('sea otter');
        round.calculatePercentCorrect();
        expect(round.endRound()).to.eql('** Round over! ** You answered 50% of the questions correctly!')
    });

});
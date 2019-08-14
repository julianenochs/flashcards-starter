const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

let turn;
let card;

beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
    deck = new Deck(card);
});

describe('Turn', () => {

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should accept a players guess', () => {
        expect(turn.guess).to.equal('pug');
    });

    it('should return the players guess', () => {
        expect(turn.returnGuess('pug')).to.equal('pug');
    });

    it('should return a card', () => {
        expect(turn.returnCard(card)).to.eql({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    });

    it('should evaluate a players guess', () => {
        expect(turn.evaluateGuess('pug')).to.eql(false);
    });

    it('should give feedback', () => {
        expect(turn.giveFeedback(false)).to.equal('incorrect!')
    });
});
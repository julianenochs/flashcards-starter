const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');

let deck;
let round;
beforeEach(() => {
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
        expect(round.returnCurrentCard(deck)).to.eql({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    });


});
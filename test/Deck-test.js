const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

let deck

beforeEach(function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
});

describe('Deck', function() {

    it('should be a function', function() {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of deck', function() {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should know how many cards are in a deck', function() {
        expect(deck.countCards()).to.eql(3);
    });

});
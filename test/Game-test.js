const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', () => {

    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', () => {
        let game = new Game()
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should keep track of the current round', () => {
        expect(game.currentRound()).to.eql({})
    })
});
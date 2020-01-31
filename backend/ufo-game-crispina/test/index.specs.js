//these tests are using jasmine testing framework
/* eslint-env jasmine */
/* eslint-disable no-undef */
const UFO = require('../index');

describe('UFO Class', () => {
  it('Creates new instance of UFO class', () => {
    let bool = false;
    const result = new UFO('hello', 6);
    if (result) bool = true;
    expect(result).toBe(true);
    expect(bool).toBe(true);
  });

  it('Instance of UFO class takes word and guesses as arguments', () => {
    const game = new UFO('hello',  6);
    if (game) bool1 = true;
    expect(game.word).tobBe(['h', 'e', 'l', 'l', 'o']);
    expect(game.remainingGuesses).toBe(6);
  });

  it('Has a welcome message function', () => {
    const game1 = new UFO('hello', 6);
    expect(typeof game1.welcomeMessage).toBe('function');
  });

  it('Has a playing status', () => {
    const game2 = new UFO('hello', 6);
    expect(game2.status).tobe('playing');
  });

  it('Allows you to make a guess', () => {
    const game3 = new UFO('hello', 6);
    game3.makeGuess('z');
    expect(typeof game3.makeGuess).toBe('function');
    expect(game3.remainingGuesses).toEqual(5);
  });
});

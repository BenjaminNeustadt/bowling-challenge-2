const BowlingGame = require('./bowling-game');

it('should return 0 for a game of all zeros', () => {
  const game = new BowlingGame();
  for (let i = 0; i<20; i++) {
    game.roll(0);
  }

  expect(game.score).toEqual(0);
})
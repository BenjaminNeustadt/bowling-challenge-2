const BowlingGame = require('./bowling-game.js');

// -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0 (Gutter Game)

it('should return 0 for a game of all zeros', () => {
  const game = new BowlingGame();
  for (let i = 0; i<20; i++) {
    game.roll(0);
  }

  expect(game.score).toEqual(0);
})

// 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20 

it('should return 20 for a game of all ones', () => {
  const game = new BowlingGame();
  for (let i = 0; i<20; i++) {
    game.roll(1);
  }

  expect(game.score).toEqual(20);
})
const BowlingGame = require('./bowling-game.js');

beforeEach(() => {
  game = new BowlingGame();
})

// -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0 (Gutter Game)

it('should return 0 for a game of all zeros', () => {
  // for (let i = 0; i<20; i++) {
  //   game.roll(0);
  // }
  rollMany(0, 20);

  expect(game.score).toEqual(0);
});

// 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20 

it('should return 20 for a game of all ones', () => {
  // for (let i = 0; i<20; i++) {
  //   game.roll(1);
  // }

  rollMany(1, 20);

  expect(game.score).toEqual(20);
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
const BowlingGame = require('./bowling-game.js');

beforeEach(() => {
  game = new BowlingGame();
})

// -/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0 (Gutter Game)

it('should return 0 for a game of all zeros', () => {
  rollMany(0, 20);

  expect(game.score).toEqual(0);
});

// 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20 

it('should return 20 for a game of all ones', () => {
  rollMany(1, 20);

  expect(game.score).toEqual(20);
});

// 5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16 (Spare Game + gutter rolls)

it('should return correct score when spare is rolled', () => {
  game.roll(5);
  game.roll(5);
  game.roll(3);
   
  rollMany(0, 17);
  
  expect(game.score).toEqual(16);
});


// 10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14 (Strike)

it('should return the correct score when a strike is rolled', () => {
  game.roll(10);
  game.roll(1);
  game.roll(1);

  rollMany(0, 17);
  expect(game.score).toEqual(14);
});

// 10 10 10 10 10 10 10 10 10 10 10 10 = 300 (Perfet game with two extra bonus rolls)

it('should return the correct score for a perfect game', () => {
  rollMany(10, 12);
  expect(game.score).toEqual(300);
});

function rollMany(pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
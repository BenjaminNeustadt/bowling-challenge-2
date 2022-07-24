**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.



## Scoring Bowling Game

Each game consists of 10 frames of 2 rolls each
In each frame, the bowler tried to knock down all 10 pins
Spare is when bowler knocks down all pins in 2 rolls.
- The score for that frame is 10 plus the number of pins knoked down on the next roll
Strike is when the bowler knocks down all 10 pins on first roll of frame
- The score for that frame is 10 plus the number of pins knocked down on the next two rolls
If there is a spare or strike in the last frame, the bowler gets on or two extra rolls, respectively 


## Implementation 

A class called Game
Methods 'roll' and 'score'
- 'roll' will be called correct number of times for a complete game with a valid number of pins
- 'score' will be called at the end and should return the correct score

## Examples : INPUT/ OUTPUT table

-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0 (Gutter Game)

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20 

5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16 (Spare Game + gutter rolls)

10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14 (Strike)

10 10 10 10 10 10 10 10 10 10 10 10 = 300 (Perfet game with two extra bonus rolls)




Resources: 

https://www.youtube.com/watch?v=brahHchaegc&ab_channel=RedGreenRefactor
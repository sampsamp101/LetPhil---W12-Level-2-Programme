// ============================================================
// 🏠  OPERATORS — HOMEWORK
// ============================================================
// Mini Project: Score Tracker
//
// You are building the logic for a simple game score tracker.
// Use variables + operators — everything from Lessons 1 and 2.
// All output goes to the console. No HTML edits needed.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Set up the game
// ----------------------------------------------------------
// Declare the following variables using the correct keyword.
// Add a comment on each line explaining why you chose const or let.
//
//   gameName       → "Space Blaster"  (string)
//   playerName     → your name        (string)
//   playerScore    → 0                (number)
//   highScore      → 850              (number)
//   pointsPerKill  → 25               (number)
//   livesRemaining → 3                (number)
//
// Log: gameName + " — Player: " + playerName

const gameName  = "Space Blaster"; //unless the main game is interchangable? we put let because of that. 
let playerName = "Aaron"; // i am thinking let because the playerName will change with different people.
let playerScore = 0; // let again since, we want the score to be updated
let highScore = 850; // i am thinking let is more approproiate because if the current player score above the high score, we want to update to the new maximum.     
const pointsPerKill = 25; //const, we set a fixed statistic for the game unless the game mention that the score stats will be dynamic. since we imagine this to be fixed, we let it be const 
const livesRemaining = 3; // const, we set the default amount of lives to be 3.

console.log(`1: gameName + - Player: ${playerName}`);

// ----------------------------------------------------------
// TASK 2 — Earn points
// ----------------------------------------------------------
// The player destroys 6 enemies in a row.
// Use *= or a calculation to find totalEarned (6 * pointsPerKill).
// Then use += to add totalEarned to playerScore.
//
// Log: "Earned: " + totalEarned + " points"
// Log: "Score: " + playerScore

let totalEarned = 6 * pointsPerKill;
playerScore += totalEarned;

console.log(`2: Earned: ${totalEarned} points`);
console.log(`2: Score: ${playerScore}`);

// ----------------------------------------------------------
// TASK 3 — Take damage
// ----------------------------------------------------------
// The player gets hit twice and loses a life each time.
// Use -= to subtract 1 from livesRemaining twice.
//
// Log: "Lives remaining: " + livesRemaining
// Then log the result of: livesRemaining > 0
// Write a comment: what does true/false mean in this context?

// livesRemaining -= 2; error thrown because assignment to constant variable not allowed.
let livesRemainingLet = livesRemaining;

livesRemainingLet -=2;

console.log(`3: Lives remaining: ${livesRemainingLet > 0}`);//usually means whether the player is still alive or eligible to keep playing
// ----------------------------------------------------------

// TASK 4 — Level bonus
// ----------------------------------------------------------
// The player completes a level and earns a 50% score bonus.
// Declare a const called levelBonus = playerScore * 0.5
// Add levelBonus to playerScore using +=.
//
// Log: "Bonus: " + levelBonus
// Log: "Score after bonus: " + playerScore

levelBonus = playerScore * 0.5;
playerScore += levelBonus;

console.log(`4: Bonus: ${levelBonus}`);
console.log(`4: Score ${playerScore}`);

// -------------------------------------------------------
// ---
// TASK 5 — Check the high score
// ----------------------------------------------------------
// Log the result of each comparison. Write your prediction
// as a comment BEFORE running the code.
//
//   playerScore > highScore       → prediction:
//   playerScore === highScore     → prediction:
//   playerScore >= highScore      → prediction:

console.log(`5:`);
console.log(playerScore > highScore);
console.log(playerScore === highScore);
console.log(playerScore >= highScore);



// ----------------------------------------------------------
// TASK 6 — Update the high score
// ----------------------------------------------------------
// If playerScore is greater than highScore, the high score
// should be updated. We haven't learned if/else yet — so
// just check the comparison result and do it manually:
//
// Log: playerScore > highScore   (is it true or false right now?)
// Then reassign highScore to playerScore.
// Log: "New high score: " + highScore
console.log(`6: ${playerScore > highScore}`); //false now.
playerScore = highScore;

console.log(`6: New high score: ${highScore}`); 


// ----------------------------------------------------------
// TASK 7 — Time remaining (modulus practice)
// ----------------------------------------------------------
// The game has 245 seconds on the clock.
// Declare a const called totalSeconds = 245
// Use / to get minutes (totalSeconds / 60) → store in a const
// Use % to get leftover seconds (totalSeconds % 60) → store in a const
//
// Log: "Time left: " + minutes + " min " + secondsLeft + " sec"
// ⚠️ minutes will be a decimal — that's expected. We'll fix it in Data Types.

const totalSecond = 245;
const minute = (totalSecond / 60);
const secondsLeft = (totalSecond % 60);

console.log(`7: Time left: ${minute} min  ${secondsLeft} sec`);

// ----------------------------------------------------------
// TASK 8 — Connect the dots summary
// ----------------------------------------------------------
// Declare a const called startScore = 0
// Declare a const called endScore   = playerScore (your current playerScore)
// Declare a const called improvement = endScore - startScore
//
// Log: playerName + " improved by " + improvement + " points this session."
//
// Then log whether the player beat the original highScore (850):
// endScore > 850

const startScore = 0;
const endScore = playerScore;
const improvement = endScore - startScore;

console.log(`7: ${playerName} + " improved by " + ${improvement} + " points this session."`)
console.log(`7 endscore: ${endScore}`);

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Accuracy Rating
// ----------------------------------------------------------
// Declare these variables:
//   const shotsFired = 40
//   const shotsHit   = 31
//
// Calculate:
//   const accuracyDecimal = shotsHit / shotsFired
//   const accuracyPercent = accuracyDecimal * 100
//
// Log: playerName + " accuracy: " + accuracyPercent + "%"
//
// Then log whether accuracy is above 75%:
//   accuracyPercent >= 75
//
// Bonus question (write as a comment):
// accuracyPercent will have many decimal places. What do you think
// we could use to round it to 2 decimal places? (Hint: coming in Data Types)

const shotsFired = 40;
const shotsHit = 31;

const accuracyDecimal = shotsHit / shotsFired;
const accuracyPercent = accuracyDecimal * 100

console.log(`${playerName}, accuracy: ${accuracyPercent}%`);

console.log(`${accuracyPercent} >= 75`);



let fixedminuteLeft = parseFloat(minute).toFixed(2);

console.log(`7: Time left: ${fixedminuteLeft} min  ${secondsLeft} sec`);
//You can try using parseFloat since it in string form and .toFixed() function by js?

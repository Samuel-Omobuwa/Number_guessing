// Your JavaScript goes here
/*
I want to create a simple guess the number type game.
It should choose a random number between 1 and 100,
then challenge the player to guess the number in 10 turns.
After each turn the player should be told if they are right or wrong, and if they are wrong, whether the guess was too low or too high. It should also tell the player what numbers they previously guessed. The game will end once the player guesses correctly, or once they run out of turns. When the game ends, the player should be given an option to start playing again.
*/

// Adding variables to store our data
let random_number = Math.floor(Math.random() *4) +1;
let random_number2 = Math.random() *100 +1;

console.log('1: ', random_number);
console.log('2: ', random_number2);
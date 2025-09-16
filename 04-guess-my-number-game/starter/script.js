'use strict';



const messageEl = document.querySelector('.message');


// messageEl.textContent = 'Hello from javascript';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;


// Game state variables
let secretNumber =Math.trunc (Math.random() * 20) + 1;
console.log("Your secret number is:", secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

/////////

document.querySelector('.check').addEventListener('click', function() {
//code block
console.log('Check Button clicked!');
const guess = Number(document.querySelector('.guess').value);
console.log("Player's guess:", guess);

if (guess === secretNumber) {
    console.log('Player guessed correctly!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
} else if (guess > secretNumber) {
    console.log('Player guessed too high!');
    document.querySelector('.message').textContent = '📈 Too High!';    
} else if (guess < secretNumber) {
document.querySelector('.message').textContent = '📉 Too Low!';
}
    

});
    



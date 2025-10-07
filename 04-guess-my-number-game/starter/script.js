'use strict';

//constants

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//Cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector(`.message`);
const scoreEl = document.querySelector(`.score`);
const numberEl = document.querySelector(`.number`);
const highscoreEl = document.querySelector(`.highscore`);
const guessInputEl = document.querySelector(`.guess`);
const checkBtnEl = document.querySelector(`.check`);
const againBtnEl = document.querySelector(`.again`);

//UI Helpers
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disabledPlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessInputEl.value = ``;
}

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log(`Your Secret number is:`, secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage(`Start guessing...`);
  setNumber(`?`);
  setScore(score);
  clearInput();
  disabledPlay(false);
  setBackground(``);
}

renderInitialUI();

/////////////////////////////////////////////////////////////////

////////////////////////////////////
// Handlers

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disabledPlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disabledPlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});
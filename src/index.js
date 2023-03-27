const playForm = document.querySelector("#play-form");
const generateInput = document.querySelector("#generate-form input");
const guessInput = document.querySelector("#guess-form input");
const resultForm = document.querySelector("#result-form");
const you = document.querySelector("#you");
const machine = document.querySelector("#machine");
const win = document.querySelector("#win");

const HIDDEN_CLASSNAME = "hidden";
const GENERATE_NUMBER_KEY = "generateNumber";
const GUESS_NUMBER_KEY = "guessNumber";

function onPlaySubmit(event) {
  event.preventDefault();
  resultForm.classList.remove(HIDDEN_CLASSNAME);
  const generateNumber = generateInput.value;
  const guessNumber = guessInput.value;
  localStorage.setItem(GENERATE_NUMBER_KEY, generateNumber);
  localStorage.setItem(GUESS_NUMBER_KEY, guessNumber);
  const savedGuessNumber = localStorage.getItem(GUESS_NUMBER_KEY);
  const savedGenerateNumber = localStorage.getItem(GENERATE_NUMBER_KEY);
  you.innerText = savedGuessNumber;
  machine.innerText = Math.ceil(Math.random() * savedGenerateNumber);
  if (savedGuessNumber === machine.innerText) {
    win.innerText = "you won!";
  } else {
    win.innerText = "you lose!";
  }
}

playForm.addEventListener("submit", onPlaySubmit);

let randomnum = parseInt(Math.random() * 100 + 1);
const userinput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");
const remaininggguess = document.querySelector(".lastResult");
const lowhi = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultParas");
const form = document.querySelector(".form");

let prevGuess = [];
let guessCount = 10;

let playgame = true;

if (playgame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateguess(guess);
  });
}
function validateguess(guess) {
  if (isNaN(guess)) {
    alert("Enter a Valid Number");
    userinput.value = "";
  } else if (guess < 1 || guess > 100) {
    alert("Enter a Number Between 1 to 100!");
    userinput.value = "";
  } else {
    if (guessCount === 0) {
      displayguess(guess);
      displayMessages(`Game Over. Random number was ${randomnum}`);
      submit.addEventListener("click", endgame());
    } else {
      prevGuess.push(guess);
      checkguess(guess);
      displayguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomnum) {
    displayMessages("You Won!");
    endgame();
  } else if (guess > randomnum) {
    displayMessages("Your Number is Greater");
  } else if (guess < randomnum) {
    displayMessages("Your Number is Smaller");
  }
}

function displayguess() {
  userinput.value = "";
  guessCount--;
  guesses.innerHTML = prevGuess.toString();
  remaininggguess.innerHTML = guessCount.toString();
}
function displayMessages(guess) {
  lowhi.innerHTML = guess;
}

function endgame() {
  playgame = false;
  let button = document.createElement("button");
  result.style.display = "none";
  form.style.display = "none";
  button.innerHTML = "start over";
  button.setAttribute("class", "start");
  document.querySelector("#wrapper").appendChild(button);
  startover();
}

function startover() {
  const start = document.querySelector("button");
  start.addEventListener("click", () => {
    result.style.display = "";
    form.style.display = "";
    guesses.innerHTML = "";
    remaininggguess.innerHTML = "";
    lowhi.innerHTML = "";
    prevGuess = [];
    guessCount = 10;
    start.remove();
    playgame = true;
    randomnum = parseInt(Math.random() * 100 + 1);
  });
}

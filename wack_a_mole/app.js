const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

var startButton = document.getElementById("start-button");

let result = 0;
let timerId = null;
let currentTime = 30;

startButton.onclick = function () {
    if (startButton.innerHTML === "Start") {
        moveMole();
      startButton.innerHTML = "Reset";
      countDownTimerId = setInterval(countdown, 1000);
    } else {
      location.reload();
    }
};



function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (startButton.innerHTML === "Reset" && square.classList.contains("mole")) {
          result++;
          score.textContent = result;
          randomSquare();
        }
      });
 
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

///Timer

function countdown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("Game Over! Your Score: " + result);
    squares.forEach((square) => {
      square.classList.remove("mole");
    });
  }
}

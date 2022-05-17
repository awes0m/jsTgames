const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice() 
    getReults()
  })
);

/// Generates a random choice for computer
function /**
 * Generate a random number between 1 and 3.
 * @returns The function returns a random number between 1 and 3.
 */
generateComputerChoice(){

    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
     if (randomNumber==1){
         computerChoice= 'rock'
     }
    
     if (randomNumber==0){
        computerChoice= 'paper'
    }
    
    if (randomNumber==2){
        computerChoice= 'somssers'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}


function getReults(){
    if (userChoice==computerChoice){
        result="Its a draw 😋 "
    };
    if (computerChoice== 'rock' && userChoice == 'paper') {
        result="You Win! 😎 "
    }
    if (computerChoice== 'rock' && userChoice == 'somssers') {
        result="you lost 😐"
    }
    if (computerChoice== 'somssers' && userChoice == 'rock') {
        result="You Win ! 😎"
    }
    if (computerChoice== 'paper' && userChoice == 'rock') {
        result="you lost 😐"
    }
    if (computerChoice== 'paper' && userChoice == 'somssers') {
        result="You Win! 😎"
    }

    resultDisplay.innerHTML = result;
    
    
    

}
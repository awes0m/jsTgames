const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
var displayimageHandler=document.getElementById("display-image");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice.toUpperCase();
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
         computerChoice= 'Rock 🐡'
     }
    
     if (randomNumber==0){
        computerChoice= 'Paper 📃'
    }
    
    if (randomNumber==2){
        computerChoice= 'Somssers ✂'
    }

    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase();
}


function getReults(){
    if (userChoice==computerChoice){
        result="Its a Draw !! 😋 "
        displayimageHandler.src="https://i.imgur.com/AiG5JY1.gif"
        
    };
    if (computerChoice== 'Rock 🐡' && userChoice == 'Paper 📃') {
        result="You Win! 😎"
        displayimageHandler.src="https://i.imgur.com/gKJHS.gif"
        

    }
    if (computerChoice== 'Rock 🐡' && userChoice == 'Somssers ✂') {
        result="you lost 😐"
        displayimageHandler.src="https://i.imgur.com/AxNFauH.gif"
        

    }
    if (computerChoice== 'Somssers ✂' && userChoice == 'Rock 🐡') {
        result="You Win! 😎"
        displayimageHandler.src="https://i.imgur.com/gKJHS.gif"
        

    }
    if (computerChoice== 'Somssers ✂' && userChoice == 'Paper 📃') {
        result="you lost 😐"
        displayimageHandler.src="https://i.imgur.com/AxNFauH.gif"
        

    }
    if (computerChoice== 'Paper 📃' && userChoice == 'Rock 🐡') {
        result="you lost 😐"
        displayimageHandler.src="https://i.imgur.com/AxNFauH.gif"
        

    }
    if (computerChoice== 'Paper 📃' && userChoice == 'Somssers ✂') {
        result="You Win! 😎"
        displayimageHandler.src="https://i.imgur.com/gKJHS.gif"
        

    }

    resultDisplay.innerHTML = result.toUpperCase();
    
    
    

}
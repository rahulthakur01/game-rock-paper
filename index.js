const computerChoiceDisplay = document.querySelector(".computer-choice");
const userChoiceDisplay = document.querySelector(".user-choice");
const resultDisplay = document.querySelector(".result");
const clickedButton = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;
clickedButton.forEach(function (clickedBtn) {
  clickedBtn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() *clickedButton.length) +1;
    console.log(randomNumber);
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'papper';
    }
    if(randomNumber === 3){
        computerChoice ='scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult(){
    if (computerChoice === userChoice) {
        result = 'its a draw!'
      }
      if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
      }
    resultDisplay.innerHTML = result
    
}
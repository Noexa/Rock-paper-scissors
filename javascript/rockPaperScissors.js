//Alerts user about the game and asks for their move
let userInput = prompt("It's time for a game of rock, paper, scissors! Please type which move you'd like to use: ")
let ignoreCapitalization = userInput.toLowerCase()

//Automatically assigns a move to the computer
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)+1
    function convertToWord(choice){
        if (choice===1) {
            return "rock"
        }
        else if (choice===2){
            return "paper"
        }
        else if (choice===3){
            return "scissors"
        }
    }
convertToWord()
}
//Displays the user's choice
function showResult () {
    if (ignoreCapitalization=="rock"){
        console.log("You've picked rock!")
}
    else if (ignoreCapitalization=="paper"){
     console.log("You've picked paper!")
}
    else if (ignoreCapitalization=="scissors"){
        console.log("You've picked scissors!")
}
    else console.log("Please check your spelling.")
}
showResult()

//Need to add functionality to display a unique message for each outcome
//Need to ask the user for a best of 5 and/or just display the results of the bo5
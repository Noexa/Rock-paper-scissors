let userInput = prompt("It's time for a game of rock, paper, scissors! Please type which move you'd like to use: ")
let ignoreCapitalization = userInput.toLowerCase()

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)+1
    function convertComputer(){
        if (computerChoice===1) {
            computerChoice="rock"
            console.log("The computer chose: " + computerChoice)
            return computerChoice
        }
        else if (computerChoice===2){
            computerChoice="paper"
            console.log("The computer chose: " + computerChoice)
            return computerChoice
        }
        else if (computerChoice===3){
            computerChoice="scissors"
            console.log("The computer chose: " + computerChoice)
            return computerChoice
        }

    }
   convertComputer()

// call on this later to display the results

}

getComputerChoice()

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
    else console.log("Please check your spelling")
}
showResult()

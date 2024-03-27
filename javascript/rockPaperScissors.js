let userInput = prompt("It's time for a game of rock, paper, scissors! Please type which move you'd like to use: ")
console.log(userInput)
//still needs to be case insenstive

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)+1
    console.log(computerChoice)
    return computerChoice
}
getComputerChoice()
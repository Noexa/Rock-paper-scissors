//Alerts user about the game and asks for their move
let userInput = prompt("It's time for a game of rock, paper, scissors! Please type which move you'd like to use: ").toLowerCase()

//Automatically assigns a move to the computer
function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)+1
    function convertToWord(computerChoice){
        if (computerChoice===1) {
            return "rock"
        }
        else if (computerChoice===2){
            return "paper"
        }
        else if (computerChoice===3){
            return "scissors"
        }
    }
return convertToWord(computerChoice)
}
//Stores computerChoice in global variable
let computerChoice = getComputerChoice()

//Displays the user's choice. Possibly rewrite to include total answer
function showResult(userInput, computerChoice) {
    if (userInput===computerChoice){
        console.log("You both selected " + userInput + ". This round is a tie!")
        return ("tie")
}

    else if (userInput==="rock" && computerChoice==="scissors"){
        console.log("You've selected rock and your opponent picked scissors. You win!")
        return ("win")
    }
    else if (userInput==="paper" && computerChoice==="rock"){
        console.log("You've selected paper and your opponent picked rock. You win!")
        return ("win")
    }
    else if (userInput==="scissors" && computerChoice==="paper"){
        console.log("You've selected scissors and your opponent picked paper. You win!")
        return ("win")
    }
    else if (userInput==="paper" && computerChoice==="scissors"){
        console.log("You've selected paper and your opponent picked scissors. You lose!")
        return ("lose")
    }
    else if (userInput==="rock" && computerChoice==="paper"){
        console.log("You selected rock and your opponent picked paper. You lose!")
        return ("lose")
    }
    else if (userInput==="scissors" && computerChoice==="rock") {
        console.log("You picked scissors and your opponent picked rock. You lose!")
        return ("lose")
    }

    else console.log("You did not enter a valid response. Please check your spelling.")
        return ("failed to enter")
    
}
//Displays results of the single round
showResult(userInput, computerChoice)
console.log(" ")
console.log("Time for a bonus game! The game will last five rounds; good luck!")

//playgame() function that uses an array to check the validity of user inputs and records 5 rounds of rock, paper, scissors
 function playGame(){
    let playerScore = 0
    let computerScore = 0
    for (i=1; i<6; i++){
        let userInput = prompt("Please type your move for round #" + i +": ").toLowerCase()

        if (!["rock", "paper", "scissors"].includes(userInput)) {
            console.log("You did not enter a valid response. Please check your spelling and try again.")
        i--
        continue
    }
        let computerChoice = getComputerChoice()
        let result = showResult(userInput, computerChoice)
            if (result === "tie"){
                playerScore++
                computerScore++
    }
            else if (result === "win"){
                playerScore++
    }
            else if ( result ==="lose"){
                computerScore++
    }
        if (i<5){ console.log("The current score is "+playerScore + ":" +computerScore+".")}
        else if (i===5){ console.log("The final score is "+playerScore + ":" +computerScore+".")}

    }
    console.log(" ")
    console.log("Thanks for playing!")
 }
playGame()

//good idea to add a button later asking the user bo1 or bo5
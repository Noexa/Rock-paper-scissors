//Alerts user about the game and asks for their move
let userInput = prompt("It's time for a game of rock, paper, scissors! Please type which move you'd like to use: ")
let ignoreCapitalization = userInput.toLowerCase()

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
//console.log(computerChoice)

//Displays the user's choice. Possibly rewrite to include total answer
function showResult () {
    if (ignoreCapitalization===computerChoice){
        console.log("You both selected " + ignoreCapitalization + ". Tie game! ")
        return ("tie")
}

    else if (ignoreCapitalization==="rock" && computerChoice==="scissors"){
        console.log("You've selected rock and your opponent picked scissors. You win!")
        return ("win")
    }
    else if (ignoreCapitalization==="paper" && computerChoice==="rock"){
        console.log("You've selected paper and your opponent picked rock. You win!")
        return ("win")
    }
    else if (ignoreCapitalization==="scissors" && computerChoice==="paper"){
        console.log("You've selected scissors and your opponent picked paper. You win!")
        return ("win")
    }
    else if (ignoreCapitalization==="paper" && computerChoice==="scissors"){
        console.log("You've selected paper and your opponent picked scissors. You lose!")
        return ("lose")
    }
    else if (ignoreCapitalization==="rock" && computerChoice==="paper"){
        console.log("You selected rock and your opponent picked paper. You lose!")
        return ("lose")
    }
    else if (ignoreCapitalization==="scissors" && computerChoice==="rock") {
        console.log("You picked scissors and your opponent picked rock. You lose!")
        return ("lose")
    }

    else console.log("You did not enter a valid response. Please check your spelling.")
        return ("failed to enter")
    
}
//Console log might need to be removed when you revisit this project, but for now it's fine
showResult()
console.log("Time for bonus game! It's a best of 5. Good luck!")

//playgame() function that uses an array to check the validity of user inputs and records a bo5
 function playGame(){
    let playerScore = 0
    let computerScore = 0
    for (i=0; i<5; i++){
        let userInput = prompt("Please type your move: ")
        let ignoreCapitalization = userInput.toLowerCase()
        if (!["rock", "paper", "scissors"].includes(userInput)) {
            console.log("You did not enter a valid response. Please check your spelling and try again.")
        i--
        continue
    }
    //Currently bugged. Does not update variables and copies results of the initial game prior to bo5. Need to declare and assign new variables?
    showResult(ignoreCapitalization)
        if (showResult==="tie"){
            playerScore++
            computerScore++
    }
        else if (showResult==="win"){
            playerScore++
    }
        else if (showResult==="lose"){
            computerScore++
    }
    console.log("The current score is "+playerScore + ":" +computerScore+".")

    }

 }
playGame()

//good idea to add a button later asking the user bo1 or bo5
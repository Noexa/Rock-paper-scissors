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
return convertToWord(computerChoice)
}
//Stores computerChoice in global variable
let computerChoice = getComputerChoice()
//console.log(computerChoice)

//Displays the user's choice. Possibly rewrite to include total answer
function showResult () {
    if (ignoreCapitalization===computerChoice){
        console.log("You both selected " + ignoreCapitalization + ". Tie game! ")
}

    else if (ignoreCapitalization==="rock" && computerChoice==="scissors"){
        console.log("You've selected rock and your opponent picked scissors. You win!")
        return ("win")
    }
    else if (ignoreCapitalization==="paper" && computerChoice==="rock"){
        console.log("You've selected paper and your opponent picked rock. You win!")
        return ("win")
    }
    else if (ignoreCapitalization="scissors" && computerChoice==="paper"){
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
console.log("You " + showResult() + " this round.")
//playgame() function that plays a bo5
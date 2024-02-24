
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "rock"))
    {
        return "Player";    
    }

    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's A Tie";
    }
    else if (result == "Player") {
        return `You Win ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice(round){
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt(`Rock Paper Scissors Round ${round + 1}`);
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
        
    }
}

function playGame(){
    console.log("Welcome!");
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice(i);
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("________________________")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        alert("Player was the winner");
    }
    else if(playerScore < computerScore)
    {
        alert("Computer was the winner");
    }
    else{
        alert("It's A Tie");
    }

}

playGame();
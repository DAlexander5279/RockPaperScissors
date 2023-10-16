


function getComputerChoice(){
    const answers = ["Rock", "Paper", "Scissors"]
    let index = Math.floor(Math.random() * 3)
    return answers[index]
    
}


function playRound(playerSelection, computerSelection){
    let p = String(playerSelection).toLowerCase()
    let c = String(computerSelection).toLowerCase()


    switch(p){




        case "rock":
            switch(c){
                case "rock":
                        return 0
                    break;

                case "paper":
                        return 2
                    break;

                case "scissors":
                        return 1
                    break;
            }

            break;






        case "paper":
            switch(c){
                case "rock":
                    return 1
                    break;

                case "paper":
                    return 0
                    break;

                case "scissors":
                    return 2
                    break;
            }

            break;







        case "scissors":
            switch(c){
                case "rock":
                    return 2
                    break;

                case "paper":
                    return 1
                    break;

                case "scissors":
                    return 0
                    break;
            }
            break;




    }


    
    
}



function game(){
    let computerScore = 0
    let playerScore = 0
    let rounds = 1
    let roundResult = 0
    let computerSelection = null
    let playerSelection = null
    while(rounds <= 5)
    {
        computerSelection = getComputerChoice()
        playerSelection = prompt("Rock, Paper, or Scissors")
        roundResult = playRound(playerSelection, computerSelection)
        console.log("Player chose " + playerSelection + " Computer Chose "+ computerSelection)
    
        switch(roundResult)
        {
            case 0:
                console.log("Draw!")
                break;
            case 1:
                console.log("Player Wins!")
                playerScore++
                break;
            case 2:
                console.log("Computer Wins!")
                computerScore++
                break;
        }

        
        rounds++
    }


    if(playerScore > computerScore){
        console.log("Player Won the Game!!!")
    }
    else{
        console.log("Computer won the game!")
    }

}

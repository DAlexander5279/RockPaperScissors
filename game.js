


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
                        return "Draw!"
                    break;

                case "paper":
                        return "Paper beats rock, you lose!"
                    break;

                case "scissors":
                        return "rock beats scissors, you win!"
                    break;
            }

            break;






        case "paper":
            switch(computerSelection){
                case "rock":
                        return "Paper beats rock, you win!"
                    break;

                case "paper":
                    return "Draw!"
                    break;

                case "scissors":
                    return "scissors beats paper, you lose!"
                    break;
            }

            break;







        case "scissors":
            switch(computerSelection){
                case "rock":
                    return "rock beats scissors, you lose!"
                    break;

                case "paper":
                    return "scissors beats paper, you lose!"
                    break;

                case "scissors":
                    return "Draw!"
                    break;
            }
            break;




    }


    
    
}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
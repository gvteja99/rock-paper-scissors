play = Array("Rock", "Paper", "Scissors")

function computerPlay() {
    return play[Math.floor(Math.random()*play.length)];
}

function capitalize(playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.substr(1).toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock') {
        return computerSelection == 'Paper'?0:1;
    } else if (playerSelection == 'Paper') {
        return computerSelection == 'Scissors'?0:1;
    } else {
        return computerSelection == 'Rock'?0:1;
    }
    

  }

let result;

function game(){
    let wins = losses = 0;
    for (let i = 0; i < 5; i++) {
 
        const playerSelection = capitalize(prompt("Rock, Paper or Scissors?"));
        const computerSelection = computerPlay();

        if (play.includes(playerSelection)) {

            if (playerSelection == computerSelection) {
                console.log("Draw!")
            } else {
                result = playRound(playerSelection, computerSelection);
                result==0?losses+=1:wins+=1;
                let str1 = 'lost'.repeat(1-result) + 'won'.repeat(result);
                let str2 = 'loses'.repeat(1-result) + 'wins'.repeat(result);
                
                console.log(`You ${str1}! ${playerSelection} ${str2} against ${computerSelection}`) 
            }
        } else {
            console.log("Invalid input")
            i-=1;
        }

    }
    let str3 = "You Win".repeat(wins>losses) + "You Lost".repeat(wins<losses) + "It's a Draw!".repeat(wins==losses);
    console.log(str3);
}




function computerPlay() {
    const optionArr = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * optionArr.length)
    return optionArr[random]
}


function playRound(playerSelection, computerSelection) {
    const lowerCaseSelection = playerSelection.toLowerCase()

    if (lowerCaseSelection === 'rock' && computerSelection === 'paper') return 'You lose! Paper beats Rock'
    
    else if (lowerCaseSelection === 'rock' && computerSelection == 'scissors') return 'You win! Rock beats Scissors'

    else if (lowerCaseSelection === 'paper' && computerSelection === 'rock') return 'You win! Paper beats Rock'

    else if (lowerCaseSelection === 'scissors' && computerSelection === 'rock') return 'You lose! Rock beats Scissors'

    else if (lowerCaseSelection === 'paper' && computerSelection === 'scissors') return 'You lose! Scissors beats Paper'

    else if (lowerCaseSelection === 'scissors' && computerSelection === 'paper') return 'You win! Scissors beats Paper'

    else return 'Tie!'


}

function game() {
    let computerScore = 0
    let playerScore = 0
    for (let i = 0; i < 5; i++) {
        const playerInput = prompt('Enter rock, paper, or scissors: ')
        const computerInput = computerPlay()
        const gameResult = playRound(playerInput, computerInput)
        console.log(gameResult)
        if (gameResult.includes('You win!')) playerScore++
        else if (gameResult.includes('You lose!')) computerScore++
        else continue 
    }

    if (playerScore > computerScore) return `You beat the computer! Computer score: ${computerScore} points. Player score: ${playerScore} points.` 
    else if (playerScore < computerScore) return `You lost against the computer! Computer score: ${computerScore} points. Player score: ${playerScore} points.`
    else return `Tied game! Computer score: ${computerScore} points. Player score: ${playerScore} points.`
}

console.log(game())
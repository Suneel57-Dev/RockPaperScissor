let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compSCorePara = document.querySelector('#comp-score');

choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
       
    })
})

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        draw();
    }else {
        let userWin = true;
        if(userChoice === 'rock'){   //compChoice = paper, scissor
            userWin = (compChoice === 'paper')?false : true;
        }else if(userChoice === 'paper'){    //compChoice = rock, scissor
            userWin = (compChoice === 'scissors')?false : true;
        }else{           //compChoice = rock, paper
            userWin = (compChoice === 'rock')?false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random(options) * 3);
    return options[randIdx];
}

const draw = () => {
    msg.innerText = 'Match was Draw. Play again';
    msg.style.backgroundColor = '#081b31';
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green'
    }else{
        compScore++;
        compSCorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const result = document.getElementById('result');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const choices = ['Rock', 'Paper', 'Scissors'];

let userScore = 0;
let computerScore = 0;
let totalRounds = 0;

rock.addEventListener('click', function () {
  playGame('Rock');
});

paper.addEventListener('click', function () {
  playGame('Paper');
});

scissors.addEventListener('click', function () {
  playGame('Scissors');
});

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  result.innerHTML = `Your choice: ${userChoice} vs Computer's choice: ${computerChoice}`;

  if (userChoice === computerChoice) {
    result.innerHTML += '<br>It is a tie.';
  } else if (
    (userChoice === 'Rock' && computerChoice === 'Scissors') ||
    (userChoice === 'Paper' && computerChoice === 'Rock') ||
    (userChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    result.innerHTML += '<br>You win!';
    userScore++;
  } else {
    result.innerHTML += '<br>You lose.';
    computerScore++;
  }

  result.innerHTML += `<br>User score: ${userScore}`;
  result.innerHTML += `<br>Computer score: ${computerScore}`;

  totalRounds++;

  if (totalRounds === 5 || userScore === 3 || computerScore === 3) {
    result.innerHTML += '<br>Game Over.';
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissor');
const computerChoiceText = document.getElementById('computer-choice');
const gameResultText = document.getElementById('game-result');
const choices = ['rock','paper','scissor'];
rockButton.addEventListener('click',()=>playGame('rock'));
paperButton.addEventListener('click',()=>playGame('paper'));
scissorButton.addEventListener('click',()=>playGame('scissor'));

function playGame(userChice) {
  const computerChoice = choices[Math.floor(Math.random()*choices.length)];
  computerChoiceText.innerHTML=`Computer chose`;
  if (userChice === computerChoice) {
    gameResultText.innerHTML = 'You Win!';

  } else if (
    (userChice === 'rock' && computerChoice === 'scissor') || (userChice === 'paper' && computerChoice === 'rock') ||
  (userChice === 'scissor' && computerChoice === 'paper')) {
    gameResultText.innerHTML = 'You Win!';
    
  } else{
    gameResultText.innerHTML = 'You Lose!';
  }
}

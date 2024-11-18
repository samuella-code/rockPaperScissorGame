let playerScore = 0;
let computerScore = 0;
let maxScore = 3;

document.querySelectorAll(".round-button").forEach(button => {
  button.addEventListener("click", () => {
    maxScore = parseInt(button.getAttribute("data-rounds"));
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("game-buttons").classList.remove("hidden");
    document.getElementById("result").textContent = "Make your move!";
  });
});

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    updateScores(winner);
    checkWinner();
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
    document.getElementById("result").textContent = "You win this round!";
  } else if (winner === "computer") {
    computerScore++;
    document.getElementById("result").textContent = "Computer wins this round!";
  } else {
    document.getElementById("result").textContent = "It's a draw!";
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function checkWinner() {
  if (playerScore === maxScore) {
    document.getElementById("result").textContent = "You win the game!";
    endGame();
  } else if (computerScore === maxScore) {
    document.getElementById("result").textContent = "Computer wins the game!";
    endGame();
  }
}

function endGame() {
  document.getElementById("game-buttons").classList.add("hidden");
}

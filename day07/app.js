/* The Rock 🪨, Paper 📄, or Scissors ✂️ Game
This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
The Winner will be selected based on these rules:
– Rock can Break Scissors => Rock Wins
– Paper can wrap Rock => Paper Wins
– Scissors can cut Paper => Scissors Wins
Ask the input from user and randomly select a computer selection to continue the game. */

function computerVsHuman(userChoice) {
  const box = ["rock", "paper", "scissors"];
  let computerChoice = box[Math.floor(Math.random() * 3)];
  let massage;
  console.log("userChoice " +userChoice);
  console.log("computerChoice " + computerChoice);

  if (computerChoice == userChoice) {
    massage = "match draw";
  } else if (
    (userChoice == "rock" && computerChoice == "scissors" ||
    userChoice == "paper" && computerChoice == "rock" ||
    userChoice == "scissors" && computerChoice == "paper")
  ) {
    massage = "you win";
  } else if (
    (userChoice == "rock" && computerChoice == "paper" ||
    userChoice == "paper" && computerChoice == "scissors" ||
    userChoice == "scissors" && computerChoice == "rock")
  ) {
    massage = "computer win";
  } else {
    massage = `plz select only ${[...box]}`;
  }
  return massage;
}
const resultComputerVsHuman = computerVsHuman("rock");
console.log(resultComputerVsHuman);

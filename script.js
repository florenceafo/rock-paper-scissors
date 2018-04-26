const hand = ["rock", "paper", "scissors"];
console.log(hand);
var randomNumber = 0;
var compHand = "";
var playerHand = "";

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var result = "";

function computerPlay() {
  randomNumber = Math.floor(Math.random() * hand.length);
  compHand = hand[randomNumber];
  console.log(randomNumber);
  console.log(compHand);
}

function playerPlay() {
  rock.onclick = function playerChoice() {
    playerHand = "rock";
    console.log(playerHand);
    if (compHand == "paper") {
      console.log("You lose! Paper beats rock");
    } else if (compHand == "scissors") {
      console.log("You win! Rock beats scissors");
    } else {
      console.log("Tie!");
    }
  }
  paper.onclick = function playerChoice() {
    playerHand = "paper";
    console.log(playerHand);
    if (compHand == "rock") {
      console.log("You win! Paper beats rock")
    } else if (compHand == "scissors") {
      console.log("You lose! Scissors beats paper")
    } else {
      console.log("Tie!");
    }
  }
  scissors.onclick = function playerChoice() {
    playerHand = "scissors";
    console.log(playerHand);
    if (compHand == "rock") {
      console.log("You lose! Rock beats scissors")
    } else if (compHand == "paper") {
      console.log("You win! Scissors beats paper")
    } else {
      console.log("Tie!");
    }
  }
}


function play() {
  computerPlay()
  playerPlay()
}

play()

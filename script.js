var selection = ["rock", "paper", "scissors"];
console.log(selection);
var randomNumber = 0;
var compHand = "";
var playerHand = "";

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

function computerPlay() {
  randomNumber = Math.floor(Math.random() * selection.length);
  compHand = selection[randomNumber];
  console.log(randomNumber);
  console.log(compHand);
}

function playerPlay() {
  rock.onclick = function playerChoice() {
    playerHand = "rock";
    console.log(playerHand);
  }
  paper.onclick = function playerChoice() {
    playerHand = "paper";
    console.log(playerHand);
  }
  scissors.onclick = function playerChoice() {
    playerHand = "scissors";
    console.log(playerHand);
  }
}

computerPlay();
playerPlay();

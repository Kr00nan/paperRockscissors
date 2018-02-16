var weapons = ["paper", "rock", "scissors"];
var opforPick = document.getElementById("picks");
var matchResult = document.getElementById("outcome");

function play(playerChoice) {

    let min = 0;
    let max = 2;

    random = Math.floor(Math.random()*(max - min + 1));
    var compPick = weapons[random];

    opforPick.textContent = compPick
    
    if (playerChoice == compPick) {
        matchResult.textContent = "It was a Tie?!?";
    } else if (playerChoice == "paper") {
        matchResult.textContent = compPick == "rock" ? "You WIN!" : "You LOSE!";
    } else if (playerChoice == "rock") {
        matchResult.textContent = compPick == "scissors" ? "You WIN!" : "You LOSE!";
    } else {
        matchResult.textContent = compPick == "paper" ? "You WIN!" : "You LOSE!";
    }
}

function reset() {
    opforPick.textContent = "";
    matchResult.textContent = "";
}
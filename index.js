let hScore = 0;
let gScore = 0;
let hPoints = document.getElementById("homeScore");
let gPoints = document.getElementById("guestScore");
let scoreHistory = document.getElementById("gameHistory");

function homePointer(points) {
    hScore += points;
    hPoints.textContent = hScore;
}

function guestPointer(points) {
    gScore += points;
    gPoints.textContent = gScore;
}

function newGame() {
    hScore = 0;
    gScore = 0;    
    hPoints.textContent = hScore;
    gPoints.textContent = gScore;
}

function saveScore() {
    scoreHistory.innerHTML += hScore + " | " + gScore + "<br>";
}

function clearBoard() {
    scoreHistory.textContent = "";
}

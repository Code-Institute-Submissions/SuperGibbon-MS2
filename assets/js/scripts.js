/* Nav bar buttons */

$("#whyPlayBtn").click(function() {
    $(".aboutHidden").addClass("d-none");
    $(".card-container").addClass("d-none");
    $(".whyPlay-container").removeClass("d-none");
});

$("#homeBtn").click(function() {
    $(".whyPlay-container").addClass("d-none");
    $(".aboutHidden").removeClass("d-none");
    $(".card-container").addClass("d-none");
});

/* constants and variables */

const cards = document.querySelectorAll(".playing-card");
const clickCountEl = document.getElementById("clickCount");

let firstClickCard, currentCard;
let lockAfterMatch = false;
let cardMatch = [];
let clickCount = 0;
let previousScores = [];

let currentScore = {
    playerName : "",
    score: 0,
    timeLeft: 0,
    
};

let gameTimeInSeconds = 120;
let intervalId = null;
let currentTime = 0;


/* Start Game */
$("#playerInfo").on('submit', function(event) {
    $(".aboutHidden").addClass("d-none");
    $(".whyPlay-container").addClass("d-none");
    $(".card-container").removeClass("d-none");
    currentScore.playerName = document.getElementById("playerName").value;
    clickCount = 0;
    cardMatch.length = 0;
    currentCard = null;
    cards.forEach(card => card.classList.remove("invis"));
    cards.forEach(faceCardDown);
    shuffle();
    currentTime = 0;
    intervalId = setInterval(renderTime, 1000);
    return false;
});

/* Render Timer */

function renderTime() {
    currentTime++;
    const elapsedTime = gameTimeInSeconds - currentTime;
    document.getElementById("timeLeft").innerText = elapsedTime;
    if (cardMatch.length === 16) {
        clearInterval(intervalId);
        endGame();
    }else{
        if (!elapsedTime) {
            clearInterval(intervalId);
            endGame();
        }
    }
}
 


/* Shuffle Cards - this was not my own work please see README for credit*/

function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 16);
        card.style.order = ramdomPos;
    });
}

/* Render Click Count */

function renderClickCount() {
    clickCountEl.innerText = clickCount;
}

/* Flip card */

function flippingCard (event) {
    if (lockAfterMatch) {
        return;
    }
    console.log("event");
    clickCount++;
    renderClickCount();
    faceCardUp(this);
    checkCards(this);
}

/* functions to hide and unhide based on flipping cards */

function faceCardUp(card) {
    card.classList.add("flip");
    card.firstElementChild.classList.remove("d-none");
    card.firstElementChild.nextElementSibling.classList.add("d-none");  
}

function faceCardDown(card) {
    card.classList.remove("flip");
    card.firstElementChild.classList.add("d-none");
    card.firstElementChild.nextElementSibling.classList.remove("d-none");   
}



/* End Game  */

function endGame() {
    currentScore.score = clickCount;
        if (previousScores.length === 0) {
            console.log("first score logged");
            updateScore();
            let scoreAttach = document.getElementById("scoreTable");
            let scoreRender = document.createElement("p");
            scoreRender.setAttribute("class", "score-display");
            scoreRender.innerHTML = "Your score was " + currentScore.score;
            scoreAttach.appendChild(scoreRender);
        }else{
            updateScore();
            let scoreAttach = document.getElementById("scoreTable");
            scoreAttach.removeChild(scoreAttach.firstElementChild);
            let scoreRender = document.createElement("p");
            scoreRender.setAttribute("class", "score-display");
            scoreRender.innerHTML = "Your score was " + currentScore.score;
            scoreAttach.appendChild(scoreRender);
        }
    $(".whyPlay-container").addClass("d-none");
    $(".aboutHidden").removeClass("d-none");
    $(".card-container").addClass("d-none");
    
}


function updateScore() {
    previousScores.push(currentScore);
    localStorage.setItem("previousScores", JSON.stringify(previousScores));
}

/* Check card match function - unflips cards if not a match - also adds click count on click*/

function checkCards(currentCard) {
    if (firstClickCard) {
        if (firstClickCard.dataset.card === currentCard.dataset.card) {
            setTimeout(function(){
                cardMatch.push(firstClickCard.getAttribute('data-card'));
                firstClickCard.classList.add("invis");
                firstClickCard = null;
                cardMatch.push(currentCard.getAttribute('data-card'));
                currentCard.classList.add("invis");
                currentCard = null;
            }, 200); 
            if (cardMatch.length === 16) {
                endGame();
            }
            console.log("card match");
        } else {
            lockAfterMatch = true;
            setTimeout(function(){
                faceCardDown(firstClickCard);
                faceCardDown(currentCard);
                firstClickCard = null;
                lockAfterMatch = false;
            }, 500);         
        } 
    } else {
        firstClickCard = currentCard;
    }
}

cards.forEach(card => card.addEventListener("click", flippingCard));

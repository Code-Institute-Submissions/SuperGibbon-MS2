/* Nav bar buttons */

$("#whyPlayBtn").click(function() {
    $(".aboutHidden").addClass("d-none")
    $(".card-container").addClass("d-none")
    $(".whyPlay-container").removeClass("d-none")
})

$("#homeBtn").click(function() {
    $(".whyPlay-container").addClass("d-none")
    $(".aboutHidden").removeClass("d-none")
    $(".card-container").addClass("d-none")
})

const cards = document.querySelectorAll(".playing-card");
const maxTime = 90

let firstClickCard, currentCard;
let lockAfterMatch = false;
let cardMatch = []
let clickCount = 0

/* Start Game */
$("#gameStart").click(function() {
    $(".aboutHidden").addClass("d-none")
    $(".whyPlay-container").addClass("d-none")
    $(".card-container").removeClass("d-none")
    clickCount = 0;
    cardMatch.length = 0;
    cards.forEach(card => card.classList.remove("invis"));
    cards.forEach(faceCardDown);
})


/* Flip card */

function flippingCard (event) {
    if (lockAfterMatch) {
        return;
    }
    console.log("event");
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
    alert("you win")
}

/* Render Score Table */


/* Check card match function - unflips cards if not a match - also adds click count on click*/

function checkCards(currentCard) {
    if (firstClickCard) {
        if (firstClickCard.dataset.card === currentCard.dataset.card) {
            cardMatch.push(firstClickCard.getAttribute('data-card'))
            firstClickCard.classList.add("invis");
            firstClickCard = null;
            cardMatch.push(currentCard.getAttribute('data-card'))
            currentCard.classList.add("invis");
            currentCard = null;
            clickCount++;
            if (cardMatch.length === 16) {
                endGame()
            }
            console.log("card match");
        } else {
            lockAfterMatch = true;
            setTimeout(function(){
                faceCardDown(firstClickCard);
                faceCardDown(currentCard);
                firstClickCard = null;
                lockAfterMatch = false;
            }, 1000);
            clickCount++;            
        } 
    } else {
        firstClickCard = currentCard;
        clickCount++;
    }
}

cards.forEach(card => card.addEventListener("click", flippingCard));

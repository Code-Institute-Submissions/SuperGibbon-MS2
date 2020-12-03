/* Nav bar buttons */

$("#whyPlayBtn").click(function() {
    $(".aboutHidden").addClass("d-none")
    $(".card-container").addClass("d-none")
    $(".whyPlay-container").removeClass("d-none")
})

$("#homeBtn").click(function() {
    $(".whyPlay-container").addClass("d-none")
    $(".aboutHidden").removeClass("d-none")  
})

/* Play game button - need to add error if name empty*/ 

$("#gameStart").click(function() {
    $(".aboutHidden").addClass("d-none")
    $(".whyPlay-container").addClass("d-none")
    $(".card-container").removeClass("d-none")   
})

/* Flipping card */

const cards = document.querySelectorAll(".playing-card");
const flipClass = document.querySelectorAll(".flip")

let firstClickCard, secondClickCard;

let lockAfterMatch = false;

function checkMatch() {
    if (flipClass[0] === flipClass[1]) {
        
        /*  makeHidden(); */ /* yet to be written*/
        return;
    }
}

/*function makeHidden() {
    
}*/

function flippingCard (event) {
    if (lockAfterMatch) {
        return;
    }
    console.log("event");
    faceCardUp(this);
    checkCards(this);
}

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

function checkCards(currentCard) {
    if (firstClickCard) {
        if (firstClickCard.dataset.card === currentCard.dataset.card) {
            firstClickCard.classList.add("invis");
            firstClickCard = null;
            currentCard.classList.add("invis");
            currentCard = null;
            console.log("card match");
        } else {
            lockAfterMatch = true;
            setTimeout(function(){
                faceCardDown(firstClickCard);
                faceCardDown(currentCard);
                firstClickCard = null;
                lockAfterMatch = false;
            }, 3000);
            
        } 
    } else {
        firstClickCard = currentCard;
    }
}

function unflippingCard () {
    
}

cards.forEach(card => card.addEventListener("click", flippingCard));

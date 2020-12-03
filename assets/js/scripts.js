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

function checkMatch() {
    if (flipClass[0] === flipClass[1]) {
        
        /*  makeHidden(); */ /* yet to be written*/
        return;
    }
}

/*function makeHidden() {
    
}*/

function flippingCard () {
    this.classList.add("flip")
    this.firstElementChild.classList.remove("d-none");
    this.firstElementChild.nextElementSibling.classList.add("d-none");  
    if (flipClass.length === 2) {
        checkMatch
    }  
}

function unflippingCard () {
    
}

cards.forEach(card => card.addEventListener("click", flippingCard));

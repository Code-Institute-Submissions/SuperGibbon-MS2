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

function flippingCard () {
    this.firstElementChild.classList.toggle("d-none")
    this.firstElementChild.nextElementSibling.classList.toggle("d-none")
}

cards.forEach(card => card.addEventListener("click", flippingCard));


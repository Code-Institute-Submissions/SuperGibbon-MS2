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

/* Play game button */

$("#gameStart").click(function() {
    $(".aboutHidden").addClass("d-none")
    $(".whyPlay-container").addClass("d-none")
    $(".card-container").removeClass("d-none")   
})
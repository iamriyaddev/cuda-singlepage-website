$(document).ready(function(){

    // Sticky Menu
    $(".js-services").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    // Mixitup (Portfolio Section)
    var mixer = mixitup('.container');
});

function openNav(){
    document.getElementById("myNav").style.width = "300px";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0";
}


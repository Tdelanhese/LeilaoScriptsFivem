$(document).on("scroll",function() {
    console.log($(document).scrollTop())
    
    if($(document).scrollTop() < 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".submenu").removeClass("close");
    }

    if($(document).scrollTop() > 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".submenu").addClass("close");
    }
});
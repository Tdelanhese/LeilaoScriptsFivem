$(document).on("scroll",function() {
    if($(document).scrollTop() < 100) {
        $(".submenu").removeClass("close");
    }

    if($(document).scrollTop() > 100) {
        $(".submenu").addClass("close");
    }
});
$(document).ready(() => {
    var user = window.localStorage.getItem("user")

    if(user) {
        $("#logout").css("display", "unset")
    }
})

$(document).on("scroll",function() {    
    if($(document).scrollTop() < 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".submenu").removeClass("close");
    }

    if($(document).scrollTop() > 100) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO
        $(".submenu").addClass("close");
    }
});

$("#user").on("click", function() {
    redirectToLoginOrPerfil()
})

function redirectToLoginOrPerfil() {
    var user = window.localStorage.getItem("user")

    if(user) {
        return window.parent.location.pathname = "/pages/perfilUsuario.html"
    }

    window.parent.location.pathname = "/pages/login.html"
}

$("#logout").click(() => {
    window.localStorage.removeItem("user")
    window.parent.location.pathname = "/pages/login.html"
})
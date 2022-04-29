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
        return window.location.pathname = "/pages/perfilUsuario.html"
    }

    window.location.pathname = "/pages/login.html"
}
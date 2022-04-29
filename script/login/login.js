function isNullOrEmpty(str) {
    return str == null || str.replaceAll(' ','') == ""
}

$("#btn-login").click(function() {
    verificarLogin()
})

function verificarLogin() {
    var login = $("#login").val()
    var senha = $("#password").val()

    if(isNullOrEmpty(login) || isNullOrEmpty(senha)) {
        return alert("Preecha todos os campos para realizar login")
    }

    $.ajax({
        type: "GET",
        url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/getUsers?login=${login}`,
        headers: {
            "accept": "application/json",
        },
        success: function (response) {
            response = JSON.parse(response.body)[0]

            if(response?.login == login && response?.senha == senha) {
                localStorage.setItem("user", JSON.stringify(response));

                window.location.pathname = "/pages/perfilUsuario.html"
            }
        }
    })
}
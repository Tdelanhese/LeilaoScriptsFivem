function mascaraCPF(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}

function mascaraData(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "10");
    if (v.length == 2) i.value += "/";
    if (v.length == 5) i.value += "/"
}

function mouseoverPass(id) {
    var obj = document.getElementById(id);
    obj.type = "text";
}

function mouseoutPass(id) {
    var obj = document.getElementById(id);
    obj.type = "password";
}

async function cadastroUser() {
    var senha_1 = $("#senha-1")
    var senha_2 = $("#senha-2")
    console.log(senha_1.val(), senha_2.val())

    verificarLogin($("#email").val()).then(response => {
        var retorno = JSON.parse(response.body)
        if (retorno.length > 0) {
            return alert("e-mail ja cadastrado")
        }

        if (senha_1.val() != senha_2.val()) {
            return alert("Senhas necessitam ser iguais")
        }

        $.ajax({
            type: "POST",
            url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/CreateUser`,
            contentType: "application/json",
            data: JSON.stringify({
                nome: $("#nome").val(),
                sobrenome: $("#sobrenome").val(),
                dataNascimento: $("#data-nascimentos").val(),
                cpf: $("#cpf").val(),
                login: $("#email").val(),
                senha: $("#senha-1").val()
            }),
            headers: {
                "accept": "application/json"
            },
            success: function (response) {
                console.log(response)
            }
        })
    })
}

function verificarLogin(login) {

    return $.ajax({
        type: "GET",
        url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/getUsers?login=${login}`,
        headers: {
            "accept": "application/json",
        },
    })
}



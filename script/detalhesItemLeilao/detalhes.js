$(document).ready(() => {
    var leilao = JSON.parse(window.localStorage.getItem("leilaoSelecionado"))

    if(!leilao) {
        window.parent.location.pathname = "/pages/leiloesFinalizados.html"
    }

    $.ajax({
        type: "GET",
        url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/api_leilao/lancesleilao`,
        headers: {
            "accept": "application/json",
        },
        success: function (response) {
            if(response.statusCode == 400) {
                return alert("Leilão não encontrado!")
            }

            response = JSON.parse(response.body)

            var lances = response.filter(x => x.idLeilao.S == leilao.id.N)

            console.log(response)

            console.log(lances, leilao.id.N)

            var max = {
                valor: {
                    S: leilao.lanceInical.N
                },
                loginUser: {
                    S: "Lance Inicial"
                }
            }

            if(lances.length > 0) {
                max = lances.reduce((prev, current) => (parseInt(prev.valor.S) > parseInt(current.valor.S)) ? prev : current)
            }

            console.log("max", max, leilao)

            $(".item-detalhes").empty();

            $(".item-detalhes").append(`
                <div class="card">
                    <img src="${leilao.imagem.S}" alt="">

                    <div class="desc">
                        <div>
                            <p class="title">${leilao.title.S}</p>
                            <p class="description">${leilao.description.S} <br><br><br>
                                Maior lance dado por: <span>${max.loginUser.S}</span><br>
                                Valor: <span>R$ ${max.valor.S}</span>
                            </p>
                        </div>
                        
                        <div class="infos">
                            <input type="number" id="dar-lance">
                            <button id="btn-lance">Dar Lance</button>
                        </div>
                    </div>
                </div>
            `)

            $("#btn-lance").click(function() {
                var valorLance = $("#dar-lance").val()
                
                var user = JSON.parse(window.localStorage.getItem("user"))

                if(!user) {
                    return alert("Faça login para dar um lance")
                }

                if(valorLance <= parseInt(max.valor.S)) {
                    return alert("O valor tem que superar o último lance!")
                }

                if(max.loginUser.S == user.login) {
                    return alert("O último lance já é seu!")
                }

                var lance = {
                    idLance: parseInt(response.length + 1),
                    idLeilao: parseInt(leilao.id.N),
                    loginUser: user.login,
                    valor: valorLance
                }

                console.log(lance)

                $.ajax({
                    type: "POST",
                    url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/api_leilao/lancesleilao`,
                    contentType: "application/json",
                    data: JSON.stringify({ 
                        idLance: response.length + 1,
                        idLeilao: leilao.id.N,
                        loginUser: user.login,
                        valor: valorLance
                    }),

                    headers: {
                        "accept": "application/json"
                    },
                    success: function (response) {
                        if(response.statusCode == 200) {
                            $(".description").html(`
                                ${leilao.description.S} <br><br><br>
                                Maior lance dado por: <span>${user.login}</span><br>
                                Valor: <span>R$ ${valorLance}</span>
                            `)

                            return alert("Lance dado com sucesso!")
                        }

                        alert("Erro ao dar lance!")
                    }
                })
            })
        }
    })
})
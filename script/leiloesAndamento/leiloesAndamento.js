// https://vbmco53lae.execute-api.us-east-1.amazonaws.com/api_leilao/criacaoleilao

$(document).ready(() => {
    $("#leiloes .itens").empty();

    try {
        $.ajax({
            type: "GET",
            url: `https://vbmco53lae.execute-api.us-east-1.amazonaws.com/api_leilao/criacaoleilao`,
            headers: {
                "accept": "application/json",
            },
            success: function (response) {
                if(response.statusCode == 400) {
                    return alert("Leilões não encontrados!")
                }
    
                response = JSON.parse(response.body)

                console.log(response)
    
                response.forEach(item => {
                    $("#leiloes .itens").append(`
                        <div class="card">
                            <img src="${item.imagem.S}" alt="">
    
                            <div class="desc">
                                <p class="title">${item.title.S}</p>
                                <p class="description">${item.description.S}</p>
                                
                                <div class="infos">
                                    <p><span>R$ ${item.lanceInical.N}</span></p>
                                    <button class="button-detalhes" data-value='${JSON.stringify(item)}'>Detalhes</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
                
                $(".button-detalhes").click(function() {
                    var item = JSON.parse(JSON.stringify($(this).data("value")))

                    localStorage.setItem("leilaoSelecionado", JSON.stringify(item));

                    window.location.pathname = "/LeilaoScriptsFivem/pages/detalhesItemLeilao.html"
                })
            }
        })
    } catch (error) {
        return alert("Leilões não encontrados!")
    }
})



function detalhesItem(item) {
    console.log(item)
}

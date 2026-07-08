async function requisitarServicos() {
    const req = await fetch("http://localhost:8000/servicos")
    const res = await req.json()
    console.log(res);
    console.log(res.carros.length);
    console.log(res.motos.length);
    for (let index = 0; index < res.carros.length; index++) {
        let conteinerServicos = document.getElementsByClassName("servicos-container")[0];
        let servico = document.createElement("div");
        let titulo = document.createElement("h2");
        let descricao = document.createElement("p");
        servico.classList.add("servico");
        if (index % 2 === 0) {

            servico.classList.add("item-esquerda")
        } 
        else {
            servico.classList.add("servico");
        }


        titulo.textContent = res["carros"][index].titulo
        descricao.textContent = res["carros"][index].descricao
        servico.appendChild(titulo);
        servico.appendChild(descricao);

        conteinerServicos.appendChild(servico);

    }
    for (let index = 0; index < res.motos.length; index++) {
        let conteinerServicos = document.getElementById("servicos-container-pt2");
        let servico = document.createElement("div");
        let titulo = document.createElement("h2");
        let descricao = document.createElement("p");

        
        if (index % 2 === 0) {
            servico.classList.add("item-esquerda")
        }
        else {
            servico.classList.add("item-direita")

        }
        servico.classList.add("servico");
        titulo.textContent = res["motos"][index].titulo
        descricao.textContent = res["motos"][index].descricao
        servico.appendChild(titulo);
        servico.appendChild(descricao);

        conteinerServicos.appendChild(servico);

    }



}

requisitarServicos();

async function validadeUsuario() {
    const req = await fetch("http://localhost:8000/usuarios")
    const res = await req.json()
    if (res.length > 0) {
        const divLogin = document.getElementById("botoes-senha")
        divLogin.innerHTML = ""
        const icon = document.createElement("img")
        icon.src = "../img/icons8-cliente-48.png"

        let nomeUsuarioLogin = document.createElement("p")
        nomeUsuarioLogin.textContent = res["NomeDeUsuario"]
        nomeUsuarioLogin.style.color = "white"
        nomeUsuarioLogin.style.fontSize = "16px"
    }
} validadarUsuario();
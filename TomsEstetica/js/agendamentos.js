

async function selecionarServicos() {
    const servicoSelecionado = document.getElementById("servicos-carros-list")
    const servicoExtraSelecionado = document.getElementById("servicos-extra-list")
    const resumoServicos = document.getElementById("lista-selecionados")

    if (!servicoSelecionado.value || !servicoExtraSelecionado.value) {
        alert("Preencha todos os campos!");
        return;
    }
    const servicos = {
        "servico": servicoSelecionado.value,
        "servicoExtra": servicoExtraSelecionado.value,
    }
    let listaDeServicosSelecionados = document.createElement('li');
    listaDeServicosSelecionados.textContent = `${servicoSelecionado.value} e ${servicoExtraSelecionado.value}`
    resumoServicos.appendChild(listaDeServicosSelecionados)

    await fetch("http://localhost:8000/agendamento", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(servicos)
    

    })
    servicoSelecionado.value = null
    servicoExtraSelecionado.value = null
};



const btn = document.getElementById('btn-enviar-resumo')
btn.addEventListener("click", selecionarServicos);

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
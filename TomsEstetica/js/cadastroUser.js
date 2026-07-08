async function cadastroDeUsuarios() {
    const NomeDeUsuario = document.getElementById('username')
    const cpfUser = document.getElementById('cpf-code')
    const senhaUser = document.getElementById('password')
    const confimarSenhaUser = document.getElementById('password-confirm')

    if (!NomeDeUsuario.value || !cpfUser.value || !senhaUser.value || !confimarSenhaUser.value) {
        alert("Preencha todos os campos!");
        return;
    }
    if (senhaUser.value != confimarSenhaUser.value) {
        alert("Senhas diferentes!!");
        return;
    }
    if (cpfUser.value.length !== 11) {
        alert("CPF inválido.");
        return;
    }
    const user = {
        "NomeDeUsuario": NomeDeUsuario.value,
        "cpf": cpfUser.value,
        "Senha": senhaUser.value,
    }
    try {
        const resposta = await fetch("http://localhost:8000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)


        })

        const dados = await resposta.json();
        alert("Sucesso")

    } catch (erro) {
        console.log(erro)
        alert("Erro")
    }
}


const btn = document.getElementById('btn-cadastro')
btn.addEventListener("click", cadastroDeUsuarios);


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
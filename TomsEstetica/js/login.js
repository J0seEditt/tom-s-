async function loginUsuario() {

    const nomeUsuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (!nomeUsuario || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    try {

        const resposta = await fetch("http://localhost:8000/usuarios");
        const usuarios = await resposta.json();

        const usuarioEncontrado = usuarios.find(usuario =>
            usuario.NomeDeUsuario === nomeUsuario &&
            usuario.Senha === senha
        );

        if (usuarioEncontrado) {

            alert("Login realizado com sucesso!");

            // Salva o usuário logado
            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify(usuarioEncontrado)
            );

            // Redireciona para a página inicial
            window.location.href = "../html/index.html";

        } else {

            alert("Usuário ou senha incorretos.");

        }

    } catch (erro) {

        console.log(erro);
        alert("Erro ao conectar ao servidor.");

    }
}

const btnLogin = document.getElementById("login-btn");
btnLogin.addEventListener("click", loginUsuario);
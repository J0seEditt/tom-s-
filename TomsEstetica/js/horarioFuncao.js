
async function hoariosDeFuncionamento() {
    const req = await fetch("http://localhost:8000/horariosFuncionamento")
    const res = await req.json()
    for (let index = 0; index < res.horariosFuncionamento.length; index++) {
        
        let ul = document.getElementById("listaHorarios");
        let elementoLista = document.createElement("li")
        

        elementoLista.textContent = res["horariosFuncionamento"][index].dia
        ul.appendChild(elementoLista);
    }
}
hoariosDeFuncionamento();


async function validadarUsuario() {
    const req = await fetch("http://localhost:8000/usuarios")
    const res = await req.json()
    if (res.length > 0) {
        const divLogin = document.getElementById("botoes-senha")
        divLogin.innerHTML = ""
        const icon = document.createElement("img")
        icon.src = "../img/icons8-cliente-48.png"

        let nomeUsuarioLogin = document.createElement("p")
        nomeUsuarioLogin.textContent = res[0].NomeDeUsuario;
        divLogin.appendChild(icon);
        divLogin.appendChild(nomeUsuarioLogin);

        nomeUsuarioLogin.style.color = "white"
        nomeUsuarioLogin.style.fontSize = "16px"
    }
}
 validadarUsuario();

const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {

  const divLogin = document.getElementById("botoes-senha");

  divLogin.innerHTML = "";

  const icon = document.createElement("img");
  icon.src = "../img/icons8-cliente-48.png";

  const nome = document.createElement("p");
  nome.textContent = usuarioLogado.NomeDeUsuario;
  nome.style.color = "white";
  nome.style.fontSize = "16px";
  icon.style.width = "16px";
  icon.style.height = "16px";

  divLogin.appendChild(icon);
  divLogin.appendChild(nome);
}
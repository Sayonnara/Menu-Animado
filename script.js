const botao = document.querySelector(".botao-menu");
const menuLateral = document.querySelector(".menu-lateral");
const background = document.querySelector(".background");
const conteudo = document.querySelector(".conteudo");

botao.addEventListener("click", () => {

  menuLateral.classList.toggle("ativo");
  botao.classList.toggle("ativo");
  background.classList.toggle("ativo");
  conteudo.classList.toggle("ativo");
  document.body.style.backgroundColor = menuLateral.classList.contains("ativo")
    ? "#34495e"
    : "#ecf0f1";
});

background.addEventListener('click', () =>{

  menuLateral.classList.remove("ativo");
  botao.classList.remove("ativo");
  background.classList.remove("ativo");
  conteudo.classList.remove("ativo");
   document.body.style.backgroundColor = "#ecf0f1"

})

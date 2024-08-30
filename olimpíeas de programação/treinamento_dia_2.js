var celularicone = document.querySelector('.menucelular');
//criar um evento pra definir sua função
celularicone.addEventListener('click', abrirMenu)

//função definida
function abrirMenu(){
    var menuprincipal = document.querySelector ('.menu');
    menuprincipal.classList.toggle("adicionar_Classe_Ao_Clicar")
}
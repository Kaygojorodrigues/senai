var posicao_inicial = 0

document.addEventListener("keydown", animacao)

function animacao(evento){
     var elemento = document.querySelector('#elemento')
     var kurby = document.querySelector('#kurby')
     var meninas = document.querySelector('#meninas')
     if(evento.code === "ArrowRight"){
     posicao_inicial = posicao_inicial + 100
    elemento.style.left = posicao_inicial + "px"

    kurby.classList.remove ('invertido');
    meninas.classList.remove ('invertido');

}
    else if(evento.code === "ArrowLeft"){
      posicao_inicial = posicao_inicial - 100;
      elemento.style.left = posicao_inicial + "px";
      kurby.classList.add('invertido')
      meninas.classList.add('invertido')

    }
}
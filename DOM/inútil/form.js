
var button = document.querySelector('#botao')

button.addEventListener('click', maior)

function maior(){
    var n1 = document.querySelector('#n1').value
    var n2 = document.querySelector('#n2').value
    var resultado = document.querySelector('#resultado')


if(n1 > n2){
    resultado.innerHTML = 'o primeiro número é maior:' + n1
}

else{
    resultado.innerHTML = 'o segundo número é maior:' + n2

}
}

while (true) {
var numerodigitado = Number(prompt("digite um número: "))
var numero = Math.floor(Math.random() * 3)
alert(numero)
if(numerodigitado == numero){
    alert("o código acabou")
    break
}
else{
    alert("você errou, tente novamente")
}
}


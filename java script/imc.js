var peso = Number(prompt("qual é a seu peso?"))
var altura = Number(prompt("qual é seu altura?"))

var resultado = peso/(altura * altura)
document.write('seu imc é: ');
document.write(resultado);

var imc = []
imc.push(resultado)

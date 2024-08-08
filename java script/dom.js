//var gojo = document.querySelector("#gojo");

//gojo.style.color = 'pink',


//var h1 = document.querySelector('h1')
//console.log(h1)

var novoparagrafo = document.createElement("p")
var texto = document.createTextNode("texto criado pelo js")
novoparagrafo.appendChild(texto)
var body = document.querySelector('body')
body.appendChild(novoparagrafo)
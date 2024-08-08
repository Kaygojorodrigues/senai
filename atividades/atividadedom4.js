function clicar(){

  var novoparagrafo = document.createElement("p")
  var texto = document.createTextNode("texto criado pelo js")
  novoparagrafo.appendChild(texto)

  var body = document.querySelector('body')

  body.appendChild(novoparagrafo)
}
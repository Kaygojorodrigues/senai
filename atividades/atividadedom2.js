
var novoparagrafo = document.createElement("p")
var texto = document.createTextNode("LADY GAGA")

novoparagrafo.style.color = 'purple',
novoparagrafo.appendChild(texto)
var body = document.querySelector('body')
body.appendChild(novoparagrafo)
body.removeChild(novoparagrafo)
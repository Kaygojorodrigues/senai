//var estados = ['Acre', 'São Paulo', 'Rio De Janeiro','Tóquio']
//document.write(estados[3])

  var gloss = ['carmed','maxlove','ruby rose','MELU','lua e neve','fenzza'];
  
  document.write('tamanho da Array é ' + gloss.length)
  gloss.unshift('Gojo')
  gloss.shift('Gojo');
  gloss.push('Gojo');
  gloss.pop('Gojo');
  gloss.splice(2, 1)

  document.write(`<h1>${gloss}<h1>`);

  var achado = gloss.includes('carmed')
  document.write(`Você está atrás do Carmed? aqui está! ${achado}`)
  document.write(gloss.indexOf('maxlove'))
  gloss[2] = "Gojo"
  alert (gloss)
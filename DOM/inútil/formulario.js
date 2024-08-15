var botao = document.querySelector('#botao')
botao.addEventListener('click', formulario)

function formulario(){
    var nome = document.querySelector('#nome').value 
    var sobrenome = document.querySelector('#sobrenome').value
    var telefone = document.querySelector('#Telefone').value
    
    if(nome == "" || sobrenome == "" || telefone == ""){
       return false
    }

    alert('Meu nome é: ' + nome)
    alert('Meu sobrenome é ' + sobrenome)
    alert('Meu Telefone é ' + telefone)
}
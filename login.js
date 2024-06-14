alert("Bem-vindo ao sistema! vamos criar uma conta")
var usuario = prompt("Digite um nome de usuário")
var senha = prompt("Crie uma senha:")

alert("Conta criada! vamos realiar o login")

var novousuario = prompt("Digite seu nome de usuário:")
var novasenha = prompt("Digite sua senha:")

 if(usuario == novousuario && senha == novasenha){
    alert("Carregando...")
    alert("Parabéns! Bem-vindo!")
    document.write("Olá")
    document.write('<img src="https://capricho.abril.com.br/wp-content/uploads/2016/12/taylor_swift_for_catie.gif" alt="">')
   
 }

 else{
    alert("Dados incorretos")
 }







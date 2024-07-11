  var cadastrados = []
  while(true){
  alert("Bem-vindo ao cadastro de funcionário de recursos humanos")
  var opcao = prompt( "1- cadastrar funcionário; \n2- mostrar funcionários; \n3- excluir funcionários;  \n4- sair do sistema. \nEscolha uma opção:")
  
  if (opcao == 1){
    var nome = (prompt("Insira Seu Nome: "))
    var email = (prompt("insira seu email: "))
    var senha = (prompt("insira sua senha: "))
   alert("seu cadastro foi feito com sucesso!")
    cadastrados.push(nome)
}
   else if(opcao == 2){
    if(cadastrados.length == 0){
        alert("nenhum usuário")
    }
    
   else{
    alert(`funcionário encontrado: ${cadastrados}`)
   }
 }
     else if(opcao == 3){
        var indice = String(prompt("Nome do funcionário a ser excluído:"))
        cadastrados.indexOf(indice)
        cadastrados.splice(indice, 1)
        alert("Usuário excluído com sucesso.")
     }
      else{
        alert("Você saiu do cadastro")
        break
      }

}
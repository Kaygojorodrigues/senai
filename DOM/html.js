     let area = document.querySelector('#area')
     area.addEventListener("clik",() => {
        area.innerHTML = ''
     })
     area.addEventListener("mouseenter", entrar)
     area.addEventListener("moseout", sair)


     //function clicar(){
          //area.innerHTML = 'clicou'
     //}
     function entrar(){
          area.innerHTML = 'entrou'
     }
     function sair(){
        area.innerHTML = 'sair'
     }
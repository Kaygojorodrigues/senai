var botao = document.querySelector('#button')
let body = document.querySelector('body')

button.addEventListener('click', clicar)

function clicar(){
    body.style.backgroundImage = 'url(https://i.pinimg.com/originals/5a/64/2e/5a642edc6171aea8ddeb5af782df6d8b.jpg)'
    button.innerHTML = 'clicou'
}
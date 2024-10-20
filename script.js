const show = document.querySelector('.bi')
const showMenu = document.querySelector('.shouMenu')

show.addEventListener('click',showMen)

function showMen(){
    showMenu.style.display = 'block'
    show.style.display = 'none'
}
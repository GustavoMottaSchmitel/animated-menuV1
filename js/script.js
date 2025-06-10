const button = document.querySelector('.toggle')
const sideMenu = document.querySelector('.side-menu')
const content = document.querySelector('.content')
const background = document.querySelector('.background')

button.addEventListener('click', () => {
    sideMenu.classList.toggle('active')
    button.classList.toggle('active')
    content.classList.toggle('active')
    background.classList.toggle('active')
    document.body.style.backgroundColor = sideMenu.classList.contains('active') ? '#34495e' : '#ecf0f1'

})

background.addEventListener('click', () => {
    sideMenu.classList.remove('active')
    button.classList.remove('active')
    content.classList.remove('active')
    background.classList.remove('active')
    document.body.style.backgroundColor = '#ecf0f1'
})

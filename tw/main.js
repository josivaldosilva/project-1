import './style.css'

const showMenu = document.querySelector('#hamburger')
const closeMenu = document.querySelector('#close')
const mobile = document.querySelector('#menu')

const btns = [showMenu, closeMenu]

btns.map((btn) => {
    btn.addEventListener('click', () => {
        mobile.classList.toggle('active')
    })
})
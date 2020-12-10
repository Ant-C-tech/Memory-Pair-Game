'use strict'

const MAIN = document.querySelector('.main')

initApp()

function initApp() {
    addStartGame()
}

function addStartGame() {
    const startBtn = document.createElement('h3')
    startBtn.textContent = 'Start Game'
    startBtn.classList.add('startBtn')
    MAIN.appendChild(startBtn)
}

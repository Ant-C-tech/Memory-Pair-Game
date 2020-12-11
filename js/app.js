'use strict'

const MAIN = document.querySelector('.main')
addContent(createStartGameScr())


function createStartGameScr() {
    const startBtnWrapper = new DocumentFragment()

    const startBtnIco = document.createElement('img')
    startBtnIco.setAttribute('src', '../img/lucky-cat-toy-svgrepo-com.svg')
    startBtnIco.setAttribute('alt', 'mentor')
    startBtnIco.classList.add('startBtnIco')

    const startBtn = document.createElement('h3')
    startBtn.textContent = 'Start Game'
    startBtn.classList.add('startBtn')

    const startBtnImg = document.createElement('img')
    startBtnImg.setAttribute('src', '../img/branches-with-leaves-svgrepo-com.svg')
    startBtnImg.setAttribute('alt', 'branch with leaves')
    startBtnImg.classList.add('startBtnImg')

    startBtnWrapper.append(startBtnIco, startBtn, startBtnImg)
    startBtn.addEventListener('click', hideMain, { once: true })

    return startBtnWrapper
}

function addContent(content) {
    MAIN.append(content)
}

function hideMain() {
    MAIN.classList.add('main-hide')
    MAIN.addEventListener('transitionend', clearMain, { once: true })
}

function showMain() {
    MAIN.classList.remove('main-hide')
}

function clearMain() {
    MAIN.innerHTML = ''
}

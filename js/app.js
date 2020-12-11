'use strict'

const MAIN = document.querySelector('.main')
    //Music
const GAMEPLAY_AUDIO = new Audio('./audio/Japanese_Countryside.mp3')
GAMEPLAY_AUDIO.loop = true
GAMEPLAY_AUDIO.volume = 0.2


MAIN.append(createGreeting())



function createGreeting() {

    const greeting = document.createElement('h3')
    greeting.textContent = 'Kottans present...'
    greeting.classList.add('greeting')

    greeting.addEventListener('click', function() {
        GAMEPLAY_AUDIO.play()

    }, { once: true })

    return greeting
}

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


function changeContent() {

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

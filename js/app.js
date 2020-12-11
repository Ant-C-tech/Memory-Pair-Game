'use strict'

const MAIN = document.querySelector('.main')
    //Music
const GAMEPLAY_AUDIO = new Audio('./audio/Japanese_Countryside.mp3')
GAMEPLAY_AUDIO.loop = true
GAMEPLAY_AUDIO.volume = 0.05


MAIN.append(createGreeting())


function createGreeting() {
    const greeting = document.createElement('h3')
    greeting.textContent = 'Kottans present'
    greeting.classList.add('greeting')

    greeting.addEventListener('click', function() {
        GAMEPLAY_AUDIO.play()
        changeContent(createStartGameScr())
        document.querySelector('header').classList.add('header-show')
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
    startBtn.addEventListener('click', () => changeContent(createGameField()), { once: true })


    return startBtnWrapper
}

function createGameField() {
    const gameField = document.createElement('div')
    gameField.classList.add('cardsContainer')
    for (let index = 0; index < 12; index++) {
        const card = document.createElement('div')
        card.classList.add('card')
        const cardBack = document.createElement('img')
        cardBack.setAttribute('src', '../img/card-back.jpeg')
        cardBack.setAttribute('alt', 'japanese ornament')
        cardBack.classList.add('cardBack')
        card.appendChild(cardBack)
        gameField.appendChild(card)
    }
    return gameField
}


function changeContent(content) {
    MAIN.classList.add('main-hide')
    MAIN.addEventListener('transitionend', function() {
        MAIN.innerHTML = ''
        MAIN.append(content)
        MAIN.classList.remove('main-hide')
    }, { once: true })
}

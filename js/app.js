'use strict'

import hiragana from './hiragana.js'

const MAIN = document.querySelector('#main')
const HEADER = document.querySelector('#header')
const DESCRIPT = document.querySelector('#descript')
    //Music
const GAMEPLAY_AUDIO = new Audio('./audio/Japanese_Countryside.mp3')
GAMEPLAY_AUDIO.loop = true
GAMEPLAY_AUDIO.volume = 0.01


MAIN.append(createGreeting())


function createGreeting() {
    const greeting = document.createElement('h3')
    greeting.textContent = 'Kottans present'
    greeting.classList.add('greeting')

    greeting.addEventListener('click', function() {
        GAMEPLAY_AUDIO.play()
        changeContent(createStartGameScr())
        HEADER.classList.add('header-show')
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
    startBtn.addEventListener('click', () => {
        changeContent(createGameField())
        hideElem(DESCRIPT, "animate__zoomOut")
    }, { once: true })

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

        const cardFace = document.createElement('div')
        cardFace.classList.add('cardFace')
        const japText = document.createElement('p')
        japText.innerText = "あ"
        japText.classList.add('japText')
        const engText = document.createElement('p')
        engText.innerText = "a"
        engText.classList.add('engText')
        cardFace.append(japText, engText)
        card.append(cardBack, cardFace)

        card.addEventListener('click', () => {
            card.classList.add('card-rotate')
            cardBack.classList.add('cardBack-rotate')
            cardBack.addEventListener('transitionend', function() {
                cardFace.classList.add('cardFace-rotate')
            }, { once: true })
        })
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

function hideElem(elem, effect) {
    elem.classList.add(effect)
    elem.addEventListener('animationend', function() {
        elem.style.display = 'none'
    }, { once: true })
}

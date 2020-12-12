'use strict'

import hiragana from './hiragana.js'

const MAIN = document.querySelector('#main')
const HEADER = document.querySelector('#header')
const DESCRIPT = document.querySelector('#descript')
let TASK = []
    //Music
const GAMEPLAY_AUDIO = new Audio('./audio/Japanese_Countryside.mp3')
GAMEPLAY_AUDIO.loop = true
GAMEPLAY_AUDIO.volume = 0.2


MAIN.append(createGreeting())
setTask()
TASK = TASK.concat(TASK)


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
        const cardContent = TASK.splice(_getRandomIntInclusive(0, TASK.length - 1), 1)

        const card = document.createElement('div')
        card.className = 'card animate__animated'
        card.setAttribute('data-value', cardContent[0].jap)

        const cardBack = document.createElement('img')
        cardBack.setAttribute('src', '../img/card-back.jpeg')
        cardBack.setAttribute('alt', 'japanese ornament')
        cardBack.classList.add('cardBack')

        const cardFace = document.createElement('div')
        cardFace.classList.add('cardFace')
        const japText = document.createElement('p')
        japText.innerText = cardContent[0].jap
        japText.classList.add('japText')
        const engText = document.createElement('p')
        engText.innerText = cardContent[0].eng
        engText.classList.add('engText')
        cardFace.append(japText, engText)
        card.append(cardBack, cardFace)

        card.addEventListener('click', () => {
            card.classList.add('card-rotate')
            cardBack.classList.add('cardBack-rotate')
            cardBack.addEventListener('transitionend', function() {
                cardFace.classList.add('cardFace-rotate')
            }, { once: true })
            checkAnswer()
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

function setTask() {
    TASK.push(hiragana[_getRandomIntInclusive(0, hiragana.length - 1)])
    while (TASK.length < 6) {
        let currentItem = hiragana[_getRandomIntInclusive(0, hiragana.length - 1)]
        let flag = false
        for (const item of TASK) {
            if (item.jap === currentItem.jap) {
                flag = true
            }
        }
        if (flag === false) {
            TASK.push(currentItem)
        }
    }
}

function checkAnswer() {
    const openCards = document.querySelectorAll('.card-rotate')
    if (openCards.length === 2) {
        if (openCards[0].getAttribute('data-value') === openCards[1].getAttribute('data-value')) {
            for (const elem of openCards) {
                let timeOut = setTimeout(() => {
                    elem.classList.add('animate__rotateOut')
                    elem.addEventListener('animationend', function() {
                        elem.classList.remove('card-rotate')
                    }, { once: true })
                    clearTimeout(timeOut)
                }, 1000);
            }
        } else {
            for (const card of openCards) {
                let timeOut = setTimeout(() => {
                    card.classList.remove('card-rotate')
                    card.children[1].classList.remove('cardFace-rotate')
                    card.children[1].addEventListener('transitionend', function() {
                        card.children[0].classList.remove('cardBack-rotate')
                    }, { once: true })
                    clearTimeout(timeOut)
                }, 1000);
            }
        }
    }
}

function _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const buttonsContainer = document.querySelector('.buttons-container')
const screen = document.querySelector('.screen')
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

startButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stop)

let interval
let s = 0
let m = 0
let h = 0

function reset() {
    s = 0
    m = 0
    h = 0
    screen.innerText = '00:00:00'
}

function stop() {
    reset() 
    clearInterval(interval)
    startButton.addEventListener('click', start)
}

function pause() {
    
    clearInterval(interval)
    startButton.addEventListener('click', start)
}

function start() {
    interval = setInterval(timer, 1000)
    timer()

    function timer() {
        ++s
        if (s === 60) {
            ++m
            s = 0
        }

        if (m === 60) {
            ++h
            m = 0
        }
        screen.innerText = 
        `${twoDigit(h)}:${twoDigit(m)}:${twoDigit(s)}`
    }

    function twoDigit(digit) {
        if (digit < 10) return `0${digit}`
        return digit
    }

    startButton.removeEventListener('click', start)
}


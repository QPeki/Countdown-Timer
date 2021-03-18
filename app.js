const showTimer = document.querySelector('.display-timer');
const timerBtn = document.querySelector('.btn-timer');
const container = document.querySelector('.container');
const stopTimerBtn = document.querySelector('.stop-btn');
const resetTimerBtn = document.querySelector('.reset-btn');

let timer = 0;

timerBtn.addEventListener('click', () => {

    intv = setInterval(() => {
        timer += 1000;
        showTimer.innerHTML = startTimer(timer);
    }, 1000)

})

stopTimerBtn.addEventListener('click', () => {
    clearInterval(intv);
})

resetTimerBtn.addEventListener('click', () => {
    timer = 0;
})

function startTimer(ms) {

    let seconds = Math.floor(ms / 1000) % 60;
    let minutes = Math.floor(ms / 1000 / 60) % 60;
    let hours = Math.floor(ms / 1000 / 60 / 60)

    seconds = ('0' + seconds).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    hours = ('0' + hours).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}


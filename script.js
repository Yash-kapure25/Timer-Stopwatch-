let timer;
let stopwatch;
let timerRunning = false;
let stopwatchRunning = false;
let lapCount = 1;

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!timerRunning) {
        let seconds = 0;
        timer = setInterval(function () {
            seconds++;
            document.getElementById('timerDisplay').innerText = formatTime(seconds);
        }, 1000);
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    document.getElementById('timerDisplay').innerText = '00:00:00';
}

function startStopwatch() {
    if (!stopwatchRunning) {
        let seconds = 0;
        stopwatch = setInterval(function () {
            seconds++;
            document.getElementById('stopwatchDisplay').innerText = formatTime(seconds);
        }, 1000);
        stopwatchRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
}

function resetStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    document.getElementById('stopwatchDisplay').innerText = '00:00:00';
    lapCount = 1;
    document.getElementById('laps').innerHTML = '';
}

function lapStopwatch() {
    const lapTime = document.getElementById('stopwatchDisplay').innerText;
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapItem);
    lapCount++;
}

const displayTimer = document.querySelector("#displayTimer");
const strButton = document.querySelector("#strButton");
const pauseButton = document.querySelector("#pauseButton");
const studyTimeInput = document.querySelector("#studyTimeInput");

let startTime = 0;
let elaspedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let totalStudyTime = 1500; // Default: 25 minutes (25 * 60 seconds)
let mins = 0;
let secs = 0;

strButton.addEventListener("click", () => {
    const inputMinutes = parseInt(studyTimeInput.value, 10);
    if (!isNaN(inputMinutes) && inputMinutes > 0) {
        totalStudyTime = inputMinutes * 60; // Convert minutes to seconds
    }

    if (paused) {
        paused = false;
        startTime = Date.now() - elaspedTime * 1000;
        intervalId = setInterval(updateTime, 1000);
        studyTimeInput.disabled = true; // Disable the input during the timer
    }
});

pauseButton.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elaspedTime = (Date.now() - startTime) / 1000; // convert
        clearInterval(intervalId);
        studyTimeInput.disabled = false; // Re-enable the input
    }
});

function updateTime(){
    elaspedTime = (Date.now() - startTime) / 1000; 

    if (elaspedTime >= totalStudyTime) {
        // Timer finished
        paused = true;
        clearInterval(intervalId);
        studyTimeInput.disabled = false; // Re-enable the input
        displayTimer.textContent = "00:00";
    } else {
        mins = Math.floor((totalStudyTime - elaspedTime) / 60);
        secs = Math.floor(totalStudyTime - elaspedTime - mins * 60);

        displayTimer.textContent = `${pad(mins)}:${pad(secs)}`;
    }
}

function pad(unit) {
    return unit.toString().padStart(2, "0");
}
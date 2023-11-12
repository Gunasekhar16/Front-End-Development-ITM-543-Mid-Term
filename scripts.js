// JavaScript Function: Click Event
function changeText() {
    document.getElementById("changeable-text").innerHTML = "Text changed by JavaScript!";
}

// JavaScript Function: Timer
function updateTimer() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("timer").innerHTML = "Current time: " + hours + ":" + minutes + ":" + seconds;
}

// Update the timer every second
setInterval(updateTimer, 1000);

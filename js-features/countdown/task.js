const timerId = document.getElementById("timer")

timerId.textContent = prompt("Укажите время отсчета, в формате: чч:мм:сс", "01:15:00" )

let timerStart = timerId.textContent

timerStart = timerStart.split(":")
let hours = Number(timerStart[0])
let minutes = Number(timerStart[1])
let seconds = Number(timerStart[2])
let totalTime = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000)

function timeEnd(){
    totalTime = totalTime - 1000
    hours = totalTime > 0 ? Math.floor(totalTime / 1000 / 60 / 60) % 24 : 0;
    minutes = totalTime > 0 ? Math.floor(totalTime / 1000 / 60) % 60 : 0;
    seconds = totalTime > 0 ? Math.floor(totalTime / 1000) % 60 : 0;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerId.textContent = hours + ":" + minutes + ":" + seconds
    
    if (totalTime == 0) {
        clearTimeout(time)
        alert ("Вы победили в конкурсе")
    }  
    return timerStart

}  

let time = setInterval(timeEnd, 1000)

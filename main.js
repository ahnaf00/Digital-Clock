
const displayTime = document.querySelector("#clockID")
const showTime = function getRecenttIME(){
    let date = new Date()
    let hours  = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    const amPM = hours > 12 ? "PM" : "AM"

    hours = hours > 12 ? hours - 12 : hours
    formatterHours = hours >= 10 ? hours : "0" + hours
    formatterMinutes = minutes >= 10 ? minutes : "0" + minutes
    formatterSeconds= seconds >= 10 ? seconds : "0" + seconds
    displayTime.innerHTML =  formatterHours + " : " + formatterMinutes + " : " + seconds + amPM
    
}

showTime();

setInterval(() =>{
    console.log(showTime())
}, 1000)
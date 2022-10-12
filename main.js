
const displayTime = document.querySelector("#clockID")
const showTime = function getRecenttIME(){
    let date        = new Date()
    let hours       = date.getHours()
    let minutes     = date.getMinutes()
    let seconds     = date.getSeconds()
    

    hours               = hours > 12 ? hours - 12 : hours
    formatterHours      = hours >= 10 ? hours : "0" + hours
    const amPM          = formatterHours > 12 ? "PM" : "AM"
    formatterMinutes    = minutes >= 10 ? minutes : "0" + minutes
    formatterSeconds    = seconds >= 10 ? seconds : "0" + seconds


    displayTime.innerHTML =  formatterHours + " : " + formatterMinutes + " : " + seconds + " " + amPM
    
}

showTime();

setInterval(() =>{
    console.log(showTime())
}, 1000)
const secondsHand = document.querySelector(".second-hand")
const minutesHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")


function setDate() {
    const now = new Date()

    
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(seconds)

    //stop transition effect at 59seconds
    if(seconds === 59) {
        secondsHand.classList.add('no-transition');
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
        //1000 is the delay, in this case 1000 miliseconds
        setTimeout(() => secondsHand.classList.remove("no-transition"), 1500)
    }

    

    const minutes = now.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) + 90  
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hour = now.getHours()
    const hourDegrees = ((hour / 12) * 360) + 90 
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}


setInterval(setDate, 1000)
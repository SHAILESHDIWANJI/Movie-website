let stopwatch=document.getElementById("stopwatch")
let start=document.querySelector("#start")
let pause=document.getElementById("pause")
let stop=document.getElementById("stop")
let mark=document.getElementById("mark")
let markedTime=document.getElementById("markedTime")

var hour=0
var minutes=0
var seconds=0
var miliseconds=0
var istime=false

function handleClick(){
  if(istime){
    miliseconds++
    }
    if(miliseconds==100){
        seconds++
        miliseconds=0
    }
    if(seconds==60){
        minutes++
        miliseconds=0
        seconds=0

    }
    if(minutes==60){
        hour++
        miliseconds=0
        minutes=0
        seconds=0
    }

 var timeHour=hour.toString().padStart(2,0)
 var timeMinutes=minutes.toString().padStart(2,0)
 var timeSeconds=seconds.toString().padStart(2,0)
 var timeMiliseconds=miliseconds.toString().padStart(2,0)

 var timestring=`${timeHour}:${timeMinutes}:${timeSeconds}:${timeMiliseconds}`
  stopwatch.textContent=timestring
}

setInterval(handleClick,10)
start.addEventListener("click",function(){
    istime=true
    handleClick()
    stopwatch.style.color="black"
})
pause.addEventListener("click",function handlePause(){
    istime=false
    stopwatch.style.color="rgb(215, 215, 45)"
})
stop.addEventListener("click",function(){
    istime=false
    hour=0
    minutes=0
    seconds=0
    miliseconds=0
    stopwatch.style.color="rgb(215, 45, 45)"
})
mark.addEventListener("click",function(){
    var timeMark=`${hour}:${minutes}:${seconds}:${miliseconds}`
    markedTime.innerHTML=timeMark
   
})



// function time(){
//     var date=new Date()


// date.setHours(0)
// date.setMinutes(0)
// date.setSeconds(0)

// var hour=date.getHours().toString().padStart(2,0)
// var minutes=date.getMinutes().toString().padStart(2,0)
// var seconds=date.getSeconds().toString().padStart(2,0)
 
// timestring=`${hour}:${minutes}:${seconds}`
// stopwatch.textContent=timestring
// }
// time()
// setInterval(time,1000)

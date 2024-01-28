
let timer=document.getElementById("timer");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");
let timerId;
let minutes=25;
let seconds=00;

// console.log(timer,"timer");
start.addEventListener('click',()=>{
    timerId=setInterval(()=>{
      if(seconds===0){
        seconds=59;
        if(minutes!==0){
        minutes--;
        }
    }
    else{
        seconds--;
    }
        console.log(seconds);
        console.log(minutes);
        
        
    timer.textContent=`${minutes}:${seconds}`;}
    ,1000);
}
);
stop.addEventListener('click',()=>{
    clearInterval(timerId);
});
reset.addEventListener('click',()=>{
    minutes=25;
    seconds=00;
    timer.innerHTML=`${minutes}:${seconds}`;
})
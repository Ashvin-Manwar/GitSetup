var counter=document.querySelector(".counter")
var follower=document.querySelector(".follower");

let count=1;
setInterval(()=>{
    count++;
    counter.innerText=count;
},10)
let btn2=document.getElementById("btn2");
let label=document.getElementById("label");
let btn1=document.getElementById("btn1");
let i=0;
let mm=0;
let ss=0;
let ms=0;
let ssString=""
let msString=""
let mmString=""
let addLap=document.getElementById("addLap");
console.log(addLap);

function startTimer(){
    let btn2=document.getElementById("btn2");
    btn2.innerHTML="Stop";
    btn1.innerHTML="Lap"
    var id=setInterval(refreshTimer,10);
    btn1.removeEventListener("click",clearScreen)
    btn1.addEventListener("click",makeLap);
    btn2.removeEventListener("click",startTimer)
    btn2.addEventListener("click",function(){
       stopTimer(id)
    });
    
  
     
    console.log(btn2);
}
function refreshTimer(){
    ms++;
    console.log("here")
    ss+=parseInt(ms/100);
    mm+=parseInt(ss/60);
    ss%=60;
    ms%=100;
    mm%=60;
    if(ss<10){
        ssString="0"+ss;
    }
    else {
        ssString=ss;
    }
    if(mm<10){
        mmString="0"+mm;
    }
    else {
        mmString=mm
    }
    if(ms<10){
        msString="0"+ms;
    }
    else {
        msString=ms;
    }
   // label.innerHTML=""
    label.innerHTML=mmString+"."+ssString+"."+msString;
}

 window.addEventListener("load",function(){
    btn2.addEventListener("click",startTimer);
    label.innerHTML="00.00.00"
 })
 function stopTimer(id){
    clearInterval(id);
    btn2.innerHTML="Restart"
    btn2.removeEventListener("click",stopTimer);
   // clearScreen();
    btn2.addEventListener("click",startTimer);
    btn1.removeEventListener("click",makeLap);
    btn1.addEventListener("click",clearScreen);
    btn1.innerHTML="Reset"
 }
 function clearScreen(){
    label.innerHTML="00.00.00";
    addLap.innerHTML=''
    btn1.removeEventListener("click",clearScreen);
  //  btn1.addEventListener("click",makeLap)
    btn1.innerHTML="Lap"
    btn2.innerHTML="Start"
    ms=0;
    mm=0;
    ss=0;
    i=0;
 }

 function makeLap(){
   
    let element=document.createElement("div");
    element.style.display="flex";
    element.style.width="80%"
    element.style.borderBottom="1px solid white";
    element.style.fontSize="20px";
    element.style.padding="5px"
    element.style.justifyContent="space-between";
    element.innerHTML=`<div>Lap ${i}</div>
    <div>${label.innerText}</div>`
    i++;
    addLap.appendChild(element);
 }
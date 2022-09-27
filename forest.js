// timer
const song = document.querySelector('.song1');
const video = document.querySelector('.indvideo');

var start1 = document.querySelector('.timerstart');
var stop1 = document.querySelector('.timerstop');
var reset1 = document.querySelector('.timerreset');
var interval;
var seconds = 00;
var tens = 00;
var minutes = 00;
var appseconds = document.querySelector('.seconds');
var apptens = document.querySelector('.tens');
var appminutes = document.querySelector('.minutes');


function startTimer(){
    tens++;
    if(tens<=9){
       apptens.innerHTML = ":0" + tens;
    }
    if(tens>9){
        apptens.innerHTML  = ":" + tens;
    }
    if(tens>99){
        seconds++;
        appseconds.innerHTML = ":0" + seconds ;
        tens = 0;
        apptens.innerHTML = ":0" + tens;
      }
      if(seconds>9){
        appseconds.innerHTML = ":"+ seconds ;
      }
      if(seconds>59){
        minutes++;
        appminutes.innerHTML = "0" + minutes; 
        seconds = 0;
        appseconds.innerHTML = ":0" + seconds ;

      }
}

start1.onclick = function(){
    song.play();
    video.play();
    interval = setInterval(startTimer,10);
};
stop1.onclick = function(){
    song.pause();
    video.pause();
    clearInterval(interval);
};
reset1.onclick = function(){
    song.pause();
    video.pause();
    song.currentTime=0;
    video.currentTime=0;
    clearInterval(interval);
    tens = 00;
    seconds = 00;
    minutes= 00;
    appminutes.innerHTML = "0" + minutes ;
    appseconds.innerHTML = ":0" + seconds ;
    apptens.innerHTML = ":0" + tens;

}
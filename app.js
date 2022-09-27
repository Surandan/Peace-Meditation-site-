// SLIDES
var slideindex=1;
showDivs(slideindex);
function plusDivs(n){
    showDivs(slideindex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myslides");
    if(n<1){
        slideindex = x.length();
    }
    if(n>x.length){
        slideindex = 1;
    }
    for( i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    x[slideindex-1].style.display = "block";
}


// NAVIGATION BAR
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");

})
document.querySelectorAll(".nav-link").forEach(
   n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");

   })
)


// ANIMATION
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
            
        }
    });
});
const interelements = document.querySelectorAll(".hidden"); 
interelements.forEach((el) =>observer.observe(el));


// INDIVISUAL
const song = document.querySelector('.song1');
const video = document.querySelector('.indvideo');
const btn = document.querySelector('.playbutton');

function toggleplay(){
    if(video.paused){
    song.play();
    video.play();
    btn.innerHTML = 'Stop';
    }
    else{
    song.pause();
    video.pause();
    btn.innerHTML = 'Start';
    }
}

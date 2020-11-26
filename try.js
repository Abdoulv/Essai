var color1=document.querySelector(".color1");
var h1=document.querySelector("h1");
var color2=document.querySelector(".color2");
var ch3=document.querySelector("h3");
var bdbg=document.getElementById("gradient");

function setgradient (){
    bdbg.style.background= "linear-gradient(to right,"+color1.value+","+color2.value+")";
   ch3.textContent=bdbg.style.background ;
   h1.innerHTML="hhhhhhhhh";
}

color1.addEventListener("input", setgradient)
color2.addEventListener("input", setgradient);

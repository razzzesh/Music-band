window.addEventListener("keydown",(e)=>
{
var audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
console.log(audio);

var num=document.querySelector(`.key[data-key="${e.keyCode}"]`);
num.classList.add("playing");
if(audio)
{
audio.play();
audio.currentTime=0;
}
var back=document.querySelectorAll(".key");
back.forEach((e)=>
{
  e.addEventListener("transitionend",  function(){num.classList.remove("playing")});
})


return 
}

)
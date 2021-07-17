const startingminutes =10;
let time=startingminutes*60;
let endbtn = document.querySelector('#endbtn');
let cancelbtn = document.querySelector('#cancelbtn')
const countdown = document.getElementById('countdown');
setInterval(updatecountdown,1000);
function updatecountdown(){
    
    const minutes = Math.floor(time/60);
    let seconds = time %60;
    seconds=seconds<10?'0'+seconds:seconds;
    countdown.innerHTML= `${minutes}:${seconds}`;
    time--;
    time=time<0?0:time;
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
endbtn.addEventListener("click",function(){
    modal.style.display="none";
    if(time){
        clearInterval(time);
        time=null;
    }
})
cancelbtn.addEventListener("click",function(){
    modal.style.display="none";
})

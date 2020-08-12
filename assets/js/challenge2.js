$('document').ready(function(){
  console.log('worked')
  spaceshipTimer();
});

// David's spaceship Logic
let spaceship = document.getElementById('davids_spaceship');
var timer;
var x = 300;
var y = 40;
let spaceshipTimer = () => {
  startTimer();
}
function startTimer() {
  x++;
  y--;
  updatePostion(x,y)
  timer = setTimeout(startTimer, 10);
  terminate(y)
}

function stopTimer() {
  clearTimeout(timer);
}

function updatePostion(x,y){
  console.log(x,y)
  spaceship.style.left =  x + 'px';
  spaceship.style.top =  y + 'px';
}

function terminate(y){
  if (y < -500){
    console.log('terminate')
    stopTimer();
    $("#davids_spaceship").remove();
  }
}

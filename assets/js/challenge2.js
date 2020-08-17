$("document").ready(function () {
  spaceshipTimer();
  loadInstructions();
});

const popup = $(".intructions-popup");

async function loadInstructions() {
  const res = await fetch("../challenges/Instructions-2.txt");
  const text = await res.text();
  $(".instructions").text(text);
}

$(".instructions-open").click(() => popup.show("ease"));
$(".close-instructions").click(() => popup.hide("ease"));
$(".png-link").click(() => window.open("https://www.pngguru.com/", "_blank"));

// David's spaceship Logic
const spaceship = document.getElementById("davids_spaceship");
const ufo = $("#biscuit_ufo");
let timer;
let x = 300;
let y = 40;
let abduct = false;

setTimeout(() => {
  abduct = true;
}, 3000);

let spaceshipTimer = () => {
  startTimer();
};

function startTimer() {
  x++;
  abduct ? (y -= 1.5) : y--;

  updatePostion(x, y);

  timer = setTimeout(startTimer, 10);
  terminate(y);
}

function stopTimer() {
  clearTimeout(timer);
}

function updatePostion(x, y) {
  // console.log(x,y)

  if (!abduct) {
    spaceship.style.left = x + "px";
  }
  spaceship.style.top = y + "px";
  ufoFollow(x);
}

function terminate(y) {
  if (y < -500) {
    // console.log('terminate')
    stopTimer();
    $("#davids_spaceship").remove();
  }
}

function ufoFollow(x) {
  if (abduct) {
    setTimeout(() => {
      ufo.animate(
        {
          top: "-=200",
        },
        100,
        () => {
          ufo.remove();
        }
      );
    }, 2400);
  } else {
    ufo.css({ left: x - 350 });
  }
}

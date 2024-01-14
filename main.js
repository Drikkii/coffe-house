// load main.html

// function loadContentFromFile(element) {
//   const fileUrl = element.getAttribute("data-file");

//   if (!fileUrl) {
//     return;
//   }

//   fetch(fileUrl)
//     .then((response) => response.text())
//     .then((data) => {
//       element.innerHTML = data;
//     })
//     .catch((error) => console.log(error));
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const elementsWithFileAttr = document.querySelectorAll("[data-file]");

//   elementsWithFileAttr.forEach((element) => {
//     loadContentFromFile(element);
//   });
// });

// generate page

// const body = document.querySelector(".body");
// function pageGenerate() {
//   body.innerHTML =
//     '<main class="main"> <div class="all-content"> <section class="guillotine"> <div class="guillotine-human"> <div class="human"> <div class="head"> <img class="head-img" src="img/head.svg" alt="head" /> </div> <div class="hand-body"> <img class="left-hand-img" src="img/hand-one.png" alt="hand-one" /> <img class="body-img" src="img/body.png" alt="body" /> <img class="right-hand-img" src="img/hand-two.png" alt="hand-two" /> </div> <div class="legs"> <img class="left-leg-img" src="img/leg-one.png" alt="leg" /> <img class="right-leg-img" src="img/leg-two.png" alt="leg" /> </div> </div> <img class="img-guillotine" src="img/gallows.png" alt="guillotine" /> <div class="line"></div> <div class="hame-name">HANGMAN GAME</div> </div> </section> <section class="mystery"> <div class="mystery-content"> <div class="generate-1"> <div class="word"> <div class="word-1"> <div class="letter">B</div> <div class="letter">A</div> <div class="letter">L</div> <div class="letter">L</div> <div class="underline"></div> <div class="underline"></div> <div class="underline"></div> <div class="underline"></div> </div> </div> <div class="mystery-text"> It is blue and green, and red, It bounces higher than my head, It does not want to stop at all. What is it? It is my… </div> </div> <div class="generate-2"> <div class="word"> <div class="word-2"> <div class="letter-2">S</div> <div class="letter-2">U</div> <div class="letter-2">G</div> <div class="letter-2">A</div> <div class="letter-2">R</div> <div class="underline-2"></div> <div class="underline-2"></div> <div class="underline-2"></div> <div class="underline-2"></div> <div class="underline-2"></div> </div> </div> <div class="mystery-text"> Clean, but not water, White, but not snow, Sweet, but not ice-cream, What is it? </div> </div> <div class="generate-3"> <div class="word"> <div class="word-3"> <div class="letter-3">C</div> <div class="letter-3">L</div> <div class="letter-3">O</div> <div class="letter-3">U</div> <div class="letter-3">D</div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> </div> </div> <div class="mystery-text"> I fly, yet I have no wings. I cry, yet I have no eyes. Darkness follows me; Lower light I never see. </div> </div> <div class="generate-4"> <div class="word"> <div class="word-4"> <div class="letter-3">T</div> <div class="letter-3">O</div> <div class="letter-3">W</div> <div class="letter-3">E</div> <div class="letter-3">L</div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> <div class="underline-3"></div> </div> </div> <div class="mystery-text"> What gets wetter and wetter the more it dries? </div> </div> <div class="attempts"> Incorrect guesses <span class="red-count"><span class="counter">0 </span>/ 6 </span> </div> <div class="keyboard"> <div class="first-row"> <div class="key-button first-line">A</div> <div class="key-button">B</div> <div class="key-button">C</div> <div class="key-button">D</div> <div class="key-button">E</div> <div class="key-button">F</div> <div class="key-button">G</div> <div class="key-button">H</div> <div class="key-button last-line">I</div> </div> <div class="second-row"> <div class="key-button first-line">J</div> <div class="key-button">K</div> <div class="key-button">L</div> <div class="key-button">M</div> <div class="key-button">N</div> <div class="key-button">O</div> <div class="key-button">P</div> <div class="key-button">Q</div> <div class="key-button last-line">R</div> </div> <div class="thrid-row"> <div class="key-button first-line">S</div> <div class="key-button">T</div> <div class="key-button">U</div> <div class="key-button">W</div> <div class="key-button">X</div> <div class="key-button">Y</div> <div class="key-button last-line">Z</div> </div> </div> </div> </section> </div> </main>';
// }
// pageGenerate();

// attempts;
const counter = document.querySelector(".counter");

const headHuman = document.querySelector(".head-img");
const bodyHuman = document.querySelector(".body-img");
const lefthandHuman = document.querySelector(".left-hand-img");
const righthandHuman = document.querySelector(".right-hand-img");
const leftlegHuman = document.querySelector(".left-leg-img");
const rightlegHuman = document.querySelector(".right-leg-img");

let attempts = 0;

// human
function attemptsHuman() {
  counter.innerHTML = attempts + " ";
  if (attempts === 1) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
    }, 100);
  }
  if (attempts === 2) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
      bodyHuman.classList.remove("visual");
    }, 200);
  }
  if (attempts === 3) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
      bodyHuman.classList.remove("visual");
      lefthandHuman.classList.remove("visual");
    }, 300);
  }
  if (attempts === 4) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
      bodyHuman.classList.remove("visual");
      lefthandHuman.classList.remove("visual");
      righthandHuman.classList.remove("visual");
    }, 400);
  }
  if (attempts === 5) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
      bodyHuman.classList.remove("visual");
      lefthandHuman.classList.remove("visual");
      righthandHuman.classList.remove("visual");
      leftlegHuman.classList.remove("visual");
    }, 500);
  }
  if (attempts === 6) {
    setTimeout(() => {
      headHuman.classList.remove("visual");
      bodyHuman.classList.remove("visual");
      lefthandHuman.classList.remove("visual");
      righthandHuman.classList.remove("visual");
      leftlegHuman.classList.remove("visual");
      rightlegHuman.classList.remove("visual");
    }, 600);
  }
}
attemptsHuman();

// keyboard
let keyboard = [
  81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76,
  90, 88, 67, 86, 66, 78, 77,
];

function keyboardInit() {
  let out = "";
  for (let i = 0; i < keyboard.length; i++) {
    out +=
      '<div class="key-button" data="' +
      keyboard[i] +
      '">' +
      String.fromCharCode(keyboard[i]) +
      "</div>";
  }
  document.querySelector(".keyboard").innerHTML = out;
}
keyboardInit();

document.onkeyup = function (event) {
  attempts += 1;
  if (attempts > 6) {
    attempts = 0;
  }
  attemptsHuman();
  console.log(attempts);
  console.log(event.code);
  console.log(event.which);
  document
    .querySelector('.key-button[data="' + event.keyCode + '"]')
    .classList.add("active");
};
document.querySelectorAll(".key-button").forEach(function (element) {
  element.onclick = function (event) {
    document.querySelectorAll(".key-button").forEach(function (element) {});
    this.classList.add("active");
  };
});

// document.onkeyup = function (event) {
//   keyboard.push(event.which);
//   console.log(keyboard);
// };

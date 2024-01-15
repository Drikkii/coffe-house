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

let array = [66, 65, 76, 76];

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  const keyButton = document.querySelector(
    '.key-button[data="' + event.keyCode + '"]'
  );

  if (keyButton) {
    if (!keyButton.classList.contains("off")) {
      keyButton.classList.add("off");

      let code = event.code;
      console.log(code);
      if (
        code === "KeyQ" ||
        code === "KeyW" ||
        code === "KeyE" ||
        code === "KeyR" ||
        code === "KeyT" ||
        code === "KeyY" ||
        code === "KeyU" ||
        code === "KeyI" ||
        code === "KeyO" ||
        code === "KeyP" ||
        code === "KeyA" ||
        code === "KeyS" ||
        code === "KeyD" ||
        code === "KeyF" ||
        code === "KeyG" ||
        code === "KeyH" ||
        code === "KeyJ" ||
        code === "KeyK" ||
        code === "KeyL" ||
        code === "KeyZ" ||
        code === "KeyX" ||
        code === "KeyC" ||
        code === "KeyV" ||
        code === "KeyB" ||
        code === "KeyN" ||
        code === "KeyM"
      ) {
        if (attempts >= 5) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          document.querySelector(".finish").innerHTML = "Loser";

          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        }
        if (event.which === 66) {
          document.querySelector(".word-1_1").classList.remove("hidden");
          document.querySelector(".word-1_under-1").classList.add("hidden");
        } else if (event.which === 83) {
          document.querySelector(".word-2_1").classList.remove("hidden");
          document.querySelector(".word-2_under-1").classList.add("hidden");
        } else if (event.which === 85) {
          document.querySelector(".word-2_2").classList.remove("hidden");
          document.querySelector(".word-2_under-2").classList.add("hidden");
          document.querySelector(".word-3_4").classList.remove("hidden");
          document.querySelector(".word-3_under-4").classList.add("hidden");
        } else if (event.which === 79) {
          document.querySelector(".word-3_3").classList.remove("hidden");
          document.querySelector(".word-3_under-3").classList.add("hidden");
          document.querySelector(".word-4_2").classList.remove("hidden");
          document.querySelector(".word-4_under-2").classList.add("hidden");
        } else if (event.which === 76) {
          document.querySelector(".word-1_3").classList.remove("hidden");
          document.querySelector(".word-1_4").classList.remove("hidden");
          document.querySelector(".word-1_under-3").classList.add("hidden");
          document.querySelector(".word-1_under-4").classList.add("hidden");
          document.querySelector(".word-3_2").classList.remove("hidden");
          document.querySelector(".word-3_under-2").classList.add("hidden");
          document.querySelector(".word-4_5").classList.remove("hidden");
          document.querySelector(".word-4_under-5").classList.add("hidden");
        } else if (event.which === 69) {
          document.querySelector(".word-4_4").classList.remove("hidden");
          document.querySelector(".word-4_under-4").classList.add("hidden");
        } else if (event.which === 68) {
          document.querySelector(".word-3_5").classList.remove("hidden");
          document.querySelector(".word-3_under-5").classList.add("hidden");
        } else if (event.which === 67) {
          document.querySelector(".word-3_1").classList.remove("hidden");
          document.querySelector(".word-3_under-1").classList.add("hidden");
        } else if (event.which === 71) {
          document.querySelector(".word-2_3").classList.remove("hidden");
          document.querySelector(".word-2_under-3").classList.add("hidden");
        } else if (event.which === 84) {
          document.querySelector(".word-4_1").classList.remove("hidden");
          document.querySelector(".word-4_under-1").classList.add("hidden");
        } else if (event.which === 87) {
          document.querySelector(".word-4_3").classList.remove("hidden");
          document.querySelector(".word-4_under-3").classList.add("hidden");
        } else if (event.which === 82) {
          document.querySelector(".word-2_5").classList.remove("hidden");
          document.querySelector(".word-2_under-5").classList.add("hidden");
        } else if (event.which === 65) {
          document.querySelector(".word-1_2").classList.remove("hidden");
          document.querySelector(".word-1_under-2").classList.add("hidden");
          document.querySelector(".word-2_4").classList.remove("hidden");
          document.querySelector(".word-2_under-4").classList.add("hidden");
        } else {
          attempts += 1;
          if (attempts >= 6) {
            document.querySelector(".backgrey").classList.remove("hidden");
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector("body").classList.add("lock");
            document.querySelector(".finish").innerHTML = "Loser";

            setTimeout(() => {
              document.querySelector(".backgrey").classList.remove("visual");
              document.querySelector(".modal").classList.remove("visual");
            }, 300);
          }
          attemptsHuman();
        }
        // console.log(attempts);
        // console.log(event.code);
        // console.log(event.which);
        document
          .querySelector('.key-button[data="' + event.keyCode + '"]')
          .classList.add("active");
        setTimeout(() => {
          if (
            !document.querySelector(".word-1_1").classList.contains("hidden") &&
            !document.querySelector(".word-1_2").classList.contains("hidden") &&
            !document.querySelector(".word-1_3").classList.contains("hidden") &&
            !document.querySelector(".word-1_1").classList.contains("hidden")
          ) {
            document.removeEventListener("keydown", keydownHandler);
            document.querySelector(".backgrey").classList.remove("hidden");
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector("body").classList.add("lock");

            setTimeout(() => {
              document.querySelector(".backgrey").classList.remove("visual");
              document.querySelector(".modal").classList.remove("visual");
            }, 300);
          } else if (
            !document.querySelector(".word-2_1").classList.contains("hidden") &&
            !document.querySelector(".word-2_2").classList.contains("hidden") &&
            !document.querySelector(".word-2_3").classList.contains("hidden") &&
            !document.querySelector(".word-2_4").classList.contains("hidden") &&
            !document.querySelector(".word-2_5").classList.contains("hidden")
          ) {
            document.removeEventListener("keydown", keydownHandler);
            document.querySelector(".backgrey").classList.remove("hidden");
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector("body").classList.add("lock");

            setTimeout(() => {
              document.querySelector(".backgrey").classList.remove("visual");
              document.querySelector(".modal").classList.remove("visual");
            }, 300);
          } else if (
            !document.querySelector(".word-3_1").classList.contains("hidden") &&
            !document.querySelector(".word-3_2").classList.contains("hidden") &&
            !document.querySelector(".word-3_3").classList.contains("hidden") &&
            !document.querySelector(".word-3_4").classList.contains("hidden") &&
            !document.querySelector(".word-3_5").classList.contains("hidden")
          ) {
            document.removeEventListener("keydown", keydownHandler);
            document.querySelector(".backgrey").classList.remove("hidden");
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector("body").classList.add("lock");
            setTimeout(() => {
              document.querySelector(".backgrey").classList.remove("visual");
              document.querySelector(".modal").classList.remove("visual");
            }, 300);
          } else if (
            !document.querySelector(".word-4_1").classList.contains("hidden") &&
            !document.querySelector(".word-4_2").classList.contains("hidden") &&
            !document.querySelector(".word-4_3").classList.contains("hidden") &&
            !document.querySelector(".word-4_4").classList.contains("hidden") &&
            !document.querySelector(".word-4_5").classList.contains("hidden")
          ) {
            document.removeEventListener("keydown", keydownHandler);
            document.querySelector(".backgrey").classList.remove("hidden");
            document.querySelector(".modal").classList.remove("hidden");
            document.querySelector("body").classList.add("lock");
            setTimeout(() => {
              document.querySelector(".backgrey").classList.remove("visual");
              document.querySelector(".modal").classList.remove("visual");
            }, 300);
          }
        }, 200);
      } else {
        alert("Не та буква");
      }
    }
  }
}

document.querySelectorAll(".key-button").forEach(function (element) {
  element.onclick = function (event) {
    let code = this.getAttribute("data");
    const keyButton = document.querySelector(
      '.key-button[data="' + code + '"]'
    );

    // Проверяем, есть ли у кнопки класс "off"
    if (keyButton && !keyButton.classList.contains("off")) {
      keyButton.classList.add("off");

      if (attempts >= 6) {
        document.removeEventListener("keydown", keydownHandler);
        document.querySelector(".backgrey").classList.remove("hidden");
        document.querySelector(".modal").classList.remove("hidden");
        document.querySelector("body").classList.add("lock");
        document.querySelector(".finish").innerHTML = "Loser";

        setTimeout(() => {
          document.querySelector(".backgrey").classList.remove("visual");
          document.querySelector(".modal").classList.remove("visual");
        }, 300);
      }
      if (this.getAttribute("data") == 66) {
        document.querySelector(".word-1_1").classList.remove("hidden");
        document.querySelector(".word-1_under-1").classList.add("hidden");
      } else if (this.getAttribute("data") == 83) {
        document.querySelector(".word-2_1").classList.remove("hidden");
        document.querySelector(".word-2_under-1").classList.add("hidden");
      } else if (this.getAttribute("data") == 85) {
        document.querySelector(".word-2_2").classList.remove("hidden");
        document.querySelector(".word-2_under-2").classList.add("hidden");
        document.querySelector(".word-3_4").classList.remove("hidden");
        document.querySelector(".word-3_under-4").classList.add("hidden");
      } else if (this.getAttribute("data") == 79) {
        document.querySelector(".word-3_3").classList.remove("hidden");
        document.querySelector(".word-3_under-3").classList.add("hidden");
        document.querySelector(".word-4_2").classList.remove("hidden");
        document.querySelector(".word-4_under-2").classList.add("hidden");
      } else if (this.getAttribute("data") == 76) {
        document.querySelector(".word-1_3").classList.remove("hidden");
        document.querySelector(".word-1_4").classList.remove("hidden");
        document.querySelector(".word-1_under-3").classList.add("hidden");
        document.querySelector(".word-1_under-4").classList.add("hidden");
        document.querySelector(".word-3_2").classList.remove("hidden");
        document.querySelector(".word-3_under-2").classList.add("hidden");
        document.querySelector(".word-4_5").classList.remove("hidden");
        document.querySelector(".word-4_under-5").classList.add("hidden");
      } else if (this.getAttribute("data") == 69) {
        document.querySelector(".word-4_4").classList.remove("hidden");
        document.querySelector(".word-4_under-4").classList.add("hidden");
      } else if (this.getAttribute("data") == 68) {
        document.querySelector(".word-3_5").classList.remove("hidden");
        document.querySelector(".word-3_under-5").classList.add("hidden");
      } else if (this.getAttribute("data") == 67) {
        document.querySelector(".word-3_1").classList.remove("hidden");
        document.querySelector(".word-3_under-1").classList.add("hidden");
      } else if (this.getAttribute("data") == 71) {
        document.querySelector(".word-2_3").classList.remove("hidden");
        document.querySelector(".word-2_under-3").classList.add("hidden");
      } else if (this.getAttribute("data") == 84) {
        document.querySelector(".word-4_1").classList.remove("hidden");
        document.querySelector(".word-4_under-1").classList.add("hidden");
      } else if (this.getAttribute("data") == 87) {
        document.querySelector(".word-4_3").classList.remove("hidden");
        document.querySelector(".word-4_under-3").classList.add("hidden");
      } else if (this.getAttribute("data") == 82) {
        document.querySelector(".word-2_5").classList.remove("hidden");
        document.querySelector(".word-2_under-5").classList.add("hidden");
      } else if (this.getAttribute("data") == 65) {
        document.querySelector(".word-1_2").classList.remove("hidden");
        document.querySelector(".word-1_under-2").classList.add("hidden");
        document.querySelector(".word-2_4").classList.remove("hidden");
        document.querySelector(".word-2_under-4").classList.add("hidden");
      } else {
        attempts += 1;
        if (attempts >= 6) {
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          document.querySelector(".finish").innerHTML = "Loser";

          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        }
        attemptsHuman();
      }
      setTimeout(() => {
        if (
          !document.querySelector(".word-1_1").classList.contains("hidden") &&
          !document.querySelector(".word-1_2").classList.contains("hidden") &&
          !document.querySelector(".word-1_3").classList.contains("hidden") &&
          !document.querySelector(".word-1_1").classList.contains("hidden")
        ) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        } else if (
          !document.querySelector(".word-2_1").classList.contains("hidden") &&
          !document.querySelector(".word-2_2").classList.contains("hidden") &&
          !document.querySelector(".word-2_3").classList.contains("hidden") &&
          !document.querySelector(".word-2_4").classList.contains("hidden") &&
          !document.querySelector(".word-2_5").classList.contains("hidden")
        ) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        } else if (
          !document.querySelector(".word-3_1").classList.contains("hidden") &&
          !document.querySelector(".word-3_2").classList.contains("hidden") &&
          !document.querySelector(".word-3_3").classList.contains("hidden") &&
          !document.querySelector(".word-3_4").classList.contains("hidden") &&
          !document.querySelector(".word-3_5").classList.contains("hidden")
        ) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        } else if (
          !document.querySelector(".word-4_1").classList.contains("hidden") &&
          !document.querySelector(".word-4_2").classList.contains("hidden") &&
          !document.querySelector(".word-4_3").classList.contains("hidden") &&
          !document.querySelector(".word-4_4").classList.contains("hidden") &&
          !document.querySelector(".word-4_5").classList.contains("hidden")
        ) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");
          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        }
      }, 200);
    }
    this.classList.add("active");
  };
});

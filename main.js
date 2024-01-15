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

// game-start-refresh
let countGame = 1;

const numbers = [];
const getRandomNumber = (min, max) => {
  const number = Math.floor(min + Math.random() * (max - min));
  if (numbers.includes(number)) return getRandomNumber(min, max);
  else {
    numbers.push(number);
    return number;
  }
};

const firstRiddles = `<div class="generate-1">
<div class="word">
  <div class="word-1">
    <div class="lett">
      <div class="letter">
        <div class="hidden checkstatus" data="66">B</div>
      </div>
      <div class="letter">
        <div class="hidden checkstatus" data="65">A</div>
      </div>
      <div class="letter">
        <div class="hidden checkstatus" data="76">L</div>
      </div>
      <div class="letter">
        <div class="hidden checkstatus" data="76">L</div>
      </div>
    </div>
    <div class="under">
      <div class="underline" data="66">
        <div class="word-1_under-1"></div>
      </div>
      <div class="underline" data="65">
        <div class="word-1_under-2"></div>
      </div>
      <div class="underline" data="76">
        <div class="word-1_under-3"></div>
      </div>
      <div class="underline" data="76">
        <div class="word-1_under-4"></div>
      </div>
    </div>
  </div>
</div>
<div class="mystery-text">
  It is blue and green, and red, It bounces higher than my head,
  It does not want to stop at all. What is it? It is my…
</div>
</div>`;
const secondRiddles = `<div class="generate-2">
<div class="word">
  <div class="word-2">
    <div class="lett">
      <div class="letter">
        <div class="word-2_1 hidden checkstatus" data="83">S</div>
      </div>
      <div class="letter">
        <div class="word-2_2 hidden checkstatus" data="85">U</div>
      </div>
      <div class="letter">
        <div class="word-2_3 hidden checkstatus" data="71">G</div>
      </div>
      <div class="letter">
        <div class="word-2_4 hidden checkstatus" data="65">A</div>
      </div>
      <div class="letter">
        <div class="word-2_5 hidden checkstatus" data="82">R</div>
      </div>
    </div>
    <div class="under">
      <div class="underline" data="83">
        <div class="word-2_under-1"></div>
      </div>
      <div class="underline" data="85">
        <div class="word-2_under-2 "></div>
      </div>
      <div class="underline" data="71">
        <div class="word-2_under-3"></div>
      </div>
      <div class="underline" data="65">
        <div class="word-2_under-4"></div>
      </div>
      <div class="underline" data="82">
        <div class="word-2_under-5"></div>
      </div>
    </div>
  </div>
</div>
<div class="mystery-text">
  Clean, but not water, White, but not snow, Sweet, but not
  ice-cream, What is it?
</div>
</div>`;
const thridRiddles = `<div class="generate-3">
<div class="word">
  <div class="word-3">
    <div class="lett">
      <div class="letter">
        <div class="word-3_1 hidden checkstatus" data="67">C</div>
      </div>
      <div class="letter">
        <div class="word-3_2 hidden checkstatus" data="76">L</div>
      </div>
      <div class="letter">
        <div class="word-3_3 hidden checkstatus" data="79">O</div>
      </div>
      <div class="letter">
        <div class="word-3_4 hidden checkstatus" data="85">U</div>
      </div>
      <div class="letter">
        <div class="word-3_5 hidden checkstatus" data="68">D</div>
      </div>
    </div>
    <div class="under">
      <div class="underline" data="67">
        <div class="word-3_under-1"></div>
      </div>
      <div class="underline" data="76">
        <div class="word-3_under-2"></div>
      </div>
      <div class="underline" data="79">
        <div class="word-3_under-3"></div>
      </div>
      <div class="underline" data="85">
        <div class="word-3_under-4"></div>
      </div>
      <div class="underline" data="68">
        <div class="word-3_under-5"></div>
      </div>
    </div>
  </div>
</div>
<div class="mystery-text">
  I fly, yet I have no wings. I cry, yet I have no eyes.
  Darkness follows me; Lower light I never see.
</div>
</div>`;
const fourRiddles = `<div class="generate-4">
<div class="word">
  <div class="word-4">
    <div class="lett">
      <div class="letter">
        <div class="word-4_1 hidden checkstatus" data="84">T</div>
      </div>
      <div class="letter">
        <div class="word-4_2 hidden checkstatus" data="79">O</div>
      </div>
      <div class="letter">
        <div class="word-4_3 hidden checkstatus" data="87">W</div>
      </div>
      <div class="letter">
        <div class="word-4_4 hidden checkstatus" data="69">E</div>
      </div>
      <div class="letter">
        <div class="word-4_5 hidden checkstatus" data="76">L</div>
      </div>
    </div>
    <div class="under">
      <div class="underline" data="84">
        <div class="word-4_under-1"></div>
      </div>
      <div class="underline" data="79">
        <div class="word-4_under-2"></div>
      </div>
      <div class="underline" data="87">
        <div class="word-4_under-3"></div>
      </div>
      <div class="underline" data="69">
        <div class="word-4_under-4"></div>
      </div>
      <div class="underline" data="76">
        <div class="word-4_under-5"></div>
      </div>
    </div>
  </div>
</div>
<div class="mystery-text">
  What gets wetter and wetter the more it dries?
</div>
</div>`;
const contentRiddles = document.querySelector(".content-Riddles");
let attempts = 0;
const allRiddles = [firstRiddles, secondRiddles, thridRiddles, fourRiddles];
function refresh() {
  let openContain = allRiddles[getRandomNumber(0, 4)];
  let asn = document.querySelector(".ans");
  setTimeout(() => {
    if (openContain == firstRiddles) {
      asn.innerHTML = "BALL";
    } else if (openContain == secondRiddles) {
      asn.innerHTML = "SUGAR";
    } else if (openContain == thridRiddles) {
      asn.innerHTML = "CLOUD";
    } else if (openContain == fourRiddles) {
      asn.innerHTML = "TOWEL";
    }
  }, 600);

  contentRiddles.innerHTML = openContain;
  attempts = 0;
  counter.innerHTML = attempts + " ";
  document.querySelectorAll(".key-button").forEach(function (element) {
    element.classList.remove("off");
    element.classList.remove("visual2");
    element.classList.remove("active");
    headHuman.classList.add("visual");
    bodyHuman.classList.add("visual");
    lefthandHuman.classList.add("visual");
    righthandHuman.classList.add("visual");
    leftlegHuman.classList.add("visual");
    rightlegHuman.classList.add("visual");
  });
  return openContain;
}
refresh();

const newGame = document.querySelector(".new-game");
newGame.addEventListener("click", function () {
  console.log(countGame);
  if (countGame >= 4) {
    location.reload();
  }
  document.querySelector(".backgrey").classList.add("visual");
  document.querySelector(".modal").classList.add("visual");
  document.querySelector("body").classList.remove("lock");
  setTimeout(() => {
    document.querySelector(".backgrey").classList.add("hidden");
    document.querySelector(".modal").classList.add("hidden");
  }, 500);
  document.addEventListener("keydown", keydownHandler);

  countGame += 1;
  refresh();
});

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
        let status = false;
        let getdata = event.which;
        const WordLit = document.querySelectorAll(".checkstatus");

        WordLit.forEach(function (WordLit) {
          let dataAttribute = WordLit.getAttribute("data");
          if (dataAttribute == getdata) {
            status = true;
          }
        });

        if (event.which === 66 && status) {
          document.querySelectorAll('[data="66"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 83 && status) {
          document.querySelectorAll('[data="83"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 85 && status) {
          document.querySelectorAll('[data="85"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 79 && status) {
          document.querySelectorAll('[data="79"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 76 && status) {
          document.querySelectorAll('[data="76"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 69 && status) {
          document.querySelectorAll('[data="69"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 68 && status) {
          document.querySelectorAll('[data="68"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 67 && status) {
          document.querySelectorAll('[data="67"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 71 && status) {
          document.querySelectorAll('[data="71"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 84 && status) {
          document.querySelectorAll('[data="84"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 87 && status) {
          document.querySelectorAll('[data="87"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 82 && status) {
          document.querySelectorAll('[data="82"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
        } else if (event.which === 65 && status) {
          document.querySelectorAll('[data="65"]').forEach(function (element) {
            element.classList.remove("hidden");
            element.classList.add("visual2");
          });
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
        let letterContainers = document.querySelectorAll(".letter");

        let allContainersHaveHiddenClass = true;

        letterContainers.forEach(function (letterContainer) {
          let hiddenContainer = letterContainer.querySelector(".hidden");

          if (hiddenContainer) {
            allContainersHaveHiddenClass = false;
          }
        });

        if (allContainersHaveHiddenClass) {
          document.removeEventListener("keydown", keydownHandler);
          document.querySelector(".backgrey").classList.remove("hidden");
          document.querySelector(".modal").classList.remove("hidden");
          document.querySelector("body").classList.add("lock");

          setTimeout(() => {
            document.querySelector(".backgrey").classList.remove("visual");
            document.querySelector(".modal").classList.remove("visual");
          }, 300);
        }
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

      const WordLit = document.querySelectorAll(".checkstatus");
      let status = false;

      WordLit.forEach(function (checkStatusElement) {
        let dataAttributeCheck = checkStatusElement.getAttribute("data");

        if (dataAttributeCheck === code) {
          status = true;
        }
      });

      if (code == 66 && status) {
        document.querySelectorAll('[data="66"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 83 && status) {
        document.querySelectorAll('[data="83"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 85 && status) {
        document.querySelectorAll('[data="85"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 79 && status) {
        document.querySelectorAll('[data="79"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 76 && status) {
        document.querySelectorAll('[data="76"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 69 && status) {
        document.querySelectorAll('[data="69"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 68 && status) {
        document.querySelectorAll('[data="68"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 67 && status) {
        document.querySelectorAll('[data="67"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 71 && status) {
        document.querySelectorAll('[data="71"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 84 && status) {
        document.querySelectorAll('[data="84"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 87 && status) {
        document.querySelectorAll('[data="87"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 82 && status) {
        document.querySelectorAll('[data="82"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
      } else if (this.getAttribute("data") == 65 && status) {
        document.querySelectorAll('[data="65"]').forEach(function (element) {
          element.classList.remove("hidden");
          element.classList.add("visual2");
        });
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
      let letterContainers = document.querySelectorAll(".letter");

      let allContainersHaveHiddenClass = true;

      letterContainers.forEach(function (letterContainer) {
        let hiddenContainer = letterContainer.querySelector(".hidden");

        if (hiddenContainer) {
          allContainersHaveHiddenClass = false;
        }
      });

      if (allContainersHaveHiddenClass) {
        document.removeEventListener("keydown", keydownHandler);
        document.querySelector(".backgrey").classList.remove("hidden");
        document.querySelector(".modal").classList.remove("hidden");
        document.querySelector("body").classList.add("lock");

        setTimeout(() => {
          document.querySelector(".backgrey").classList.remove("visual");
          document.querySelector(".modal").classList.remove("visual");
        }, 300);
      }
    }
    this.classList.add("active");
  };
});

// Download button
// apple
let AppButton = document.querySelector(".download-app");
let AppButtonIcon = document.querySelector(".apple");

AppButton.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    AppButtonIcon.classList.add("visualzero");
    setTimeout(function () {
      AppButtonIcon.classList.remove("visualzero");
    }, 300);
    setTimeout(function () {
      AppButtonIcon.classList.add("apple-white");
    }, 300);
  }
});
AppButton.addEventListener("mouseout", function () {
  if (window.innerWidth >= 768) {
    setTimeout(function () {
      AppButtonIcon.classList.remove("visualzero");
    }, 300);
    setTimeout(function () {
      AppButtonIcon.classList.remove("apple-white");
    }, 300);
  }
});

// google
let GoogleButton = document.querySelector(".download-google");
let GoogleButtonIcon = document.querySelector(".google");

GoogleButton.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    GoogleButtonIcon.classList.add("visualzero");
    setTimeout(function () {
      GoogleButtonIcon.classList.remove("visualzero");
    }, 300);
    setTimeout(function () {
      GoogleButtonIcon.classList.add("google-white");
    }, 300);
  }
});

GoogleButton.addEventListener("mouseout", function () {
  if (window.innerWidth >= 768) {
    setTimeout(function () {
      GoogleButtonIcon.classList.remove("visualzero");
    }, 300);
    setTimeout(function () {
      GoogleButtonIcon.classList.remove("google-white");
    }, 300);
  }
});

// Menu coffe cup visual

let coffeeButton = document.querySelector(".upsteirs-but");
let coffeButtonIcon = document.querySelector(".coffe-sec1");
let menuspan = document.querySelector(".menu-span");

// slider

let slide = document.querySelector(".slide");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let mainSliderWidth = document.querySelector(".main-slider").clientWidth;
let mainSlider = document.querySelector(".main-slider");
let mainSlider2 = document.querySelectorAll(".img-slide-size");
let mainSlider3 = document.querySelector(".up-main-slider").clientWidth;
let mainSlider4 = document.querySelector(".img-slide");

// pagination
let AllPag = document.querySelectorAll(".pagin");
let Pag1 = document.querySelector(".pag1");
let Pag2 = document.querySelector(".pag2");
let Pag3 = document.querySelector(".pag3");

let PagBlack2 = document.querySelector(".pag-color2");
let PagBlack3 = document.querySelector(".pag-color3");

let number = 0;
let score = 0;
let autoplayInterval = null;

Pag1.addEventListener("click", function () {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag1.classList.add("color-pag");
  number = 0;
  mainSlider.style.left = number + "px";
});
Pag2.addEventListener("click", function () {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag2.classList.add("color-pag");
  number = mainSlider3;
  mainSlider.style.left = -number + "px";
});
Pag3.addEventListener("click", function () {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag3.classList.add("color-pag");
  number = mainSlider3 * 2;
  mainSlider.style.left = -number + "px";
});
// slide

// auto

let counterValue = 0;
let isInterval;
let isUpdateCounterRunning = false;
let savedCounterValue = 0;

function interval() {
  clearInterval(isInterval);
  isInterval = setInterval(function () {
    if (!isUpdateCounterRunning) {
      isUpdateCounterRunning = true;
      savedCounterValue = counterValue;
      updateCounter();
    }
  }, 1);
}

function updateCounter() {
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  counterValue += 5;
  savedCounterValue = counterValue;
  console.log(counterValue);

  const percentage = (counterValue / 5000) * 100;
  PagBlack1.style.width = percentage.toFixed(2) + "%";

  if (counterValue < 5000) {
    setTimeout(function () {
      isUpdateCounterRunning = false;
      updateCounter;
    }, 5);
  } else if (counterValue >= 5000) {
    clearInterval(isInterval);
    savedCounterValue = counterValue;
    isUpdateCounterRunning = false;

    next();
  }
}

// Запускаем счетчик
interval();

// slide prev - next

let next = () => {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";
  number = number + mainSlider3;
  mainSlider.style.left = -number + "px";
  if (number > mainSlider3 * 2) {
    number = 0;
    mainSlider.style.left = number + "px";
  }
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  if (number == 0) {
    Pag1.classList.add("color-pag");
  } else if (number == mainSlider3) {
    Pag2.classList.add("color-pag");
  } else if (number == mainSlider3 * 2) {
    Pag3.classList.add("color-pag");
  }
  interval();
};
let prev = () => {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";

  number = number - mainSlider3;
  mainSlider.style.left = -number + "px";
  if (number < 0) {
    number = mainSlider3 * 2;
    mainSlider.style.left = -number + "px";
  }
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  if (number == 0) {
    Pag1.classList.add("color-pag");
  } else if (number == mainSlider3) {
    Pag2.classList.add("color-pag");
  } else if (number == mainSlider3 * 2) {
    Pag3.classList.add("color-pag");
  }
  interval();
};

rightArrow.addEventListener("click", next);
leftArrow.addEventListener("click", prev);

// auto

// adaptiv
window.addEventListener("resize", function () {
  counterValue = 0;
  let PagBlack1 = document.querySelector(".color-pag .pag-color");
  PagBlack1.style.width = 0 + "%";
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag1.classList.add("color-pag");
  mainSlider3 = document.querySelector(".up-main-slider").clientWidth;
  mainSlider.style.left = 0 + "px";
  number = 0;
  interval();
  return number;
});

// mobile

let sliderSection = document.querySelector(".section2");

sliderSection.addEventListener("touchstart", function (event) {
  touchStart = event.touches[0].clientX;
  isPaused = true;
});

sliderSection.addEventListener("touchend", function (event) {
  if (touchStart !== undefined) {
    const swipeEndX = event.changedTouches[0].clientX;
    const swipeX = swipeEndX - touchStart;

    if (swipeX > 0) {
      console.log("свайп вправо");
      let PagBlack1 = document.querySelector(".color-pag .pag-color");
      PagBlack1.style.width = 0 + "%";
      prev();
    } else if (swipeX < 0) {
      console.log("свайп влево");
      let PagBlack1 = document.querySelector(".color-pag .pag-color");
      PagBlack1.style.width = 0 + "%";
      next();
    } else {
      console.log("нет свайпа");
    }
    isPaused = false;
    touchStart = undefined;
  }
});

// stopMouse
sliderSection.addEventListener("mouseover", function () {
  clearInterval(isInterval);
});
sliderSection.addEventListener("mouseout", function () {
  if (!isUpdateCounterRunning) {
    interval();
  }
});

// burger

let menuBtn = document.querySelector(".menu-burger");
let menu = document.querySelector(".slide-menu-burger");
let lock = document.querySelector("body");
let LogoMenu = document.querySelector(".dropMenu");

const toggleMenu = () => {
  lock.classList.toggle("lock");
  menu.classList.toggle("active");
  menuBtn.classList.remove("active");
};

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  lock.classList.toggle("lock");
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_menuBtn = target == menuBtn;
  let menu_is_active = menu.classList.contains("active");

  if (!its_menu && !its_menuBtn && menu_is_active) {
    toggleMenu();
  }
});
menu.addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    lock.classList.remove("lock");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    lock.classList.remove("lock");
    menu.classList.remove("active");
    menuBtn.classList.remove("фф");
  }
});

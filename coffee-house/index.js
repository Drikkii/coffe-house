// Download button

// apple
let AppButton = document.querySelector(".download-app");
let AppButtonIcon = document.querySelector(".apple");

AppButton.addEventListener("mouseover", function () {
  AppButtonIcon.classList.add("visualzero");
  setTimeout(function () {
    AppButtonIcon.classList.remove("visualzero");
  }, 300);
  setTimeout(function () {
    AppButtonIcon.classList.add("apple-white");
  }, 300);
});
AppButton.addEventListener("mouseout", function () {
  setTimeout(function () {
    AppButtonIcon.classList.remove("visualzero");
  }, 300);
  setTimeout(function () {
    AppButtonIcon.classList.remove("apple-white");
  }, 300);
});

// google
let GoogleButton = document.querySelector(".download-google");
let GoogleButtonIcon = document.querySelector(".google");

GoogleButton.addEventListener("mouseover", function () {
  GoogleButtonIcon.classList.add("visualzero");
  setTimeout(function () {
    GoogleButtonIcon.classList.remove("visualzero");
  }, 300);
  setTimeout(function () {
    GoogleButtonIcon.classList.add("google-white");
  }, 300);
});
GoogleButton.addEventListener("mouseout", function () {
  setTimeout(function () {
    GoogleButtonIcon.classList.remove("visualzero");
  }, 300);
  setTimeout(function () {
    GoogleButtonIcon.classList.remove("google-white");
  }, 300);
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

// pagination
let AllPag = document.querySelectorAll(".pagin");
let Pag1 = document.querySelector(".pag1");
let Pag2 = document.querySelector(".pag2");
let Pag3 = document.querySelector(".pag3");

Pag1.addEventListener("click", function () {
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag1.classList.add("color-pag");
  number = 0;
  mainSlider.style.left = number + "px";
});
Pag2.addEventListener("click", function () {
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag2.classList.add("color-pag");
  number = mainSliderWidth;
  mainSlider.style.left = -number + "px";
});
Pag3.addEventListener("click", function () {
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  Pag3.classList.add("color-pag");
  number = mainSliderWidth * 2;
  mainSlider.style.left = -number + "px";
});
// slide

let number = 0;
let score = 0;
let autoplayInterval = null;

// auto

function startAutoplay() {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(next, 5000);
  }
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = null;
}
// slide prev - next

let next = () => {
  stopAutoplay();
  number = number + mainSliderWidth;
  mainSlider.style.left = -number + "px";
  if (number > mainSliderWidth * 2) {
    number = 0;
    mainSlider.style.left = number + "px";
  }
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  if (number == 0) {
    Pag1.classList.add("color-pag");
  } else if (number == mainSliderWidth) {
    Pag2.classList.add("color-pag");
  } else if (number == mainSliderWidth * 2) {
    Pag3.classList.add("color-pag");
  }
  startAutoplay();
};
let prev = () => {
  stopAutoplay();
  number = number - mainSliderWidth;
  mainSlider.style.left = -number + "px";
  if (number < 0) {
    number = mainSliderWidth * 2;
    mainSlider.style.left = -number + "px";
  }
  AllPag.forEach(function (element) {
    element.classList.remove("color-pag");
  });
  if (number == 0) {
    Pag1.classList.add("color-pag");
  } else if (number == mainSliderWidth) {
    Pag2.classList.add("color-pag");
  } else if (number == mainSliderWidth * 2) {
    Pag3.classList.add("color-pag");
  }
  startAutoplay();
};

rightArrow.addEventListener("click", next);
leftArrow.addEventListener("click", prev);

// auto
startAutoplay();

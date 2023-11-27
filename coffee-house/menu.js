// button hover
let button1 = document.querySelector(".upper-button1");
let button2 = document.querySelector(".upper-button2");
let button3 = document.querySelector(".upper-button3");
let menu1 = document.querySelector(".button-menu1");
let menu2 = document.querySelector(".button-menu2");
let menu3 = document.querySelector(".button-menu3");
let icon1 = document.querySelector(".icon-button1");
let icon2 = document.querySelector(".icon-button2");
let icon3 = document.querySelector(".icon-button3");
// menu let
let coffee = document.querySelector(".section-coffee");
let tea = document.querySelector(".section-tea");
let dessert = document.querySelector(".section-dessert");
let slideSection = document.querySelector(".slide-section");

button1.addEventListener("mouseover", function () {
  menu1.classList.add("button-background");
  icon1.classList.add("icon-background");
});
button1.addEventListener("mouseout", function () {
  menu1.classList.remove("button-background");
  icon1.classList.remove("icon-background");
});
button2.addEventListener("mouseover", function () {
  menu2.classList.add("button-background");
  icon2.classList.add("icon-background");
});
button2.addEventListener("mouseout", function () {
  menu2.classList.remove("button-background");
  icon2.classList.remove("icon-background");
});
button3.addEventListener("mouseover", function () {
  menu3.classList.add("button-background");
  icon3.classList.add("icon-background");
});
button3.addEventListener("mouseout", function () {
  menu3.classList.remove("button-background");
  icon3.classList.remove("icon-background");
});

// button click

function closeds() {
  if (coffee.classList.contains("hidden")) {
    slideSection.classList.remove("hight-slide");
  }
}
button1.addEventListener("click", function () {
  menu1.classList.add("button-background-stay");
  icon1.classList.add("icon-background-stay");
  menu2.classList.remove("button-background-stay");
  icon2.classList.remove("icon-background-stay");
  menu3.classList.remove("button-background-stay");
  icon3.classList.remove("icon-background-stay");
  tea.classList.remove("visual");
  dessert.classList.remove("visual");

  setTimeout(function () {
    tea.classList.add("hidden");
  }, 500);
  setTimeout(function () {
    dessert.classList.add("hidden");
  }, 500);
  setTimeout(function () {
    coffee.classList.remove("hidden");
  }, 300);
  setTimeout(function () {
    coffee.classList.remove("visualzero");
  }, 300);
  setTimeout(function () {
    slideSection.classList.remove("hight-slide");
  }, 300);
});

button2.addEventListener("click", function () {
  menu2.classList.add("button-background-stay");
  icon2.classList.add("icon-background-stay");
  menu1.classList.remove("button-background-stay");
  icon1.classList.remove("icon-background-stay");
  menu1.classList.remove("button-background");
  icon1.classList.remove("icon-background");
  menu3.classList.remove("button-background-stay");
  icon3.classList.remove("icon-background-stay");
  coffee.classList.add("visualzero");
  dessert.classList.remove("visual");
  setTimeout(function () {
    coffee.classList.add("hidden");
    slideSection.classList.add("hight-slide");
  }, 500);
  setTimeout(function () {
    dessert.classList.add("hidden");
    slideSection.classList.add("hight-slide");
  }, 300);
  setTimeout(function () {
    tea.classList.remove("hidden");
  }, 200);
  setTimeout(function () {
    tea.classList.add("visual");
  }, 300);
});

button3.addEventListener("click", function () {
  menu3.classList.add("button-background-stay");
  icon3.classList.add("icon-background-stay");
  menu2.classList.remove("button-background-stay");
  icon2.classList.remove("icon-background-stay");
  menu1.classList.remove("button-background-stay");
  icon1.classList.remove("icon-background-stay");
  menu1.classList.remove("button-background");
  icon1.classList.remove("icon-background");
  slideSection.classList.remove("hight-slide");
  tea.classList.remove("visual");
  coffee.classList.add("visualzero");

  setTimeout(function () {
    tea.classList.add("hidden");
  }, 500);
  setTimeout(function () {
    coffee.classList.add("hidden");
  }, 500);
  setTimeout(function () {
    dessert.classList.remove("hidden");
  }, 200);
  setTimeout(function () {
    dessert.classList.add("visual");
  }, 300);
  setTimeout(function () {
    slideSection.classList.remove("hight-slide");
  }, 300);
});

// modal

let coffee1 = document.querySelector(".coffee-1");
let coffeIrish = document.getElementById("coffe-irish");
let backGrey = document.querySelector(".backgrey");
let closebuttonIrish = document.querySelector(".close");

closebuttonIrish.addEventListener("click", function () {
  if (!backGrey.classList.contains("hidden")) {
    coffeIrish.classList.remove("visual");
    backGrey.classList.remove("visual");
    setTimeout(function () {
      coffeIrish.classList.add("hidden");
      backGrey.classList.add("hidden");
    }, 300);
  }
});

coffee1.addEventListener("click", function () {
  coffeIrish.classList.remove("hidden");
  setTimeout(function () {
    coffeIrish.classList.add("visual");
  }, 300);
  setTimeout(function () {
    backGrey.classList.remove("hidden");
  }, 200);
  setTimeout(function () {
    backGrey.classList.add("visual");
  }, 300);
});

// background closed
backGrey.addEventListener("click", function () {
  if (!backGrey.classList.contains("hidden")) {
    coffeIrish.classList.remove("visual");
    backGrey.classList.remove("visual");
    setTimeout(function () {
      coffeIrish.classList.add("hidden");
      backGrey.classList.add("hidden");
    }, 300);
  }
});

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
  if (window.innerWidth >= 768) {
    menu1.classList.add("button-background");
    icon1.classList.add("icon-background");
  }
});
button1.addEventListener("mouseout", function () {
  menu1.classList.remove("button-background");
  icon1.classList.remove("icon-background");
});
button2.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu2.classList.add("button-background");
    icon2.classList.add("icon-background");
  }
});
button2.addEventListener("mouseout", function () {
  menu2.classList.remove("button-background");
  icon2.classList.remove("icon-background");
});
button3.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu3.classList.add("button-background");
    icon3.classList.add("icon-background");
  }
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
  if (window.innerWidth >= 1061) {
    coffee.style.overflow = "visible";
    slideSection.style.height = 98.625 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  if (window.innerWidth <= 1061) {
    coffee.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "flex";
    slideSection.style.marginBottom = 2 + "rem";
  }
  if (window.innerWidth <= 677) {
    coffee.style.overflow = "hidden";
    coffee.style.maxHeight = 135 + "rem";
    slideSection.style.height = 135 + "rem";
    refresh.style.display = "flex";
    slideSection.style.marginBottom = 2 + "rem";
  }
  if (window.innerWidth >= 1440) {
    coffee.style.overflow = "visible";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  // slideSection.style.marginBottom = 2 + "rem";
  // slideSection.style.height = 65.75 + "rem";
  // coffee.classList.remove("overflow");

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

  if (window.innerWidth >= 1061) {
    tea.style.overflow = "visible";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  if (window.innerWidth <= 1061) {
    tea.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  if (window.innerWidth <= 677) {
    tea.style.overflow = "hidden";
    tea.style.maxHeight = 132 + "rem";
    slideSection.style.height = 131.5 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  if (window.innerWidth >= 1440) {
    slideSection.style.height = 32.875 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
});

button3.addEventListener("click", function () {
  if (window.innerWidth >= 1061) {
    dessert.style.overflow = "visible";
    slideSection.style.height = 98.625 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }
  if (window.innerWidth <= 1061) {
    dessert.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "flex";
    slideSection.style.marginBottom = 2 + "rem";
  }
  if (window.innerWidth <= 677) {
    dessert.style.overflow = "hidden";
    dessert.style.maxHeight = 135 + "rem";
    slideSection.style.height = 135 + "rem";
    refresh.style.display = "flex";
    slideSection.style.marginBottom = 2 + "rem";
  }
  if (window.innerWidth >= 1440) {
    dessert.style.overflow = "visible";
    slideSection.style.height = 65.75 + "rem";
    refresh.style.display = "none";
    slideSection.style.marginBottom = 6.25 + "rem";
  }

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

// refresh

let refresh = document.querySelector(".refresh");

refresh.addEventListener("click", function () {
  refresh.style.display = "none";
  let slide = slideSection.clientHeight;
  coffee.style.overflow = "visible";
  tea.style.overflow = "visible";
  dessert.style.overflow = "visible";
  setTimeout(function () {
    coffee.classList.add("overflow");
  }, 100);
  setTimeout(function () {
    tea.classList.add("overflow");
  }, 100);
  setTimeout(function () {
    dessert.classList.add("overflow");
  }, 100);
  slideSection.style.height = slide * 2 + "px";
  slideSection.style.marginBottom = 6.25 + "rem";
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
    menuBtn.classList.remove("active");
  }
  if (
    (window.innerWidth >= 678 &&
      menu1.classList.contains("button-background-stay")) ||
    (window.innerWidth >= 678 && dessert.classList.contains("visual"))
  ) {
    coffee.style.overflow = "hidden";
    coffee.style.maxHeight = 66 + "rem";
    tea.style.overflow = "hidden";
    dessert.style.maxHeight = 66 + "rem";
    dessert.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    slideSection.style.marginBottom = 2 + "rem";
    refresh.style.display = "flex";
  }
  if (
    (window.innerWidth >= 1061 &&
      menu1.classList.contains("button-background-stay")) ||
    (window.innerWidth >= 1061 && dessert.classList.contains("visual"))
  ) {
    coffee.style.overflow = "visible";
    tea.style.overflow = "visible";
    dessert.style.overflow = "visible";
    slideSection.style.height = 98.625 + "rem";
    slideSection.style.marginBottom = 6.25 + "rem";
    refresh.style.display = "none";
  }
  if (window.innerWidth >= 1061 && tea.classList.contains("visual")) {
    coffee.style.overflow = "visible";
    tea.style.overflow = "visible";
    dessert.style.overflow = "visible";
    slideSection.style.height = 65.75 + "rem";
    slideSection.style.marginBottom = 6.25 + "rem";
    refresh.style.display = "none";
  }

  if (
    (window.innerWidth <= 1060 &&
      menu1.classList.contains("button-background-stay")) ||
    (window.innerWidth <= 1060 && dessert.classList.contains("visual"))
  ) {
    coffee.style.overflow = "hidden";
    tea.style.overflow = "hidden";
    dessert.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    slideSection.style.marginBottom = 2 + "rem";
    refresh.style.display = "flex";
  }

  if (window.innerWidth <= 1060 && tea.classList.contains("visual")) {
    coffee.style.overflow = "hidden";
    tea.style.overflow = "hidden";
    dessert.style.overflow = "hidden";
    slideSection.style.height = 65.75 + "rem";
    slideSection.style.marginBottom = 6.25 + "rem";
    refresh.style.display = "none";
  }
  if (
    (window.innerWidth <= 677 &&
      menu1.classList.contains("button-background-stay")) ||
    (window.innerWidth <= 677 && dessert.classList.contains("visual"))
  ) {
    coffee.style.overflow = "hidden";
    coffee.style.maxHeight = 135 + "rem";
    tea.style.overflow = "hidden";
    dessert.style.maxHeight = 135 + "rem";
    dessert.style.overflow = "hidden";
    slideSection.style.height = 135 + "rem";
    slideSection.style.marginBottom = 2 + "rem";
    refresh.style.display = "flex";
  }
  if (window.innerWidth <= 677 && tea.classList.contains("visual")) {
    tea.style.overflow = "hidden";
    tea.style.maxHeight = 132 + "rem";
    slideSection.style.height = 131.5 + "rem";
    slideSection.style.marginBottom = 6.25 + "rem";
    refresh.style.display = "none";
  }
  if (
    (window.innerWidth >= 1440 &&
      menu1.classList.contains("button-background-stay")) ||
    (window.innerWidth >= 1440 && dessert.classList.contains("visual"))
  ) {
    slideSection.style.height = 65.75 + "rem";
    coffee.style.overflow = "visible";
    tea.style.overflow = "visible";
    dessert.style.overflow = "visible";
  }
  if (window.innerWidth >= 1440 && tea.classList.contains("visual")) {
    slideSection.style.height = 32.875 + "rem";
    coffee.style.overflow = "visible";
    tea.style.overflow = "visible";
    dessert.style.overflow = "visible";
  }
});

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

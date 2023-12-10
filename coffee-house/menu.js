// button hover
let button1 = document.querySelector(".upper-button1");
let button2 = document.querySelector(".upper-button2");
let button3 = document.querySelector(".upper-button3");
let button1Modal = document.querySelector(".upper-button1-modal");
let button2Modal = document.querySelector(".upper-button2-modal");
let button3Modal = document.querySelector(".upper-button3-modal");
let button1Additives = document.querySelector(".upper-button1-Additives");
let button2Additives = document.querySelector(".upper-button2-Additives");
let button3Additives = document.querySelector(".upper-button3-Additives");
let menu1 = document.querySelector(".button-menu1");
let menu2 = document.querySelector(".button-menu2");
let menu3 = document.querySelector(".button-menu3");
let icon1 = document.querySelector(".icon-button1");
let icon2 = document.querySelector(".icon-button2");
let icon3 = document.querySelector(".icon-button3");
let menu1Modal = document.querySelector(".button-menu1-modal");
let menu2Modal = document.querySelector(".button-menu2-modal");
let menu3Modal = document.querySelector(".button-menu3-modal");
let icon1Modal = document.querySelector(".icon-button1-modal");
let icon2Modal = document.querySelector(".icon-button2-modal");
let icon3Modal = document.querySelector(".icon-button3-modal");
let menu1Additives = document.querySelector(".button-menu1-Additives");
let menu2Additives = document.querySelector(".button-menu2-Additives");
let menu3Additives = document.querySelector(".button-menu3-Additives");
let icon1Additives = document.querySelector(".icon-button1-Additives");
let icon2Additives = document.querySelector(".icon-button2-Additives");
let icon3Additives = document.querySelector(".icon-button3-Additives");
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
let coffeIrish = document.getElementById("coffe-irish");
let backGrey = document.querySelector(".backgrey");
let closebuttonIrish = document.querySelector(".close");

// coffee
let coffee1 = document.querySelector(".coffee-1");
let coffee2 = document.querySelector(".coffee-2");
let coffee3 = document.querySelector(".coffee-3");
let coffee4 = document.querySelector(".coffee-4");
let coffee5 = document.querySelector(".coffee-5");
let coffee6 = document.querySelector(".coffee-6");
let coffee7 = document.querySelector(".coffee-7");
let coffee8 = document.querySelector(".coffee-8");

let tCoffee1 = document.querySelector(".t-coffee1");
let tCoffee2 = document.querySelector(".t-coffee2");
let tCoffee3 = document.querySelector(".t-coffee3");
let tCoffee4 = document.querySelector(".t-coffee4");
let tCoffee5 = document.querySelector(".t-coffee5");
let tCoffee6 = document.querySelector(".t-coffee6");
let tCoffee7 = document.querySelector(".t-coffee7");
let tCoffee8 = document.querySelector(".t-coffee8");

let pCoffee1 = document.querySelector(".p-coffee1");
let pCoffee2 = document.querySelector(".p-coffee2");
let pCoffee3 = document.querySelector(".p-coffee3");
let pCoffee4 = document.querySelector(".p-coffee4");
let pCoffee5 = document.querySelector(".p-coffee5");
let pCoffee6 = document.querySelector(".p-coffee6");
let pCoffee7 = document.querySelector(".p-coffee7");
let pCoffee8 = document.querySelector(".p-coffee8");

let priceCoffee1 = document.querySelector(".priceCoffee1");
let priceCoffee2 = document.querySelector(".priceCoffee2");
let priceCoffee3 = document.querySelector(".priceCoffee3");
let priceCoffee4 = document.querySelector(".priceCoffee4");
let priceCoffee5 = document.querySelector(".priceCoffee5");
let priceCoffee6 = document.querySelector(".priceCoffee6");
let priceCoffee7 = document.querySelector(".priceCoffee7");
let priceCoffee8 = document.querySelector(".priceCoffee8");

let imgCoffee1 = document.querySelector(".imgCoffee1");
let imgCoffee2 = document.querySelector(".imgCoffee2");
let imgCoffee3 = document.querySelector(".imgCoffee3");
let imgCoffee4 = document.querySelector(".imgCoffee4");
let imgCoffee5 = document.querySelector(".imgCoffee5");
let imgCoffee6 = document.querySelector(".imgCoffee6");
let imgCoffee7 = document.querySelector(".imgCoffee7");
let imgCoffee8 = document.querySelector(".imgCoffee8");

// desert
let dessert1 = document.querySelector(".dessert-1");
let dessert2 = document.querySelector(".dessert-2");
let dessert3 = document.querySelector(".dessert-3");
let dessert4 = document.querySelector(".dessert-4");
let dessert5 = document.querySelector(".dessert-5");
let dessert6 = document.querySelector(".dessert-6");
let dessert7 = document.querySelector(".dessert-7");
let dessert8 = document.querySelector(".dessert-8");

let tDessert1 = document.querySelector(".t-dessert1");
let tDessert2 = document.querySelector(".t-dessert2");
let tDessert3 = document.querySelector(".t-dessert3");
let tDessert4 = document.querySelector(".t-dessert4");
let tDessert5 = document.querySelector(".t-dessert5");
let tDessert6 = document.querySelector(".t-dessert6");
let tDessert7 = document.querySelector(".t-dessert7");
let tDessert8 = document.querySelector(".t-dessert8");

let pDessert1 = document.querySelector(".p-dessert1");
let pDessert2 = document.querySelector(".p-dessert2");
let pDessert3 = document.querySelector(".p-dessert3");
let pDessert4 = document.querySelector(".p-dessert4");
let pDessert5 = document.querySelector(".p-dessert5");
let pDessert6 = document.querySelector(".p-dessert6");
let pDessert7 = document.querySelector(".p-dessert7");
let pDessert8 = document.querySelector(".p-dessert8");

let priceDessert1 = document.querySelector(".priceDessert1");
let priceDessert2 = document.querySelector(".priceDessert2");
let priceDessert3 = document.querySelector(".priceDessert3");
let priceDessert4 = document.querySelector(".priceDessert4");
let priceDessert5 = document.querySelector(".priceDessert5");
let priceDessert6 = document.querySelector(".priceDessert6");
let priceDessert7 = document.querySelector(".priceDessert7");
let priceDessert8 = document.querySelector(".priceDessert8");

let imgDessert1 = document.querySelector(".imgDessert1");
let imgDessert2 = document.querySelector(".imgDessert2");
let imgDessert3 = document.querySelector(".imgDessert3");
let imgDessert4 = document.querySelector(".imgDessert4");
let imgDessert5 = document.querySelector(".imgDessert5");
let imgDessert6 = document.querySelector(".imgDessert6");
let imgDessert7 = document.querySelector(".imgDessert7");
let imgDessert8 = document.querySelector(".imgDessert8");

// tea
let tea1 = document.querySelector(".tea-1");
let tea2 = document.querySelector(".tea-2");
let tea3 = document.querySelector(".tea-3");
let tea4 = document.querySelector(".tea-4");

let tTea1 = document.querySelector(".t-tea1");
let tTea2 = document.querySelector(".t-tea2");
let tTea3 = document.querySelector(".t-tea3");
let tTea4 = document.querySelector(".t-tea4");

let pTea1 = document.querySelector(".p-tea1");
let pTea2 = document.querySelector(".p-tea2");
let pTea3 = document.querySelector(".p-tea3");
let pTea4 = document.querySelector(".p-tea4");

let priceTea1 = document.querySelector(".priceTea1");
let priceTea2 = document.querySelector(".priceTea2");
let priceTea3 = document.querySelector(".priceTea3");
let priceTea4 = document.querySelector(".priceTea4");

let imgTea1 = document.querySelector(".imgTea1");
let imgTea2 = document.querySelector(".imgTea2");
let imgTea3 = document.querySelector(".imgTea3");
let imgTea4 = document.querySelector(".imgTea4");

// modal
let sSize = document.querySelector(".s-size");
let mSize = document.querySelector(".m-size");
let lSize = document.querySelector(".l-size");
let fitstadd = document.querySelector(".fitstadd");
let secondadd = document.querySelector(".secondadd");
let threeadd = document.querySelector(".threeadd");

// coffe objct
let titleCart = {
  coffee1: tCoffee1.textContent,
  coffee2: tCoffee2.textContent,
  coffee3: tCoffee3.textContent,
  coffee4: tCoffee4.textContent,
  coffee5: tCoffee5.textContent,
  coffee6: tCoffee6.textContent,
  coffee7: tCoffee7.textContent,
  coffee8: tCoffee8.textContent,
  dessert1: tDessert1.textContent,
  dessert2: tDessert2.textContent,
  dessert3: tDessert3.textContent,
  dessert4: tDessert4.textContent,
  dessert5: tDessert5.textContent,
  dessert6: tDessert6.textContent,
  dessert7: tDessert7.textContent,
  dessert8: tDessert8.textContent,
  tea1: tTea1.textContent,
  tea2: tTea2.textContent,
  tea3: tTea3.textContent,
  tea4: tTea4.textContent,
};
let titleInfo = {
  coffee1: pCoffee1.textContent,
  coffee2: pCoffee2.textContent,
  coffee3: pCoffee3.textContent,
  coffee4: pCoffee4.textContent,
  coffee5: pCoffee5.textContent,
  coffee6: pCoffee6.textContent,
  coffee7: pCoffee7.textContent,
  coffee8: pCoffee8.textContent,
  dessert1: pDessert1.textContent,
  dessert2: pDessert2.textContent,
  dessert3: pDessert3.textContent,
  dessert4: pDessert4.textContent,
  dessert5: pDessert5.textContent,
  dessert6: pDessert6.textContent,
  dessert8: pDessert8.textContent,
  tea1: pTea1.textContent,
  tea2: pTea2.textContent,
  tea3: pTea3.textContent,
  tea4: pTea4.textContent,
};
let titlePrice = {
  coffee1: priceCoffee1.textContent,
  coffee2: priceCoffee2.textContent,
  coffee3: priceCoffee3.textContent,
  coffee4: priceCoffee4.textContent,
  coffee5: priceCoffee5.textContent,
  coffee6: priceCoffee6.textContent,
  coffee7: priceCoffee7.textContent,
  coffee8: priceCoffee8.textContent,
  dessert1: priceDessert1.textContent,
  dessert2: priceDessert2.textContent,
  dessert3: priceDessert3.textContent,
  dessert4: priceDessert4.textContent,
  dessert5: priceDessert5.textContent,
  dessert6: priceDessert6.textContent,
  dessert7: priceDessert7.textContent,
  dessert8: priceDessert8.textContent,
  tea1: priceTea1.textContent,
  tea2: priceTea2.textContent,
  tea3: priceTea3.textContent,
  tea4: priceTea4.textContent,
};
let titleImg = {
  coffee1: imgCoffee1.src,
  coffee2: imgCoffee2.src,
  coffee3: imgCoffee3.src,
  coffee4: imgCoffee4.src,
  coffee5: imgCoffee5.src,
  coffee6: imgCoffee6.src,
  coffee7: imgCoffee7.src,
  coffee8: imgCoffee8.src,
  dessert1: imgDessert1.src,
  dessert2: imgDessert2.src,
  dessert3: imgDessert3.src,
  dessert4: imgDessert4.src,
  dessert5: imgDessert5.src,
  dessert6: imgDessert6.src,
  dessert7: imgDessert7.src,
  dessert8: imgDessert8.src,
  tea1: imgTea1.src,
  tea2: imgTea2.src,
  tea3: imgTea3.src,
  tea4: imgTea4.src,
};

closebuttonIrish.addEventListener("click", function () {
  if (!backGrey.classList.contains("hidden")) {
    lock.classList.remove("lock");
    coffeIrish.classList.remove("visual");
    backGrey.classList.remove("visual");
    setTimeout(function () {
      coffeIrish.classList.add("hidden");
      backGrey.classList.add("hidden");
    }, 300);
  }
});
let modalTitle = document.querySelector(".modal-title");
let modalInfo = document.querySelector(".modal-txt");
let modalPrice = document.querySelector(".price");
let modalImg = document.querySelector(".modal-img");

// function add content

let priceCount = "";
let allPrice = "";

function addContent(name, category, info, price, img) {
  name.textContent = titleCart[category];
  info.textContent = titleInfo[category];
  price.textContent = titlePrice[category];
  img.src = titleImg[category];
  priceCount = Number(price.textContent.slice(1));
  allPrice = Number(price.textContent.slice(1));
  console.log(typeof priceCount);
  console.log(priceCount);
  lock.classList.add("lock");
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
}

function NameTextCoffee() {
  sSize.innerHTML = "200 ml";
  mSize.innerHTML = "300 ml";
  lSize.innerHTML = "400 ml";
  fitstadd.innerHTML = "Sugar";
  secondadd.innerHTML = "Cinnamon";
  threeadd.innerHTML = "Syrup";
}
function NameTextTea() {
  sSize.innerHTML = "200 ml";
  mSize.innerHTML = "300 ml";
  lSize.innerHTML = "400 ml";
  fitstadd.innerHTML = "Sugar";
  secondadd.innerHTML = "Lemon";
  threeadd.innerHTML = "Syrup";
}
function NameTextDessert() {
  sSize.innerHTML = "50 g";
  mSize.innerHTML = "100 g";
  lSize.innerHTML = "200 g";
  fitstadd.innerHTML = "Berries";
  secondadd.innerHTML = "Nuts";
  threeadd.innerHTML = "Jam";
}
// all button
// coffee

coffee1.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee1";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee2.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee2";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee3.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee3";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee4.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee4";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee5.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee5";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee6.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee6";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee7.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee7";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
coffee8.addEventListener("click", function () {
  allDown();
  NameTextCoffee();
  namecategory = "coffee8";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});

// dessert
dessert1.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert1";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert2.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert2";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert3.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert3";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert4.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert4";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert5.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert5";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert6.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert6";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert7.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert7";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
dessert8.addEventListener("click", function () {
  allDown();
  NameTextDessert();
  namecategory = "dessert8";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
// tea
tea1.addEventListener("click", function () {
  allDown();
  NameTextTea();
  secondadd.innerHTML = "Lemon";
  namecategory = "tea1";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
tea2.addEventListener("click", function () {
  allDown();
  NameTextTea();
  secondadd.innerHTML = "Lemon";
  namecategory = "tea2";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
tea3.addEventListener("click", function () {
  allDown();
  NameTextTea();
  secondadd.innerHTML = "Lemon";
  namecategory = "tea3";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});
tea4.addEventListener("click", function () {
  allDown();
  NameTextTea();
  secondadd.innerHTML = "Lemon";
  namecategory = "tea4";
  addContent(modalTitle, namecategory, modalInfo, modalPrice, modalImg);
});

// modal button

button1Modal.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu1Modal.classList.add("button-background");
    icon1Modal.classList.add("icon-background");
  }
});
button1Modal.addEventListener("mouseout", function () {
  menu1Modal.classList.remove("button-background");
  icon1Modal.classList.remove("icon-background");
});
button2Modal.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu2Modal.classList.add("button-background");
    icon2Modal.classList.add("icon-background");
  }
});
button2Modal.addEventListener("mouseout", function () {
  menu2Modal.classList.remove("button-background");
  icon2Modal.classList.remove("icon-background");
});
button3Modal.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu3Modal.classList.add("button-background");
    icon3Modal.classList.add("icon-background");
  }
});
button3Modal.addEventListener("mouseout", function () {
  menu3Modal.classList.remove("button-background");
  icon3Modal.classList.remove("icon-background");
});
button1Additives.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu1Additives.classList.add("button-background");
    icon1Additives.classList.add("icon-background");
  }
});
button1Additives.addEventListener("mouseout", function () {
  menu1Additives.classList.remove("button-background");
  icon1Additives.classList.remove("icon-background");
});
button2Additives.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu2Additives.classList.add("button-background");
    icon2Additives.classList.add("icon-background");
  }
});
button2Additives.addEventListener("mouseout", function () {
  menu2Additives.classList.remove("button-background");
  icon2Additives.classList.remove("icon-background");
});
button3Additives.addEventListener("mouseover", function () {
  if (window.innerWidth >= 768) {
    menu3Additives.classList.add("button-background");
    icon3Additives.classList.add("icon-background");
  }
});
button3Additives.addEventListener("mouseout", function () {
  menu3Additives.classList.remove("button-background");
  icon3Additives.classList.remove("icon-background");
});

button1Modal.addEventListener("click", function () {
  if (menu3Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount - 1;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  if (menu2Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount - 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  menu1Modal.classList.add("button-background-stay");
  icon1Modal.classList.add("icon-background-stay");
  menu2Modal.classList.remove("button-background-stay");
  icon2Modal.classList.remove("icon-background-stay");
  menu3Modal.classList.remove("button-background-stay");
  icon3Modal.classList.remove("icon-background-stay");
});

button2Modal.addEventListener("click", function () {
  if (menu1Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount + 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  if (menu3Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount - 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }

  menu2Modal.classList.add("button-background-stay");
  icon2Modal.classList.add("icon-background-stay");
  menu1Modal.classList.remove("button-background-stay");
  icon1Modal.classList.remove("icon-background-stay");
  menu1Modal.classList.remove("button-background");
  icon1Modal.classList.remove("icon-background");
  menu3Modal.classList.remove("button-background-stay");
  icon3Modal.classList.remove("icon-background-stay");
});

button3Modal.addEventListener("click", function () {
  if (menu1Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount + 1;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  if (menu2Modal.classList.contains("button-background-stay")) {
    priceCount = priceCount + 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  menu3Modal.classList.add("button-background-stay");
  icon3Modal.classList.add("icon-background-stay");
  menu2Modal.classList.remove("button-background-stay");
  icon2Modal.classList.remove("icon-background-stay");
  menu1Modal.classList.remove("button-background-stay");
  icon1Modal.classList.remove("icon-background-stay");
  menu1Modal.classList.remove("button-background");
  icon1Modal.classList.remove("icon-background");
});
button1Additives.addEventListener("click", function () {
  if (!menu1Additives.classList.contains("button-background-stay")) {
    priceCount = priceCount + 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  } else {
    priceCount = priceCount - 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  menu1Additives.classList.toggle("button-background-stay");
  icon1Additives.classList.toggle("icon-background-stay");
});

button2Additives.addEventListener("click", function () {
  if (!menu2Additives.classList.contains("button-background-stay")) {
    priceCount = priceCount + 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  } else {
    priceCount = priceCount - 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  menu2Additives.classList.toggle("button-background-stay");
  icon2Additives.classList.toggle("icon-background-stay");
});

button3Additives.addEventListener("click", function () {
  if (!menu3Additives.classList.contains("button-background-stay")) {
    priceCount = priceCount + 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  } else {
    priceCount = priceCount - 0.5;
    if (Number.isInteger(priceCount)) {
      modalPrice.innerHTML = "$".concat(String(priceCount + ".00"));
    } else modalPrice.innerHTML = "$".concat(String(priceCount + "0"));
  }
  menu3Additives.classList.toggle("button-background-stay");
  icon3Additives.classList.toggle("icon-background-stay");
});

function allDown() {
  menu1Additives.classList.remove("button-background-stay");
  icon1Additives.classList.remove("icon-background-stay");
  menu2Additives.classList.remove("button-background-stay");
  icon2Additives.classList.remove("icon-background-stay");
  menu3Additives.classList.remove("button-background-stay");
  icon3Additives.classList.remove("icon-background-stay");
  menu3Modal.classList.remove("button-background-stay");
  icon3Modal.classList.remove("icon-background-stay");
  menu2Modal.classList.remove("button-background-stay");
  icon2Modal.classList.remove("icon-background-stay");
  menu1Modal.classList.add("button-background-stay");
  icon1Modal.classList.add("icon-background-stay");
  menu1Modal.classList.remove("button-background");
  icon1Modal.classList.remove("icon-background");
}

// background closed
backGrey.addEventListener("click", function () {
  if (!backGrey.classList.contains("hidden")) {
    lock.classList.remove("lock");
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

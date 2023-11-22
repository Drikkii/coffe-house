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

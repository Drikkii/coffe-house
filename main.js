// const body = document.querySelector(".body");

// window.addEventListener("load", () => {
//   body.innerHTML = "";
// });

function loadContentFromFile(element) {
  const fileUrl = element.getAttribute("data-file");

  if (!fileUrl) {
    return;
  }

  fetch(fileUrl)
    .then((response) => response.text())
    .then((data) => {
      element.innerHTML = data;
    })
    .catch((error) => console.log(error));
}

document.addEventListener("DOMContentLoaded", function () {
  const elementsWithFileAttr = document.querySelectorAll("[data-file]");

  elementsWithFileAttr.forEach((element) => {
    loadContentFromFile(element);
  });
});

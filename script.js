var title = document.querySelector("#title");
var author = document.querySelector("#author");
var pages = document.querySelector("#pages");
var submit = document.querySelector(".form-submit");

document.querySelector("#show-form").addEventListener("click", function () {
  document.querySelector(".pop-up").classList.add("active");
});

submit.addEventListener("click", function () {
  var newCard = document.createElement("div"); // Create a new instance of newCard each time
  var titleDIV = document.createElement("div");
  var authorDIV = document.createElement("div");
  var pagesDIV = document.createElement("div");
  newCard.classList.add("book-container");
  titleDIV.classList.add("book-title");
  authorDIV.classList.add("book-author");
  titleDIV.textContent = title.value;
  authorDIV.textContent = author.value;
  pagesDIV.textContent = pages.value;
  document.querySelector(".main-container").appendChild(newCard);
  newCard.appendChild(titleDIV);
  newCard.appendChild(authorDIV);
  newCard.appendChild(pagesDIV);
  document.querySelector(".pop-up").classList.remove("active");
  title.value = "";
  author.value = "";
  pages.value = "";
});

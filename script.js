var titles = document.querySelector("#title");
var authors = document.querySelector("#author");
var page = document.querySelector("#pages");
var submit = document.querySelector(".form-submit");

let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

document.querySelector("#show-form").addEventListener("click", function () {
  document.querySelector(".pop-up").classList.add("active");
});

submit.addEventListener("click", function addBookToLibrary() {
  var newCard = document.createElement("div"); // Create a new instance of newCard each time
  var titleDIV = document.createElement("div");
  var authorDIV = document.createElement("div");
  var pagesDIV = document.createElement("div");
  newCard.classList.add("book-container");
  titleDIV.classList.add("book-title");
  authorDIV.classList.add("book-author");
  titleDIV.textContent = titles.value;
  authorDIV.textContent = authors.value;
  pagesDIV.textContent = page.value;
  document.querySelector(".main-container").appendChild(newCard);
  newCard.appendChild(titleDIV);
  newCard.appendChild(authorDIV);
  newCard.appendChild(pagesDIV);
  document.querySelector(".pop-up").classList.remove("active");
  titles.value = "";
  authors.value = "";
  page.value = "";
});

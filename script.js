var titles = document.querySelector("#title");
var authors = document.querySelector("#author");
var page = document.querySelector("#pages");
var submit = document.querySelector(".form-submit");
var mainContainer = document.querySelector(".main-container");
var readStatus = document.getElementById("readButton");

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

submit.addEventListener("click", function () {
  addBookToLibrary();
  document.querySelector(".pop-up").classList.remove("active");
});

function addBookToLibrary() {
  var titleValue = titles.value;
  var authorValue = authors.value;
  var pagesValue = pages.value;
  var readValue = readStatus.value;
  var newBook = new book(titleValue, authorValue, pagesValue, readValue);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
}

function displayBooks() {
  mainContainer.innerHTML = "";
  myLibrary.forEach(function (book) {
    var card = document.createElement("div");
    card.classList.add("book-container");

    var title = document.createElement("div");
    title.textContent = book.title;

    var author = document.createElement("div");
    author.textContent = "By: " + book.author;

    var page = document.createElement("div");
    page.textContent = "Pages: " + book.pages;

    var readStatus = document.createElement("div");
    readStatus.textContent = book.read;
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(readStatus);
    mainContainer.appendChild(card);
    titles.value = "";
    authors.value = "";
    pages.value = "";
  });
}

function exit() {
  document.querySelector(".pop-up").classList.remove("active");
  titles.value = "";
  authors.value = "";
  pages.value = "";
}

function status() {
  if (readButton.value == "Read") {
    readButton.value = "Not Read";
  } else if (readButton.value == "Not Read") {
    readButton.value = "Read";
  }
}

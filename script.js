var titles = document.querySelector("#title");
var authors = document.querySelector("#author");
var page = document.querySelector("#pages");
var readBox = document.querySelector("#read");
var submit = document.querySelector(".form-submit");
var mainContainer = document.querySelector(".main-container");

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
  var readValue = readBox.checked;

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
    author.textContent = "Author: " + book.author;

    var page = document.createElement("div");
    page.textContent = "Pages: " + book.pages;

    var readStatus = document.createElement("div");
    readStatus.textContent = book.read ? "Read" : "Not Read";
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(readStatus);
    mainContainer.appendChild(card);
    titles.value = "";
    authors.value = "";
    pages.value = "";
    readBox.checked = false;
  });
}

function exit() {
  document.querySelector(".pop-up").classList.remove("active");
  titles.value = "";
  authors.value = "";
  pages.value = "";
  readBox.checked = false;
}

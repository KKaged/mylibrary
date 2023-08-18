var titles = document.querySelector("#title");
var authors = document.querySelector("#author");
var pages = document.querySelector("#pages");
var submit = document.querySelector(".form-submit");
var mainContainer = document.querySelector(".main-container");
var readStatus = document.getElementById("readButton");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
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
  var newBook = new Book(titleValue, authorValue, pagesValue, readValue);
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

    var didRead = document.createElement("input");
    didRead.type = "button";
    didRead.classList.add("mini-status");
    didRead.classList.add("input");
    didRead.value = book.read;
    didRead.onclick = function () {
      toggleReadStatus(book);
      displayBooks();
    };
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(didRead);
    mainContainer.appendChild(card);
    titles.value = "";
    authors.value = "";
    pages.value = "";
  });
}

function toggleReadStatus(book) {
  if (book.read === "Read") {
    book.read = "Not Read";
  } else if (book.read === "Not Read") {
    book.read = "Read";
  }
  displayBooks();
}

function exit() {
  document.querySelector(".pop-up").classList.remove("active");
  titles.value = "";
  authors.value = "";
  pages.value = "";
}

document.getElementById("readButton").addEventListener("click", function () {
  status();
});

function status() {
  if (readStatus.value == "Read") {
    readStatus.value = "Not Read";
  } else if (readStatus.value == "Not Read") {
    readStatus.value = "Read";
  }
}

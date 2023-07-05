var title = document.querySelector("#title").value;
var author = document.querySelector("#author").value;
var pages = document.querySelector("#pages").value;
const submit = document.querySelector(".form-submit");

document.querySelector(`#show-form`).addEventListener("click", function () {
  document.querySelector(".pop-up").classList.add("active");
});

submit.addEventListener("click", function () {
  document.querySelector(".pop-up").classList.remove("active");
});

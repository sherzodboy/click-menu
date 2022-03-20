var elMove = document.querySelector(".move");
var elCircle = document.querySelector(".circle");
var elBody = document.querySelector(".body");
var elLink = document.querySelector(".link");

elMove.addEventListener("click", function () {
  elMove.classList.toggle("move-hover");
  elCircle.classList.toggle("circle-transform");
  elBody.classList.toggle("body-hover");
  elLink.classList.toggle("link-hover");
});

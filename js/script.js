
var nav = document.querySelector(".nav");

var menuToggle = document.querySelector(".menu-toggle");



menuToggle.addEventListener("click", function () {
  nav.classList.toggle("mobile-nav");
  this.classList.toggle("is-active");
});
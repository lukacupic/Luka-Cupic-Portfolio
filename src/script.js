function toggleMenu(e) {
  const navLinks = document.getElementById("nav-links");

  e.name = e.name === "menu" ? "close" : "menu";

  navLinks.classList.toggle("scale-y-0");
  navLinks.classList.toggle("scale-y-100");
}

function fitMenuToNavBar() {
  let navElement = document.querySelector("nav");
  let navLinks = document.getElementById("nav-links");

  let navElementHeight = navElement.offsetHeight;
  navLinks.style.top = navElementHeight + "px";
}

window.onload = function () {
  fitMenuToNavBar();
};

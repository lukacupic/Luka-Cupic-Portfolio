function toggleMenu(e) {
  const navLinks = document.getElementById("nav-links");

  if (e.name === "menu") {
    e.name = "close";

    navLinks.classList.remove("max-h-0");
    navLinks.classList.add("max-h-10");
  } else {
    e.name = "menu";
    navLinks.classList.remove("max-h-10");
    navLinks.classList.add("max-h-0");
  }
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

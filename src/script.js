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

function handleChangeToMobile(event) {
  if (event.matches) {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.add("hidden");

    setTimeout(() => {
      navLinks.classList.remove("hidden");
    }, 500);
  }
}

window.onload = function () {
  fitMenuToNavBar();

  const mdBreakpoint = window.matchMedia("(max-width: 768px)");
  handleChangeToMobile(mdBreakpoint);
  mdBreakpoint.addEventListener("change", handleChangeToMobile);
};

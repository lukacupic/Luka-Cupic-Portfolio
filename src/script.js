function toggleMenu(e) {
  const navLinks = document.getElementById("nav-links");

  if (e.name === "menu") {
    e.name = "close";

    navLinks.classList.remove("top-[-100%]");
    navLinks.classList.add("top-[10%]");
  } else {
    e.name = "menu";

    navLinks.classList.remove("top-[10%]");
    navLinks.classList.add("top-[-100%]");
  }
}

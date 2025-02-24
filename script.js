// Typing Effect
let typed = new Typed("#element", {
    strings: ["Sahil Patel", "Developer"],
    typeSpeed: 100,
    showCursor: false,
    loop: true
  });

// Dark theme
const body = document.querySelector("body")
const icon = document.querySelector("#icon");
const logo = document.querySelector(".nav-branding");
const menuBtn = document.querySelector("#menu-icon");

icon.addEventListener("click",  () =>  {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.src = "assests/sun.png";
    logo.src = "assests/sahil-logo2.png";
  } else {
    icon.src = "assests/moon.png";
    logo.src = "assests/sahil-logo.png";
  }
});



// Responsive NavBar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

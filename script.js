// Meniu responsive (dacă vrei să adaugi un burger menu în viitor)
console.log("Site-ul a fost încărcat.");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

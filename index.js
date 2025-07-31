const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Sticky header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(255,255,255,0.98)";
    header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  }
});

// Form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  form.reset();
});

const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

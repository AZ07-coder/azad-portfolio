// Small progressive enhancements for the portfolio.
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation after a visitor selects a section.
document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

// Highlight the active navigation item while scrolling.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navLinks .nav-link");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
sections.forEach((section) => observer.observe(section));

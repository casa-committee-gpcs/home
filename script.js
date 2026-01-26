const links = document.querySelectorAll(".nav a");
const path = window.location.pathname;

links.forEach(link => {
  const href = link.getAttribute("href");

  if (
    href === "./" && path.endsWith("/") ||
    href !== "./" && path.includes(href)
  ) {
    link.classList.add("active");
  }
});

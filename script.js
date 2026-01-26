// Highlight active link based on current path
const links = document.querySelectorAll(".sidebar a");
const currentPath = window.location.pathname;

links.forEach(link => {
  const linkPath = link.getAttribute("href");

  if (
    linkPath === "/" && currentPath === "/" ||
    linkPath !== "/" && currentPath.startsWith(linkPath)
  ) {
    link.style.background = "rgba(255, 255, 255, 0.18)";
    link.style.color = "#ffffff";
  }
});

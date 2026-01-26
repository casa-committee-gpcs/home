const links = document.querySelectorAll(".nav a");
const currentPath = window.location.pathname.split("/").filter(Boolean).pop();

links.forEach(link => {
  const linkPath = link.getAttribute("href").replace("/", "");
  if (
    linkPath === "" && currentPath === undefined ||
    linkPath === currentPath
  ) {
    link.classList.add("active");
  }
});

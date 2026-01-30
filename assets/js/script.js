const links = document.querySelectorAll(".sidebar a");
const currentPath = window.location.pathname.replace(/\/$/, "");

links.forEach(link => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

  if (currentPath === linkPath) {
    link.classList.add("active");
  }
});

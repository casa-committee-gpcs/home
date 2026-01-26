document.addEventListener("DOMContentLoaded", function () {

  // Select ALL navigation links from sidebar and top nav
  const navLinks = document.querySelectorAll(
    ".sidebar a, .top-nav a, header a"
  );

  let currentPath = window.location.pathname;

  // Normalize path (important for GitHub Pages)
  if (!currentPath.endsWith("/")) {
    currentPath += "/";
  }

  navLinks.forEach(link => {
    let linkPath = new URL(link.href).pathname;

    if (!linkPath.endsWith("/")) {
      linkPath += "/";
    }

    // Clear previous state
    link.classList.remove("active");

    // Exact match
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

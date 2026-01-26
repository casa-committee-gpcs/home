// Select all nav links
const links = document.querySelectorAll(".nav a");

// Get current page path
let path = window.location.pathname;

// Remove trailing slash if present
if (path.endsWith("/")) path = path.slice(0, -1);

// Extract last segment of the path
let currentPage = path.split("/").pop();

// Special case for home page
if (currentPage === "" || currentPage === "index.html") {
  currentPage = "./";
}

// Add 'active' class to the matching link
links.forEach(link => {
  let href = link.getAttribute("href");

  // Remove trailing slash for comparison
  if (href.endsWith("/")) href = href.slice(0, -1);

  if (href === currentPage) {
    link.classList.add("active");
  }
});

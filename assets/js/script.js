document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.current;
  const navLinks = document.querySelectorAll(".sidebar a");

  navLinks.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
  });
});

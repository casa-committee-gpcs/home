document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".expand-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const card = header.parentElement;
      const siblings = [...card.parentElement.children];

      // Close siblings at same level
      siblings.forEach(sib => {
        if (sib !== card && sib.classList.contains("expand-card")) {
          sib.classList.remove("active");
        }
      });

      // Toggle current
      card.classList.toggle("active");
    });
  });
});

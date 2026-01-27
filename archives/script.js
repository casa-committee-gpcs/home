document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".archive-card");

  cards.forEach(card => {
    const header = card.querySelector(".archive-header");

    header.addEventListener("click", () => {
      cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });
});

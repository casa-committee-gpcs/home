document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".notes-card");

  cards.forEach(card => {
    const header = card.querySelector(":scope > .notes-header");
    if (!header) return;

    header.addEventListener("click", () => {
      const siblings = Array.from(card.parentElement.children)
        .filter(el => el !== card && el.classList.contains("notes-card"));

      siblings.forEach(sib => sib.classList.remove("active"));
      card.classList.toggle("active");
    });
  });
});

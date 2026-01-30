document.querySelectorAll(".notes-header").forEach(header => {
  header.addEventListener("click", () => {
    const card = header.parentElement;
    const siblings = card.parentElement.querySelectorAll(":scope > .notes-card");

    siblings.forEach(sib => {
      if (sib !== card) sib.classList.remove("active");
    });

    card.classList.toggle("active");
  });
});

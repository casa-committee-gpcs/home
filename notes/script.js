document.addEventListener("DOMContentLoaded", () => {

  // LEVEL 1 – Notes cards
  const cards = document.querySelectorAll(".notes-card");

  cards.forEach(card => {
    const header = card.querySelector(".notes-header");

    header.addEventListener("click", () => {
      cards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });

  // LEVEL 2 – Semesters
  const semesters = document.querySelectorAll(".semester");

  semesters.forEach(sem => {
    const title = sem.querySelector(".semester-title");

    title.addEventListener("click", (e) => {
      e.stopPropagation(); // IMPORTANT: prevents closing parent

      semesters.forEach(s => {
        if (s !== sem) s.classList.remove("active");
      });

      sem.classList.toggle("active");
    });
  });

});

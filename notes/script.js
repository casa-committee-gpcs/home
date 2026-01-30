document.addEventListener("DOMContentLoaded", () => {
  const semesters = document.querySelectorAll(".semester");

  semesters.forEach(sem => {
    const title = sem.querySelector(".semester-title");

    title.addEventListener("click", () => {
      semesters.forEach(s => {
        if (s !== sem) s.classList.remove("active");
      });
      sem.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  /* OUTER NOTES CARDS */
  const noteCards = document.querySelectorAll(".notes-card");

  noteCards.forEach(card => {
    const header = card.querySelector(".notes-card-header");

    header.addEventListener("click", () => {
      noteCards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });

  /* SEMESTERS */
  const semesters = document.querySelectorAll(".semester");

  semesters.forEach(sem => {
    const title = sem.querySelector(".semester-title");

    title.addEventListener("click", e => {
      e.stopPropagation(); // 🔥 prevents closing parent card
      semesters.forEach(s => {
        if (s !== sem) s.classList.remove("active");
      });
      sem.classList.toggle("active");
    });
  });

});

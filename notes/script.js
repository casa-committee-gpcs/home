document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     ACTIVE NAV DETECTION
  ===================== */
  const links = document.querySelectorAll(".sidebar a");
  const path = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (
      path.endsWith(href) ||
      (href === "/" && path.endsWith("/home/"))
    ) {
      link.classList.add("active");
    }
  });

  /* =====================
     OUTER CARD EXPAND
  ===================== */
  const notesCards = document.querySelectorAll(".notes-card");
  notesCards.forEach(card => {
    const header = card.querySelector(".notes-header");
    header.addEventListener("click", () => {
      notesCards.forEach(c => {
        if (c !== card) c.classList.remove("active");
      });
      card.classList.toggle("active");
    });
  });

  /* =====================
     INNER SEMESTER EXPAND
  ===================== */
  const semesters = document.querySelectorAll(".semester");
  semesters.forEach(semester => {
    const title = semester.querySelector(".semester-title");
    title.addEventListener("click", () => {
      const parentCard = semester.closest(".notes-card");
      // Close other semesters in same card
      parentCard.querySelectorAll(".semester").forEach(s => {
        if (s !== semester) s.classList.remove("active");
      });
      semester.classList.toggle("active");
    });
  });

  /* =====================
     TEMPORARY CLICK EFFECT ON LINKS
  ===================== */
  const interactiveLinks = document.querySelectorAll(".interactive-link");
  interactiveLinks.forEach(link => {
    link.addEventListener("click", e => {
      link.classList.add("clicked");
      setTimeout(() => link.classList.remove("clicked"), 2000);
    });
  });

});

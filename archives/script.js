document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     ARCHIVE CARD TOGGLE
  ===================== */

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


  /* =====================
     TEMP CLICK FEEDBACK (LINKS)
  ===================== */

  const archiveLinks = document.querySelectorAll(".archive-content a");

  archiveLinks.forEach(link => {

    // Prevent card click feeling
    link.addEventListener("click", (e) => {
      e.stopPropagation();

      link.classList.add("clicked");

      setTimeout(() => {
        link.classList.remove("clicked");
      }, 2000);
    });

  });

});

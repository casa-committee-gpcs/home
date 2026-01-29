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

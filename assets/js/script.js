// =====================
// HEADER WAVE CONTROL
// =====================

const header = document.querySelector(".top-header");
let directionDown = true;

function triggerWave() {
  header.classList.remove("wave-down", "wave-up");

  if (directionDown) {
    header.classList.add("wave-down");
  } else {
    header.classList.add("wave-up");
  }

  directionDown = !directionDown;
}

triggerWave();
setInterval(triggerWave, 6500);

// =====================
// ACTIVE NAV DETECTION
// =====================

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

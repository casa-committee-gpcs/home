const links = document.querySelectorAll(".sidebar a");
const currentPath = window.location.pathname.replace(/\/$/, "");

links.forEach(link => {
  const linkPath = new URL(link.href).pathname.replace(/\/$/, "");

  if (currentPath === linkPath) {
    link.classList.add("active");
  }
});

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  // Load saved preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const button = document.getElementById("theme-toggle");
    button.textContent = document.body.classList.contains('dark') ? '◧Light' : '◧Dark';
  });
}
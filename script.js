document.getElementById("menu-toggle").onclick = function () {
  document.getElementById("nav-links").classList.toggle("active");
};

document.getElementById("theme-toggle").onclick = function () {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  this.textContent = isDark ? "☀️" : "🌙";
};


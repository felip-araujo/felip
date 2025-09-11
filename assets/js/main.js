const htmlEl = document.documentElement; // <html>
const toggle = document.getElementById("toggle-switch");

// aplica o tema salvo no localStorage quando a página carrega
if (localStorage.getItem("theme") === "dark") {
  htmlEl.classList.add("dark");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
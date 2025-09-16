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

function projetos() {
  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll("[data-width]");
  bars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 200); // pequeno delay para efeito de animação
  });
});

AOS.init({
  duration: 1000, // duração da animação em ms
  easing: "ease-in-out", // suavização
  once: true, // anima apenas uma vez
});

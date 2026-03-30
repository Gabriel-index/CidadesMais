const termosBox = document.getElementById("termosBox");
const check = document.getElementById("check");
const btn = document.getElementById("acceptBtn");

// Ativa checkbox só depois de rolar tudo
termosBox.addEventListener("scroll", () => {
  const scrollTotal = termosBox.scrollHeight - termosBox.clientHeight;

  if (termosBox.scrollTop >= scrollTotal - 5) {
    check.disabled = false;
  }
});

// Ativa botão quando marcar
check.addEventListener("change", () => {
  btn.disabled = !check.checked;
});

// Redireciona
btn.addEventListener("click", () => {
  window.location.href = "index.html";
});
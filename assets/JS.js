const modal = document.getElementById("modalTermos");
const abrir = document.getElementById("abrirModal");
const fechar = document.getElementById("fecharModal");
const btnAceito = document.getElementById("btnAceito");
const checkbox = document.getElementById("checkboxTermos");
const btnSubmit = document.getElementById("btnSubmit");
const form = document.querySelector(".form_cadastrar");

// ABRIR MODAL
abrir.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// FECHAR
fechar.onclick = () => modal.style.display = "none";

// CLICAR FORA
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// ACEITAR TERMOS
btnAceito.onclick = () => {
  checkbox.checked = true;
  localStorage.setItem("termosAceitos", "true");
  modal.style.display = "none";
  verificarCheckbox();
};

// HABILITAR BOTÃO
checkbox.addEventListener("change", verificarCheckbox);

function verificarCheckbox() {
  btnSubmit.disabled = !checkbox.checked;
}

// BLOQUEAR ENVIO SE NÃO ACEITAR
form.addEventListener("submit", function(e) {
  if (!checkbox.checked) {
    e.preventDefault();
    alert("Você precisa aceitar os termos!");
  } else {
    // REDIRECIONA
    e.preventDefault();
    window.location.href = "index.html";
  }
});

// CARREGAMENTO
window.onload = () => {
  if (localStorage.getItem("termosAceitos")) {
    checkbox.checked = true;
    verificarCheckbox();
  }
};
const perguntas = document.querySelectorAll(".caixa_de_perguntas");

perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {

        const resposta = pergunta.nextElementSibling;

        // Fecha todas as respostas
        document.querySelectorAll(".caixa_de_resposta_faq")
            .forEach(r => {
                if (r !== resposta) {
                    r.classList.remove("ativo");
                }
            });

        // Remove seta de todas
        document.querySelectorAll(".caixa_de_perguntas")
            .forEach(p => {
                if (p !== pergunta) {
                    p.classList.remove("ativa");
                }
            });

        // Alterna atual
        resposta.classList.toggle("ativo");
        pergunta.classList.toggle("ativa");
    });
});
const menuIcon = document.querySelector(".material-symbols-outlined");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});


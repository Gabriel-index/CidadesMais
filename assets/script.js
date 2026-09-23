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

const btnCidadao = document.getElementById('btn_cidadao');
const btnPrefeitura = document.getElementById('btn_prefeitura');
const camposCidadao = document.getElementById('campos_cidadao');
const camposPrefeitura = document.getElementById('campos_prefeitura');

function alternarTipoConta(tipo) {
    const ehCidadao = tipo === 'cidadao';

    btnCidadao.classList.toggle('ativo', ehCidadao);
    btnPrefeitura.classList.toggle('ativo', !ehCidadao);

    camposCidadao.style.display = ehCidadao ? 'block' : 'none';
    camposPrefeitura.style.display = ehCidadao ? 'none' : 'block';

    // evita que campos escondidos bloqueiem o envio do form
    document.getElementById('name').required = ehCidadao;
    document.getElementById('email').required = ehCidadao;
    document.getElementById('bairro').required = ehCidadao;
}

btnCidadao.addEventListener('click', () => alternarTipoConta('cidadao'));
btnPrefeitura.addEventListener('click', () => alternarTipoConta('prefeitura'));

const formPerfil = document.getElementById('form_perfil');

if (formPerfil) {
    const campos = [...formPerfil.querySelectorAll('input:not([readonly])')];
    const btnSalvar = document.getElementById('btnSalvarPerfil');
    const btnDescartar = document.getElementById('btnDescartarPerfil'); 
    const mensagemStatus = document.getElementById('status_form_perfil');

    let valoresSalvos = campos.map(campo => campo.value);

    const atualizarBotoes = () => {
        const houveMudanca = campos.some((campo, i) => campo.value.trim() !== valoresSalvos[i]);
        btnSalvar.disabled = !houveMudanca;
        btnDescartar.disabled = !houveMudanca;
    };

    campos.forEach(campo => {
        campo.addEventListener('input', () => {
            mensagemStatus.textContent = '';
            atualizarBotoes();
        });
    });

    btnDescartar.addEventListener('click', () => {
        campos.forEach((campo, i) => {
            campo.value = valoresSalvos[i];
        });
        atualizarBotoes();
    });

    formPerfil.addEventListener('submit', (evento) => {
        evento.preventDefault();

        if (!formPerfil.checkValidity()) {
            formPerfil.reportValidity();
            return;
        }

        valoresSalvos = campos.map(campo => campo.value.trim());
        atualizarBotoes();
        mensagemStatus.textContent = 'Alterações salvas.';
    });
}

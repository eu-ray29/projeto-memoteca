import ui from "./ui.js";
import api from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos();

    const formularioPensamento = document.getElementById('pensamento-form');
    const botaoCancelar = document.getElementById("botao-cancelar")

    formularioPensamento.addEventListener('submit', manipularSubimitForm);
    botaoCancelar.addEventListener('submit', manipularCancelamento);

});

async function manipularSubimitForm(event) {
    event.preventDefault();
    const id = document.getElementById('pensamento-id').value;
    const conteudo = document.getElementById('pensamento-conteudo').value;
    const autoria = document.getElementById('pensamento-autoria').value;

    try {
        await api.salvarPensamento({conteudo, autoria});
        ui.renderizarPensamentos();
    } catch {
        alert('Error ao salvar pensamento');
    }
}
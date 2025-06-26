// Função 1: Alterar o Estilo de um Parágrafo
function alterarEstiloParagrafo() {
    const paragrafo = document.getElementById('meuParagrafo');
    if (paragrafo.classList.contains('paragrafo-estilo-original')) {
        paragrafo.classList.remove('paragrafo-estilo-original');
        paragrafo.classList.add('paragrafo-estilo-alterado');
    } else {
        paragrafo.classList.remove('paragrafo-estilo-alterado');
        paragrafo.classList.add('paragrafo-estilo-original');
    }
}

// Função 2: Mostrar a Data e Hora Atualizada
function mostrarDataHora() {
    const paragrafoDataHora = document.getElementById('dataHoraAtual');
    const dataAtual = new Date();
    paragrafoDataHora.textContent = "Data e Hora Atuais: " + dataAtual.toLocaleString('pt-BR');
}

// Função 3: Trocar Entre Duas Imagens
let imagemAtual = 1; // Variável para controlar qual imagem está sendo exibida
function trocarImagem() {
    const imagem = document.getElementById('minhaImagem');
    // URLs das imagens para alternar
    const imagem1Url = "https://www.sportsnet.ca/wp-content/uploads/2025/06/KP-768x432.jpg";
    const imagem2Url = "https://thefans.com.br/wp-content/uploads/2025/06/kristaps-porzingis-atanta-hawks-800x500.webp";

    if (imagemAtual === 1) {
        imagem.src = imagem2Url;
        imagem.alt = "Kristaps Porzingis em Ação 2";
        imagemAtual = 2;
    } else {
        imagem.src = imagem1Url;
        imagem.alt = "Kristaps Porzingis em Ação 1";
        imagemAtual = 1;
    }
}

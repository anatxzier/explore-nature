// Seleciona todos os elementos de imagem com a classe "js-img" e todas as seções com a classe "js-conteudo"
const imagens = document.querySelectorAll('.js-img img');
const textos = document.querySelectorAll('.js-conteudo section');
const textos2 = document.querySelectorAll('.js-faq section div');

// Adiciona um ouvinte de evento de clique a cada imagem
imagens.forEach((item, indice) => {
    item.addEventListener('click', () => {
        // Quando uma imagem é clicada, ativa o conteúdo correspondente
        ativarConteudo(indice);
    });
});

// Função para ativar uma seção de conteúdo específica
function ativarConteudo(indice) {
    // Remove a classe "active" de todas as seções de conteúdo
    textos.forEach((item) => {
        item.classList.remove('active');
    });

    // Adiciona a classe "active" à seção de conteúdo selecionada
    textos[indice].classList.add('active');
}

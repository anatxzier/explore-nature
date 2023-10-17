const titulosfaq = document.querySelectorAll('.js-faq section nav')
const seta = document.querySelectorAll('.js-faq section nav span')

// criando a função de que quando a classe active for adicionada a section do faq, ele será aberto
function ativarTexto(indice){
    textos2[indice].classList.toggle('active')
    if (textos2[indice].classList.contains('active') == true){
        seta[indice].innerText = "▲"
    }else{
        seta[indice].innerText = "▼"
    }
};

// evento de clique -> ao clicar no titulo ou na seta do daq, o texto aparecerá
titulosfaq.forEach((item, indice) => {
    item.addEventListener('click', () => {
        ativarTexto(indice)
    })
})
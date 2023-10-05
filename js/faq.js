const titulosfaq = document.querySelectorAll('.js-faq section nav')
const seta = document.querySelectorAll('.js-faq section nav span')

function ativarTexto(indice){
    textos2[indice].classList.toggle('active')
    if (textos2[indice].classList.contains('active') == true){
        seta[indice].innerText = "▲"
    }else{
        seta[indice].innerText = "▼"
    }
};

titulosfaq.forEach((item, indice) => {
    item.addEventListener('click', () => {
        ativarTexto(indice)
    })
})
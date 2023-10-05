const imagens = document.querySelectorAll('.js-img img')
const textos = document.querySelectorAll('.js-conteudo section')
const textos2 = document.querySelectorAll('.js-faq section div')

imagens.forEach((item, indice) => {
    item.addEventListener('click',() => {
        ativarConteudo(indice)
    })

})

function ativarConteudo(indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })

    textos[indice].classList.add('active')
}

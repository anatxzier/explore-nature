const btn = document.querySelector('.menu-icone')
const conteudo = document.querySelector('.conteudo-menuMobile')
const toggleIcon = btn.querySelector('span');

btn.addEventListener('click', () =>
conteudo.classList.toggle("active"));


    btn.addEventListener('click', () =>
    toggleIcon.classList.toggle('active'));
    toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';





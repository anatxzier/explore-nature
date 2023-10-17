// Seleciona o elemento com a classe "menu-icone" (o botão de menu mobile)
const btn = document.querySelector('.menu-icone');

// Seleciona o conteúdo do menu mobile
const conteudo = document.querySelector('.conteudo-menuMobile');

// Seleciona o ícone de alternância dentro do botão de menu
const toggleIcon = btn.querySelector('span');

// Adiciona um ouvinte de evento de clique ao botão de menu
btn.addEventListener('click', () => {
    // Alterna a classe "active" no conteúdo do menu mobile, mostrando ou ocultando o menu
    conteudo.classList.toggle("active");
    
    // Alterna a classe "active" no ícone, alterando seu estado (menu aberto ou fechado)
    toggleIcon.classList.toggle('active');
    
    // Alterna o texto do ícone entre 'menu' e 'close', dependendo do estado atual
    toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
});

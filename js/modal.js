// Seleciona o elemento do modal pela classe "js-modal"
const modal = document.querySelector(".js-modal");

// Seleciona o elemento do conteúdo principal
const desfoque = document.querySelector('main');

// Obtém o valor do email armazenado localmente (localStorage)
const email = localStorage.getItem("email");

// Verifica se o email não está armazenado localmente
if (email === null) {
  // Adiciona a classe "active" ao modal para mostrá-lo
  modal.classList.add("active");

  // Adiciona a classe "active" ao conteúdo principal para desfocar
  desfoque.classList.add("active");
} else {
  // Remove a classe "active" do modal para escondê-lo
  modal.classList.remove("active");

  // Remove a classe "active" do conteúdo principal para remover o desfoque
  desfoque.classList.remove("active");
}

// Objeto para armazenar os dados do formulário
const dados = {};

// Função para lidar com as mudanças nos campos do formulário
function forms(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

// Adiciona um ouvinte de evento de mudança para o modal
modal.addEventListener('change', forms);

// Adiciona um ouvinte de evento de envio do formulário
document.querySelector(".modal-forms").addEventListener("submit", (event) => {
  event.preventDefault();

  // Armazena o email inserido no localStorage
  localStorage.setItem("email", dados.email);

  // Exibe uma mensagem de agradecimento
  alert("Obrigado pelo cadastro, seja bem-vindo!");

  // Remove a classe "active" do modal para escondê-lo
  modal.classList.remove("active");

  // Remove a classe "active" do conteúdo principal para remover o desfoque
  desfoque.classList.remove("active");
});

// Adiciona um ouvinte de evento para o botão de fechar o modal
document.querySelector(".modal-close").addEventListener("click", () => {
  // Remove a classe "active" do modal para escondê-lo
  modal.classList.remove("active");

  // Remove a classe "active" do conteúdo principal para remover o desfoque
  desfoque.classList.remove("active");
});

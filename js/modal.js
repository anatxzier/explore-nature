const modal = document.querySelector(".js-modal");
const desfoque = document.querySelector('main');
const email = localStorage.getItem("email");

if (email === null) {
  modal.classList.add("active");
  desfoque.classList.add("active");
} else {
  modal.classList.remove("active");
  desfoque.classList.remove("active");
}

const dados = {};

function forms(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

modal.addEventListener('change', forms);

document.querySelector(".modal-forms").addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("email", dados.email);
  alert("Obrigado pelo cadstro, seja bem-vindo!");
  modal.classList.remove("active");
  desfoque.classList.remove("active");
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("active");
  desfoque.classList.remove("active");
});

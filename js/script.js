// Mostra uma confirmação quando o formulário é enviado.
const formulario = document.getElementById("formularioContato");

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  document.getElementById("mensagemSucesso").classList.remove("d-none");
  formulario.reset();
});

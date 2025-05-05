// Apenas exemplo: exibe alerta ao enviar formulário (sem backend real)
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Este é apenas um exemplo.)');
  });
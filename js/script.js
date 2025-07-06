// script.js

$(document).ready(function () {
  // Validação do formulário de contato
  $('#form-contato').on('submit', function (e) {
    e.preventDefault();

    const nome = $('#nome').val().trim();
    const email = $('#email').val().trim();
    const mensagem = $('#mensagem').val().trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    this.reset();
  });

  // Efeito de hover no menu
  $('.nav-links a').hover(
    function () {
      $(this).css('color', '#9f7aea');
    },
    function () {
      $(this).css('color', '#ccc');
    }
  );

  // Scroll suave (caso use âncoras internas)
  $('a[href^=\"#\"]').on('click', function (e) {
    const target = $($(this).attr('href'));
    if (target.length) {
      e.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 70,
        },
        500
      );
    }
  });
});

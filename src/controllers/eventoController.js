const eventoModel = require('../models/eventoModel');

function exibirPaginaEventos(request, response) {
  response.render('eventos');
}

function exibirPaginaCriarEvento(request, response) {
  response.render('criarEvento')
}

function criarEvento(request, response) {
  const { titulo, local, data } = request.body;
  eventoModel.criarEvento(titulo, local, data);
  response.redirect('/eventos');
}

module.exports = {
  exibirPaginaEventos,
  exibirPaginaCriarEvento,
  criarEvento
};
const usuarioModel = require('../models/usuarioModel');


function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

function adicionarUsuario(request, response) {
  console.log(request.body);


  //extrari os dados do corpo de requisição

  const { nome, email, senha } = request.body;

  //adicionar o usuário
  usuarioModel.adicionarUsuario(nome, email, senha);

  //redirecionar para a tela de login
  response.redirect('/');
}

module.exports = {
  exibirPaginaCadastro,
  adicionarUsuario
}
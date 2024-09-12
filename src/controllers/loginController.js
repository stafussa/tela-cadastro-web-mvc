const usuarioModel = require('../models/usuarioModel');
const md5 = require('md5');

function exibirPaginaLogin(request, response) {
  response.render('login');
}

async function autenticarUsuario(request, response) {


  const { email, senha} = request.body;

  console.log(email, senha);

  // buscar o usuário no banco de dados
  const usuario = await usuarioModel.buscarUsuarioPorEmail(email);

  //verificar se o usuário existe
  if(usuario == undefined){
    response.render('login');
    return
  
  }
console.log("senha digitada:"+ senha);
console.log("senha armazenada:"+ usuario.senha);

  //verificar se a senha confere

if(md5(senha) !== usuario.senha){
  response.render('/');
  return
}

  //redirecionar para a tela inicial

  response.redirect('/eventos');
}

module.exports = {
  exibirPaginaLogin,
  autenticarUsuario

}
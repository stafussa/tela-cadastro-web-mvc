const md5 = require('md5');
// const { pool } = require('../config/banco-de-dados.js');

//Conexão com o banco de dados
const pool = require('../config/banco-de-dados.js');

const usuarios = [];

function adicionarUsuario(nome, email, senha) {
    
    // usuarios.push({
    //     id:Date.now(),
    //     nome: nome,
    //     email: email,
    //     senha: md5(senha),  
    //     criadoEm: new Date()

    // })

    // console.log(usuarios)

    //adicionando senha criptografada
    const senhaCriptografada = md5(senha);
    //adicionar um novo usuário no banco de dados
    pool.query(
`INSERT INTO usuarios (nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${senhaCriptografada}', NOW())`
    ).then(() => {
        console.log('DEU CERTO');
    })
    .catch((error) => {
        console.log('ERRO AO INSERIR DADOS', error)
    })
        }

module.exports = {
    adicionarUsuario
}



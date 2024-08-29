// Conexão com o banco de dados
const mysql = require('mysql2/promise');

//configuração da pool de conexões com mysql
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_eventos'
});



module.exports = pool
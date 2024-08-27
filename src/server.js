var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var enableHotReload = require("./hot-reload");

// Importando os controllers
var loginController = require("./controllers/loginController");
var cadastroController = require("./controllers/cadastroController");
var eventoController = require("./controllers/eventoController");

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas

//rota para pagina inicial
app.get("/", loginController.exibirPaginaLogin);


//rota para pagina de cadastro
app.get("/criar-conta", cadastroController.exibirPaginaCadastro);


//rota para criar novo usuario
app.post("/criar-conta", cadastroController.adicionarUsuario);


//rota para pagina de lista de eventos
app.get("/eventos", eventoController.exibirPaginaEventos);


//rota para pagina de criar evento
app.get("/criar-evento", eventoController.exibirPaginaCriarEvento);

app.post("/criar-evento", eventoController.criarEvento);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

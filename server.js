
const express = require('express');

const app = express();

const PORTA = 3366;

// Importar o controller
const produtoController = require('../controller/produtoController');

// Rota para listar os produtos
app.get('/produtos', produtoController.listarProdutos);

// Iniciar o servidor
app.listen(PORTA, () => {
    console.log('Servidor funcionando na porta ' + PORTA);
});

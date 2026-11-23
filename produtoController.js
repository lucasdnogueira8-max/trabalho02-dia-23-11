
const produtoModel = require('../model/produtoModel');

// Função para listar os produtos
function listarProdutos(req, res) {

    const produtos = produtoModel.listarProdutos();

    res.json(produtos);

}

// Exportar a função
module.exports = {
    listarProdutos
};

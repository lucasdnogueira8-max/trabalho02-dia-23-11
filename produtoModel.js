
const fs = require('fs');
const path = require('path');

// Função para buscar os produtos
function listarProdutos() {

    const caminho = path.join(__dirname, 'produtos.json');

    const dados = fs.readFileSync(caminho, 'utf8');

    const produtos = JSON.parse(dados);

    return produtos;
}

// Exportar a função
module.exports = {
    listarProdutos
};

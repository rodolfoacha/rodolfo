
const Livro = require('./livro-schema');

// Função assíncrona para obter todos os livros
const obterLivros = async () => {
    try {
        // Retorna todos os livros encontrados
        return await Livro.find();
    } catch (erro) {
        // Trata possíveis erros durante a busca
        throw erro;
    }
};

// Função assíncrona para incluir um novo livro
const incluir = async (livro) => {
    try {
        // Cria um novo livro com os dados fornecidos
        return await Livro.create(livro);
    } catch (erro) {
        // Trata possíveis erros durante a inclusão
        throw erro;
    }
};

// Função assíncrona para excluir um livro pelo código
const excluir = async (codigo) => {
    try {
        // Exclui o livro com o ID fornecido
        return await Livro.deleteOne({ _id: codigo });
    } catch (erro) {
        // Trata possíveis erros durante a exclusão
        throw erro;
    }
};

// Exportando as funções
module.exports = {
    obterLivros,
    incluir,
    excluir
};


const Livro = require('./livro-schema');

const obterLivros = async () => {
    try {
        return await Livro.find();
    } catch (erro) {
        throw erro;
    }
};

const incluir = async (livro) => {
    try {
        return await Livro.create(livro);
    } catch (erro) {
        throw erro;
    }
};

const excluir = async (codigo) => {
    try {
        return await Livro.deleteOne({ _id: codigo });
    } catch (erro) {
        throw erro;
    }
};

// Exportando as funções
module.exports = {
    obterLivros,
    incluir,
    excluir
};

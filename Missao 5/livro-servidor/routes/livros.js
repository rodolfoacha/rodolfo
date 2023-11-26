
const express = require('express');
const router = express.Router();

// Importando as funções do livro-dao
const livroDao = require('../modelo/livro-dao');

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

// Rota POST para adicionar um novo livro
router.post('/', async (req, res) => {
    try {
        const novoLivro = req.body;
        const livroCriado = await Livro.create(novoLivro);
        res.status(201).json(livroCriado);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
});

// Rota DELETE para excluir um livro pelo ID
router.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await livroDao.excluir(_id);
        res.json({ mensagem: "Livro excluído com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

// Exportando o router
module.exports = router;

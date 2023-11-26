
const express = require('express');
const router = express.Router();

const livroDAO = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        await livroDAO.incluir(livro);
        res.json({ mensagem: 'Livro adicionado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao adicionar livro' });
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await livroDao.excluir(_id);
        res.json({ mensagem: "Livro excluído com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
});

module.exports = router;

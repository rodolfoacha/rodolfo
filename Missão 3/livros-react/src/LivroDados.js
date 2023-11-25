import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

function LivroDados() {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);

  const navigate = useNavigate();
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const baseURL = "http://localhost:3000/api/livros";

  const incluirLivro = async (livro) => {
    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });
      return response.ok;
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
      return false;
    }
  };

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event) => {
    event.preventDefault();

    const autoresArray = autores.split('\n').map(author => author.trim());

    const novoLivro = {
      codLivro: 0,
      titulo,
      resumo,
      autores: autoresArray,
      codEditora,
    };

    const sucesso = await incluirLivro(novoLivro);

    if (sucesso) {
      navigate('/');
    } else {
      console.error("Erro ao incluir livro.");
    }
  };

  return (
    <main>
      <h2>Adicionar Livro</h2>
      <div className="caixa-formulario">
        <form onSubmit={incluir}>
          <div className="form-group">
            <label>Título:</label>
            <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Resumo:</label>
            <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Autores (um por linha):</label>
            <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Editora:</label>
            <select className="form-control" value={codEditora} onChange={tratarCombo}>
              {opcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Adicionar</button>
        </form>
      </div>
    </main>
  );
}

export default LivroDados;

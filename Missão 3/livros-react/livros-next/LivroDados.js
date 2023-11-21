import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleEditora } from './controle/ControleEditora';
import { ControleLivro } from './controle/ControleLivro';

function LivroDados() {

  const [opcoes, setOpcoes] = useState([]);
  const controleEditora = new ControleEditora();

  useEffect(() => {
    const editoras = controleEditora.getEditoras();
    const opcoesEditora = editoras.map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
    setOpcoes(opcoesEditora);
  }, []);


  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes.length ? opcoes[0].value : 0);


  const navigate = useNavigate();


  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };


  const incluir = (evento) => {
    evento.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    new ControleLivro().incluir(novoLivro);
    navigate('/');
  };

 
  return (
    <main style={{ padding: '20px' }}>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '600px' }}>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ height: '35px' }}
        />

        <label htmlFor="resumo">Resumo</label>
        <textarea
          id="resumo"
          value={resumo}
          onChange={(e) => setResumo(e.target.value)}
          style={{ height: '100px' }}
        />

        <label htmlFor="editora">Editora</label>
        <select
          id="editora"
          value={codEditora}
          onChange={tratarCombo}
          style={{ height: '35px' }}
        >
          {opcoes.map((opcao) => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.text}
            </option>
          ))}
        </select>

        <label htmlFor="autores">Autores (1 por linha)</label>
        <textarea
          id="autores"
          value={autores}
          onChange={(e) => setAutores(e.target.value)}
          style={{ height: '100px' }}
        />

        <button type="submit" style={{ height: '35px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>
          Salvar Dados
        </button>
      </form>
    </main>
  );
}

export default LivroDados;

import React from 'react';
import { Livro } from '../modelo/Livro';
import { ControleEditora } from '../controle/ControleEditora';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td className="titulo">
        <div>
          <span className="titulo-texto">{livro.titulo}</span>
          <button className="excluir" onClick={() => excluir(livro.codigo)}>Excluir</button>
        </div>
      </td>
      <td className="resumo">{livro.resumo}</td>
      <td className="editora">{nomeEditora}</td>
      <td className="autores">
        <ul>
          {livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}
        </ul>
      </td>
    </tr>
  );
};

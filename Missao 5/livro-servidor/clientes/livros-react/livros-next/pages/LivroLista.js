import React, { useState, useEffect } from 'react';
import { ControleLivro } from '../controle/ControleLivro';
import { ControleEditora } from '../controle/ControleEditora';
import './LivroLista.css';

const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <div>{livro.titulo}</div>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.autores.join(", ")}</td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    const controleLivros = new ControleLivro(); // Renomeado para controleLivros

    useEffect(() => {
        if (!carregado) {
            controleLivros.obterTodos().then(result => {
                setLivros(result); // Usando o resultado da chamada assíncrona
                setCarregado(true);
            });
        }
    }, [carregado]);

    const excluir = codigo => {
        controleLivros.excluir(codigo)
            .then(() => setCarregado(false)); // Definindo carregado como falso após a exclusão
    };

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => ( // Adicionando index como parâmetro
                        <LinhaLivro key={index} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;

import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Array<Livro> = [
        { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo A', autores: ['Autor 1'] },
        { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo B', autores: ['Autor 2'] },
        { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo C', autores: ['Autor 3'] }
    ];

    constructor() { }

    obterLivros(): Array<Livro> {
        return this.livros;
    }

    incluir(livro: Livro): void {
        const novoCodigo = this.livros.reduce((max, livro) => livro.codigo > max ? livro.codigo : max, 0) + 1;
        livro.codigo = novoCodigo;
        this.livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = this.livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}

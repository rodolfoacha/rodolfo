import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseURL = 'http://localhost:3030/livros';

  constructor() { }

  obterLivros(): Promise<Array<Livro>> {
    return fetch(this.baseURL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar livros');
        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  excluir(codigo: string): Promise<boolean> {
    return fetch(`${this.baseURL}/${codigo}`, {
      method: 'DELETE'
    })
      .then(response => response.ok)
      .catch(error => {
        console.error(error);
        throw error;
      });
  }

  incluir(livro: Livro): Promise<boolean> {
    return fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livro)
    })
      .then(response => response.ok)
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
}

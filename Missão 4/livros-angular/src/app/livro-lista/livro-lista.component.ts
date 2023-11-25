import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) { }

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros() {
    this.livros = this.servLivros.obterLivros();
  }

  excluir(codigo: number) {
    this.servLivros.excluir(codigo);
    this.carregarLivros(); 
  }

  obterNomeEditora(codEditora: number): string | undefined {
    return this.servEditora.getNomeEditora(codEditora);
  }
}

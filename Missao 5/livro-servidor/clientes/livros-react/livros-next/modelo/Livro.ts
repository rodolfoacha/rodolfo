export class Livro {
    codigo: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(
      codigo: number,
      codEditora: number,
      titulo: string,
      resumo: string,
      autores: string[]
    ) {
      this.codigo = codigo.toString();
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
    }
  }

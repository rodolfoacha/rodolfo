export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autor: string[];

    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autor = autores;
    }
}

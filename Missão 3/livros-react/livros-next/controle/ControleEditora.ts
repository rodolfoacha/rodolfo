import { Editora } from "../modelo/Editora";


const editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C')
];

export class ControleEditora {
    getNomeEditora(codEditora: number): string {
        const editora = editoras.find(editora => editora.codEditora === codEditora);
        return editora ? editora.nome : 'Editora não encontrada';
    }

    getEditoras(): Array<Editora> {
        return editoras;
    }
}

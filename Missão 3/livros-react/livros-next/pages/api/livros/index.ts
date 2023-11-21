import { NextApiRequest, NextApiResponse } from 'next';

class ControleLivro {
  private livros = [
    { codigo: 1, titulo: 'Livro 1', autor: 'Autor 1' },
    { codigo: 2, titulo: 'Livro 2', autor: 'Autor 2' },
    { codigo: 3, titulo: 'Livro 3', autor: 'Autor 3' },
  ];

  public obterLivros() {
    return this.livros;
  }

  public incluirLivro(livro: { codigo: number; titulo: string; autor: string }) {
    this.livros.push(livro);
  }

  public excluirLivro(codigo: number) {
    const index = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const novoLivro = req.body;
      controleLivro.incluirLivro(novoLivro);
      res.status(200).json({ mensagem: 'Livro adicionado com sucesso' });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ statusCode: 500, message: error.message });
    } else {
      res.status(500).json({ statusCode: 500, message: 'An unexpected error occurred' });
    }
  }
};

export { controleLivro };

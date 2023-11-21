import { NextApiRequest, NextApiResponse } from 'next';

class ControleEditora {
  private editoras = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Bookman' },
    { codEditora: 3, nome: 'Addison Wesley' },
    { codEditora: 4, nome: 'Pearson' }
  ];

  public getEditoras() {
    return this.editoras;
  }

  public getNomeEditora(cod: number) {
    const editora = this.editoras.find(editora => editora.codEditora === cod);
    return editora ? editora.nome : null;
  }
}

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
    } else {
      res.setHeader('Allow', ['GET']);
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

export { controleEditora };

import type { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'DELETE') {
      const { codigo } = req.query;
      const codigoLivro = Number(codigo);

      controleLivro.excluirLivro(codigoLivro);
      res.status(200).json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.setHeader('Allow', ['DELETE']);
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

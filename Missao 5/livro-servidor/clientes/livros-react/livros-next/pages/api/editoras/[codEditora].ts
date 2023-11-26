import type { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);

            if (nomeEditora) {
                res.status(200).json({ nome: nomeEditora });
            } else {
                res.status(404).json({ mensagem: "Editora não encontrada" });
            }
        } catch (error) {
            res.status(500).json({ mensagem: "Erro no servidor" });
        }
    } else {
        res.status(405).end(); // Método não permitido
    }
};

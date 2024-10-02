// pages/api/filmes.js
import Filme from '../../models/Filme'; 
import sequelize from '../../models'; 

export default async function handler(req, res) {
    await sequelize.sync(); 

    if (req.method === 'GET') {
        const filmes = await Filme.findAll();
        res.status(200).json(filmes);
    } else if (req.method === 'POST') {
        const { titulo, ano, lancamento, diretor, generoId } = req.body;
        const novoFilme = await Filme.create({ titulo, ano, lancamento, diretor, generoId });
        res.status(201).json(novoFilme);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

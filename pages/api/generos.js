// pages/api/generos.js
export default function handler(req, res) {
    const generos = [
        { id: 1, nome: 'Ação' },
        { id: 2, nome: 'Drama' },
        { id: 3, nome: 'Comédia' },
    
    ];

    res.status(200).json(generos);
}

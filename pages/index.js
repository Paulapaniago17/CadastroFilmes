// pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const fetchFilmes = async () => {
            const response = await axios.get('/api/filmes');
            setFilmes(response.data);
        };
        fetchFilmes();
    }, []);

    return (
        <div>
            <h1>Lista de Filmes</h1>
            <ul>
                {filmes.map((filme) => (
                    <li key={filme.id}>
                        {filme.titulo} ({filme.ano}) - {filme.diretor}
                    </li>
                ))}
            </ul>
            <a href="/importarFilmes">Importar Filmes</a>
        </div>
    );
};

export default Home;
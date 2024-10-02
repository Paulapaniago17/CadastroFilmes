import { useState, useEffect } from 'react';
import axios from 'axios';

const Generos = () => {
    const [generos, setGeneros] = useState([]);
    const [novoGenero, setNovoGenero] = useState('');

    useEffect(() => {
        const fetchGeneros = async () => {
            const response = await axios.get('/api/generos');
            setGeneros(response.data);
        };
        fetchGeneros();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/generos', { nome: novoGenero });
        setNovoGenero('');
        const response = await axios.get('/api/generos');
        setGeneros(response.data);
    };

    return (
        <div>
            <h1>Cadastro de Gêneros</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={novoGenero}
                    onChange={(e) => setNovoGenero(e.target.value)}
                    placeholder="Nome do Gênero"
                    required
                />
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {generos.map((genero) => (
                    <li key={genero.id}>{genero.nome}</li>
                ))}
            </ul>
        </div>
    );
};

export default Generos;

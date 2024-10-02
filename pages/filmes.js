import { useState, useEffect } from 'react';
import axios from 'axios';

const Filmes = () => {
    const [filmes, setFilmes] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [lancamento, setLancamento] = useState('');
    const [diretor, setDiretor] = useState('');
    const [generos, setGeneros] = useState([]);
    const [generoId, setGeneroId] = useState('');

    useEffect(() => {
        const fetchFilmes = async () => {
            const response = await axios.get('/api/filmes');
            setFilmes(response.data);
        };

        const fetchGeneros = async () => {
            const response = await axios.get('/api/generos');
            setGeneros(response.data);
        };

        fetchFilmes();
        fetchGeneros();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/filmes', { titulo, ano, lancamento, diretor, generoId });
        setTitulo('');
        setAno('');
        setLancamento('');
        setDiretor('');
        setGeneroId('');
        const response = await axios.get('/api/filmes');
        setFilmes(response.data);
    };

    return (
        <div>
            <h1>Cadastro de Filmes</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Título"
                    required
                />
                <input
                    type="number"
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    placeholder="Ano"
                    required
                />
                <input
                    type="date"
                    value={lancamento}
                    onChange={(e) => setLancamento(e.target.value)}
                    placeholder="Data de Lançamento"
                    required
                />
                <input
                    type="text"
                    value={diretor}
                    onChange={(e) => setDiretor(e.target.value)}
                    placeholder="Diretor"
                    required
                />
                <select value={generoId} onChange={(e) => setGeneroId(e.target.value)} required>
                    <option value="">Selecione um Gênero</option>
                    {generos.map((genero) => (
                        <option key={genero.id} value={genero.id}>
                            {genero.nome}
                        </option>
                    ))}
                </select>
                <button type="submit">Adicionar Filme</button>
            </form>
            <ul>
                {filmes.map((filme) => (
                    <li key={filme.id}>
                        {filme.titulo} ({filme.ano}) - {filme.diretor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filmes;

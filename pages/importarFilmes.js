import axios from 'axios';
import { useState } from 'react';

const ImportFilmes = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const importMovies = async () => {
        setLoading(true);
        setError('');

        try {
            for (let i = 1; i <= 200; i++) {
                const response = await axios.get(`http://www.omdbapi.com/?i=tt${String(i).padStart(7, '0')}&apikey=292509f1`);

                if (response.data.Response === "True") {
                    await axios.post('/api/filmes', {
                        titulo: response.data.Title,
                        ano: response.data.Year,
                        lancamento: response.data.Released,
                        diretor: response.data.Director,
                        generoId: 1, 
                    });
                } else {
                    console.log(`Filme não encontrado: tt${String(i).padStart(7, '0')}`);
                }
                await new Promise((resolve) => setTimeout(resolve, 1000)); 
            }
            alert('Filmes importados com sucesso!');
        } catch (err) {
            console.error("Erro ao importar filmes:", err);
            setError('Ocorreu um erro ao importar os filmes. Verifique o console para mais detalhes.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Importar Filmes</h1>
            <button onClick={importMovies} disabled={loading}>
                {loading ? 'Importando...' : 'Importar 200 Filmes'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ImportFilmes;

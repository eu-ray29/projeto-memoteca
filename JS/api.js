const api = {
    async bucarPensamentos() {
        try {
            const resposta = await fetch('http://localhost:3000/pensamentos');
            return await resposta.json();
        } catch (error) {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
    }
}

export default api;

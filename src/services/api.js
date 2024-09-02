const API_URL = 'http://localhost:3001';

const api = {
    getDespesas: async () => {
        const response = await fetch(`${API_URL}/despesas`);
        return response.json();
    },
    atualizarDespesa: async (nome, updates) => {
        const response = await fetch(`${API_URL}/despesas/${nome}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
        });
        return response.json();
    }
};

export default api;

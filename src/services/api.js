const API_URL = 'http://147.79.107.23:3000';

const api = {
    login: async (Usr, SenhaUsr) => {
        const response = await fetch(`${API_ULR}/login`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Usr, SenhaUsr)
        });
        return response.json();
    },
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
    },
    adicionarDespesa: async (newDespesa) => {
        try {
            const response = await fetch(`${API_URL}/despesas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDespesa),
            });
    
            return response;
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            // Aqui você pode exibir uma mensagem de erro para o usuário
            return;
        }
    },
};

export default api;

const api = {
    login: async (Usr, SenhaUsr) => {
        const apiLoginUrl = import.meta.env.VITE_API_URL;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "Usr": Usr,
                    "SenhaUsr": SenhaUsr
                })
            });
            return response.json();
        } catch (error) {
            return console.log(error);
        }
        
    },
    getDespesas: async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas`);
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
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas`, {
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

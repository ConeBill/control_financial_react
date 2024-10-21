const api = {
    login: async (Usr, SenhaUsr) => {
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
    cadastro: async (Usr, NomeUsr, SenhaUsr, Email) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/cadastro/novo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Usr": Usr,
                "NomeUsr": NomeUsr || "",
                "SenhaUsr": SenhaUsr,
                "Email": Email || "",
            })
        });
        return response.json();
    },
    getDespesas: async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas`);
            return response.json();
        } catch (error) {
            console.log("Error => ", error);
        }
        
    },
    getDespesasPagar: async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas/pagar`);
            return response.json();
        } catch (error) {
            console.log("Error => ", error);
        }
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
            return;
        }
    },
};

export default api;

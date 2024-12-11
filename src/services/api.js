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
    getDespesas: async (idUser) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas?idUser=${idUser}`);
            return response.json();
        } catch (error) {
            console.log("Error => ", error);
        }

    },
    getDespesasPagar: async (idUser, token) => {
        const currentDate = new Date().toISOString().split('T')[0];
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/despesas/pagar?idUser=${idUser}&currentDate=${currentDate}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.json();
        } catch (error) {
            console.log("Error => ", error);
        }
    },
    getContasFull: async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/contas/full`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.json();
    },
    getContas: async (idOrigem) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/contas/usr?idOrigem=${idOrigem}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
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
            return;
        }
    },
    adicionarReceita: async (newReceita) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/movimentos/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newReceita)
            });
            return 'Adicionado com sucesso.'
        } catch (error) {
            return 'Erro ao adicionar valores.'
        }
    },
    adicionarConta: async (newConta) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL_LOCAL}/contas/novaconta`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newConta),
            });

            const result = await response.json();

            return {
                result: result,
                mgs: 'Conta adicionada com sucesso.'
            };
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            return;
        }
    }
};

export default api;

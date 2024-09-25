import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definição das interfaces
interface Transacao {
    id: number;
    tipo: 'entrada' | 'saida';
    descricao: string;
    valor: number;
}

interface TransacaoState {
    transacoes: Transacao[];
}

// Estado inicial
const initialState: TransacaoState = {
    transacoes: [],
};

// Criação do slice de transações
const transacaoSlice = createSlice({
    name: 'transacao',
    initialState,
    reducers: {
        // Ação para adicionar uma transação
        adicionarTransacao: (state: TransacaoState, action: PayloadAction<Transacao>) => {
            state.transacoes.push(action.payload);
        },
        // Ação para remover uma transação pelo ID
        removerTransacao: (state: TransacaoState, action: PayloadAction<number>) => {
            state.transacoes = state.transacoes.filter((transacao: Transacao) => transacao.id !== action.payload);
        },
    },
});

// Exportação das ações e do reducer
export const { adicionarTransacao, removerTransacao } = transacaoSlice.actions;
export default transacaoSlice.reducer;

import { AdicionarTransacao, RemoverTransacao, TransacaoEstado, TransacaoActionTypes } from "./ActionTypes";
import { combineReducers } from 'redux';

// Estado inicial com a lista de transações vazia
const EstadoInicial: TransacaoEstado = {
    transacoes: [], // Nome corrigido para corresponder à interface TransacaoEstado
};

// Reducer para gerenciar o estado das transações
export const TransacaoReducer = (
    state = EstadoInicial,
    action: TransacaoActionTypes
): TransacaoEstado => { // Retorna o tipo TransacaoEstado
    switch (action.type) {
        case AdicionarTransacao: // Tipo de ação, deve ser uma constante string
            return {
                ...state,
                transacoes: [...state.transacoes, action.payload], // Adiciona nova transação ao array 'transacoes'
            };
        case RemoverTransacao: // Tipo de ação, deve ser uma constante string
            return {
                ...state,
                transacoes: state.transacoes.filter(transacao => transacao.id !== action.payload), // Remove a transação pelo id
            };
        default:
            return state;
    }
};

// Combinação dos reducers, aqui só temos um, mas você pode adicionar mais
const rootReducer = combineReducers({
    transacoes: TransacaoReducer, // Nome do estado corresponde ao nome do reducer
});

// Definição do tipo do estado da aplicação
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;

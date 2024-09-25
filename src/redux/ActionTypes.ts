// Definindo constantes para os tipos de ações
export const AdicionarTransacao = 'AdicionarTransacao';
export const RemoverTransacao = 'RemoverTransacao'; // Corrigido apóstrofo extra

// Interface para a entidade Transacao
export interface Transacao {
    id: number;
    descricao: string;
    valor: number;
}

// Interface para o estado das transações
export interface TransacaoEstado {
    transacoes: Transacao[]; // Nome atualizado para indicar uma lista de transações
}

// Interface para a ação de adicionar transação
export interface AdicionarTransacaoAction {
    type: typeof AdicionarTransacao;
    payload: Transacao;
}

// Interface para a ação de remover transação
export interface RemoverTransacaoAction {
    type: typeof RemoverTransacao;
    payload: number;
}

// Tipo que engloba todas as ações de transação
export type TransacaoActionTypes = AdicionarTransacaoAction | RemoverTransacaoAction;

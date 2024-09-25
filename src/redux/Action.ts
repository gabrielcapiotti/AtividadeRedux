import { Transacao, TransacaoActionTypes, AdicionarTransacao, RemoverTransacao } from "./ActionTypes";

export const adicionarTransacao = (transacao: Transacao): TransacaoActionTypes => ({
    type: AdicionarTransacao,
    payload: transacao,
});

export const removerTransacao = (id: number): TransacaoActionTypes => ({
    type: RemoverTransacao,
    payload: id,
});

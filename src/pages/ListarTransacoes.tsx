import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Box, Typography, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

interface Transacao {
    id: number;
    tipo: 'entrada' | 'saida';
    descricao: string;
    valor: number;
}

export function ListarTransacoes() {
    const transacoes = useSelector((state: RootState) => state.transacao.transacoes);
    const navigate = useNavigate(); // Criar uma instância do useNavigate

    const saldoAtual = transacoes.reduce((acc: number, transacao: Transacao) => {
        return transacao.tipo === 'entrada' ? acc + transacao.valor : acc - transacao.valor;
    }, 0);

    return (
        <Box maxWidth={600} margin="auto" mt={4}>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => navigate(-1)} // Redireciona para a última página visitada
                sx={{ mb: 2 }}
            >
                Voltar
            </Button>
            <Typography variant="h4" mb={2}>
                Saldo Atual: R$ {saldoAtual.toFixed(2)}
            </Typography>
            <Divider />
            {transacoes.map((transacao: Transacao) => (
                <Box key={transacao.id} display="flex" justifyContent="space-between" p={2} borderBottom="1px solid #ccc">
                    <Typography>{transacao.descricao}</Typography>
                    <Typography color={transacao.tipo === 'entrada' ? 'green' : 'red'}>
                        {transacao.tipo === 'entrada' ? '+' : '-'} R$ {transacao.valor.toFixed(2)}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

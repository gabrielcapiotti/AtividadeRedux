import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarTransacao } from '../store/slices/TransacoesSlice';
import { Box, Button, TextField, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate

const tiposTransacao = [
    { value: 'entrada', label: 'Entrada' },
    { value: 'saida', label: 'Saída' },
];

export default function RegistrarTransacao() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState<'entrada' | 'saida'>('entrada');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Instanciar o useNavigate

    const handleAdicionar = () => {
        if (descricao && valor) {
            const novaTransacao = {
                id: Math.random(),
                tipo,
                descricao,
                valor: parseFloat(valor),
            };
            dispatch(adicionarTransacao(novaTransacao));
            setDescricao('');
            setValor('');
            navigate('/listagemtransacao'); // Redirecionar para a página de listagem
        }
    };

    return (
        <Box display="flex" flexDirection="column" maxWidth={400} margin="auto">
            <TextField
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                label="Valor"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                select
                label="Tipo de Transação"
                value={tipo}
                onChange={(e) => setTipo(e.target.value as 'entrada' | 'saida')}
                sx={{ mb: 2 }}
            >
                {tiposTransacao.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Button variant="contained" onClick={handleAdicionar}>
                Adicionar Transação
            </Button>
        </Box>
    );
}

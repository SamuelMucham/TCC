import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes'; // <-- Linha adicionada

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(router); // <-- Linha adicionada para ativar as rotas

// Rota de teste antiga
app.get('/health', (req, res) => {
  return res.json({ status: "TechFlow API rodando com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor TechFlow ativo na porta ${PORT}`);
});
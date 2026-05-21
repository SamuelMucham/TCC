import { Router } from 'express';
import { CriarUsuarioController } from './controllers/CriarUsuarioController';

const router = Router();

// Instancia o controller
const criarUsuarioController = new CriarUsuarioController();

// Define a rota de cadastro de usuário
router.post('/usuarios', criarUsuarioController.handle);

export { router };
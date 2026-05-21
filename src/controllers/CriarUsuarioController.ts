import { Request, Response } from 'express';
import { CriarUsuarioService } from '../services/CriarUsuarioservice';

class CriarUsuarioController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha, cargo } = req.body;

    const criarUsuarioService = new CriarUsuarioService();

    try {
      // Executa a lógica de negócio
      const usuario = await criarUsuarioService.execute({ nome, email, senha, cargo });
      return res.status(201).json(usuario);
    } catch (error: any) {
      // Se der erro (ex: e-mail duplicado), captura aqui e devolve pro front
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CriarUsuarioController };
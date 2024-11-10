import express from 'express';
import FuncionarioController from '../controllers/FuncionarioController.js';

const router = express.Router();

// Rota para cadastrar funcionário
router.post('/cadastrar', FuncionarioController.cadastrar);

export default router;
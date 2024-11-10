import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import funcionarioRoutes from './routes/funcionarioRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public/css')));
// Rota da API
app.use('/api/funcionario', funcionarioRoutes);
// Rota para acessar o index.html diretamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {app.use(express.static(path.join(__dirname, 'public')));
    console.log(`Servidor rodando na porta ${PORT}`);
});
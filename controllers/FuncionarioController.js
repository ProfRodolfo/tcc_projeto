import Funcionario from '../models/FuncionarioModel.js';
class FuncionarioController {
    static async cadastrar(req, res) {
        const { nome, id, telefone, informacoesSaude, contatoEmergencia } = req.body;
        try {
            await Funcionario.create(nome, id, telefone, informacoesSaude, contatoEmergencia);
            res.status(201).send('Funcionário cadastrado com sucesso!');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}
export default FuncionarioController;
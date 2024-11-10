import connection from '../data/db.js';
class Funcionario {
    static async create(nome, id, telefone, informacoesSaude, contatoEmergencia) {
        const query = 'INSERT INTO funcionarios (nome, id_funcionario, telefone, informacoes_saude, contato_emergencia) VALUES (?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            connection.query(query, [nome, id, telefone, informacoesSaude, contatoEmergencia], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}
export default Funcionario;
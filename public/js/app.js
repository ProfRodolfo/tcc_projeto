document.getElementById('cadastroForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const id = document.getElementById('id').value;
    const telefone = document.getElementById('telefone').value;
    const informacoesSaude = document.getElementById('informacoesSaude').value;
    const contatoEmergencia = document.getElementById('contatoEmergencia').value;

    try {
        const response = await fetch('http://localhost:3000/api/funcionario/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, id, telefone, informacoesSaude, contatoEmergencia })
        });
        const data = await response.text();
        document.getElementById('mensagem').innerText = data;
        document.getElementById('cadastroForm').reset();
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerText = 'Erro ao cadastrar funcionário.';
    }
});
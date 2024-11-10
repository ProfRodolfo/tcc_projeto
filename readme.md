# Cadastro de Funcionários

Este é um projeto de cadastro de funcionários desenvolvido com Node.js, Express e MySQL. O objetivo é permitir o registro e gerenciamento de informações de funcionários de forma simples e eficiente.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web para Node.js.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **HTML/CSS/JavaScript**: Tecnologias para a interface do usuário.
- **Body-parser**: Middleware para manipulação de requisições JSON.
- **CORS**: Middleware para habilitar compartilhamento de recursos entre diferentes origens.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu_usuario/cadastro-funcionarios.
   ```

2. **Navegue até a pasta do projeto:**
   ```bash
   cd cadastro-funcionarios
   ```
3. **Instale as dependências:**
  ```bash
   npm install
   ```
4. **Configure o banco de dados:**

   * Crie um banco de dados chamado `cadastro_funcionarios`.
   * Execute o seguinte comando SQL para criar a tabela de funcionários:
 
     ```
     CREATETABLE funcionarios (
         id INT AUTO_INCREMENT PRIMARY KEY,
         nome VARCHAR(100) NOTNULL,
         id_funcionario VARCHAR(50) NOTNULLUNIQUE,
         telefone VARCHAR(15) NOTNULL,
         informacoes_saude TEXT,
         contato_emergencia VARCHAR(100) NOTNULL
     );
     ```
5. **Configure as credenciais do banco de dados:**

   * No arquivo `data/db.js`, configure suas credenciais do MySQL.
6. **Inicie o servidor:**
   bash```

   npm start
   ```

   O servidor estará rodando em `http://localhost:3000`.

## Estrutura do Projeto

/cadastro-funcionarios
|-- /controllers        # Controladores da aplicação
|-- /data               # Configurações do banco de dados
|-- /models             # Modelos de dados
|-- /routes             # Rotas da API
|-- /public             # Arquivos estáticos (CSS, JS)
|   |-- /css            # Estilos CSS
|   |-- /js             # Scripts JavaScript
|-- /views              # Arquivos HTML
|   |-- index.html      # Página principal
|-- server.js           # Arquivo principal do servidor
|-- package.json        # Dependências e scripts do projeto



## Uso

1. Abra seu navegador e acesse `http://localhost:3000/` para acessar a interface de cadastro de funcionários.
2. Preencha os campos do formulário com as informações do funcionário e clique em "Cadastrar".
3. As informações serão enviadas para a API e armazenadas no banco de dados.

## Endpoints da API

* **POST /api/funcionario**
  * Adiciona um novo funcionário ao banco de dados.
  * **Body:**  

    ```bash json
    {
    "nome": "Nome do Funcionário",
    "id_funcionario": "ID do Funcionário",
    "telefone": "Telefone",
    "informacoes_saude": "Informações de Saúde",
    "contato_emergencia": "Contato de Emergência"
    }
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o repositório.
2. Crie uma branch para sua feature:

   bash``` 
   git checkout -b minha-feature
   ```
3. Faça commit das suas mudanças:

   ```bash 
     git commit -m 'Adiciona nova feature'
   ```
4. Faça push para a branch:

   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.


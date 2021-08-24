<div align="center">
    <h2>EurekaFind-api</h2>

![Nextjs](https://img.shields.io/badge/-NodeJs-000000?style=flat-square&logo=node.js&logoColor=white "Node.js")

</div>
---

## 🔥 O Projeto

Esse projeto foi desenvolvido como teste admissional para entrar na **Eureka labs**. Usei o Sequelize para executar as migrations e acelerar no desenvolvimento, bem como facilitar a um outro desenvolvedor a trabalhar neste projeto no futuro se fosse o caso.
O intuito da api é informar dados de um determinado cep buscado por um usuário, para fazer essas requisições foi utilizada a api da <a href="https://viacep.com.br/" target="_blank">viaCEP</a>. 
Quando um cep for pesquisado pela primeira vez ele será armazenado no banco de dados para que de uma proxíma vez essa requisição seja feita mais rápidamente.

## 🚀 Tecnologias Utilizadas

- Express
- Sequelize
- MySQL
- Axios

---

## Para Clonar o projeto

```bash
    $ git clone https://github.com/julioceno/Eureka-find-api.git

    # Go into the repository
    $ cd eurekaFind-api

    # Install dependencies
    $ yarn install

    # Create database
    $ yarn sequelize db:create

    # Create tables
    $ yarn sequelize db:migrate

    # Run the app
    $ yarn start

    # Run the app in development
    $ yarn dev
```

### Logo após 
**Crie um arquivo .env na raiz do projeto com as seguintes variáveis:**
<br/>
MYSQL_HOST=localhost
<br/>
MYSQL_USER=SEU_USUÁRIO
<br/>
MYSQL_PASSWORD=SUA_SENHA
<br/>
MYSQL_DATABASE=NOME_DO_BANCO

---

# 📝 Rotas da Aplicação

### Consultar o cep:
localhost:3333/getCep/:cep

---

<h4 align="center"> <em>&lt;/&gt;</em> by <a href="https://github.com/julioceno" target="_blank">julioceno</a> </h4>
